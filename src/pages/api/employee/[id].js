const handler = async (req, res) => {
    dbconn();
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'POST':
            try {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(404).json({ message: "User not found" });
                }
                const attendance = await Attendance.create({
                    employee: id,
                    attendance: req.body.attendance
                });
                if (!attendance) {
                    return res.status(400).json({ message: "Failed to add attendance" });
                }
                return res.status(200).json({ message: "Attendance successfully recorded" });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal server error" });
            }

        case 'GET':
            try {
                const attendanceData = await Attendance.find({ employee: id });
                if (!attendanceData) {
                    return res.status(404).json({ message: "Data not found" });
                }
                return res.status(200).json(attendanceData);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal server error" });
            }

        default:
            return res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
