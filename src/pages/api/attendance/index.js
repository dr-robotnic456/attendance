import Attendance from '../models/attendance';
import Employee from '../models/employees'; // Import the Employee model
import dbconn from '../db/dbconn';
import mongoose from 'mongoose';

const handler = async (req, res) => {
  dbconn();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { id } = req.query;
        // const { attendance } = req.body;

        // Check if the ID is valid (you can add further validation if needed)
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Retrieve the employee data by populating it
        const employeeData = await Employee.findById(id);

        if (!employeeData) {
          return res.status(404).json({ message: 'Employee not found' });
        }

        // Create a new attendance record for the specified employee
        const newAttendance = await Attendance.create({
          employee: employeeData, // Pass the populated employee data
          attendance,
        });

        if (!newAttendance) {
          return res.status(400).json({ message: 'Failed to add attendance' });
        }

        return res.status(200).json({ message: 'Attendance successfully recorded' });
      } catch (error) {
        console.log('Server error',error);
        return res.status(500).json({ message: 'Internal server error' });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
