import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Attendance = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const router = useRouter();
  const { employeeId } = router.query;

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employee');
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleAttendance = async (attendanceStatus) => {
    if (!selectedEmployee) {
      toast.error('Please select an employee first.');
      return;
    }
  
    try {
      const response = await axios.post('/api/attendance', {
        employeeId: selectedEmployee._id, // Pass the employeeId in the request body
        attendance: attendanceStatus,
      });
      if (response.status === 200) {
        toast.success('Attendance recorded successfully');
      } else {
        toast.error('Failed to record attendance');
      }
    } catch (error) {
      console.error('server error one',error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f1f1f1] w-full">
      <ToastContainer />
      <div className="flex flex-col w-[50%]">
        <div className="w-[90%]">
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-400">Employee List</h2>
          <ul className="space-y-2">
            {employees.map((employee) => (
              <li
                key={employee._id}
                onClick={() => handleEmployeeSelect(employee)}
                className={`p-2 cursor-pointer hover:bg-gray-200 text-gray-500 ${
                  selectedEmployee && selectedEmployee._id === employee._id
                    ? 'bg-gray-200'
                    : ''
                }`}
              >
                {employee.name}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="py-10 flex px-5 w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full flex flex-col py-10 items-center rounded-lg bg-[#f8f8f8] space-x-10 space-y-10">
            <div className="w-[90%]">
              <input
                type="text"
                className="w-full h-10 px-4 text-gray-600"
                placeholder="Name: "
                value={selectedEmployee ? selectedEmployee.name : ''}
                readOnly
              />
            </div>

            <div className="flex w-full justify-around">
              <button
                type="button"
                className="bg-green-400 text-white py-2 px-3 rounded-lg"
                onClick={() => handleAttendance('Present')}
                disabled={!selectedEmployee} // Disable button if no employee is selected
              >
                Present
              </button>
              <button
                type="button"
                className="bg-red-400 text-white py-2 px-3 rounded-lg"
                onClick={() => handleAttendance('Absent')}
                disabled={!selectedEmployee} // Disable button if no employee is selected
              >
                Absent
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
