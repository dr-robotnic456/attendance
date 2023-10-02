import mongoose, { Schema } from "mongoose"

const attendanceSchema = new Schema({
    employee : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    },

    attendance:{
        type:String,
        enum:['present', 'absent'],
        required:true
    }
});

export default mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);