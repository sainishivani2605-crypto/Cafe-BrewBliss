const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Staff",
        required:true
    },
    date:{
type:Date,
required:true
    },
    checkIn:{
        type:String,
        required:true,
        trim:true
    },
    checkOut:{
        type:String,
        required:true,
        trim:true
    },
    status:{
type:String,
enum:["Present","Absent","Leave"],
required:true
    }
},
{
    timestamps:true
}
);
module.exports = mongoose.model("Attendance",attendanceSchema);