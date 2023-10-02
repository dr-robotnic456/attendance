import dbconn from "../db/dbconn";
import Employee from "../models/employees"

const handler = async (req, res) => {
    dbconn()
    const { method } = req;
    
    switch (method) {
        case "POST":
            try{
                const employee = await Employee.create({...req.body});
                if(!employee){
                    return res.status(401).json({message:"Please provide all credentials"})
                }
                return res.status(200).json(employee)
            }catch(error){
                console.log(error)
            }

        case "GET":
            try{
                const employees = await Employee.find();
                if(!employees){
                    return res.status(401).json({message:"No employees found"})
                }
                return res.status(200).json(employees)
            }catch(error){
                console.log(error)
            }
    
        default:
            break;
    }
}

export default handler;