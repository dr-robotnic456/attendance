import mongoose, {Schema} from "mongoose"

const EmployeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    employeeId:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    fingerprint:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    attendance : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Attendance"
    },

})

export default mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema)