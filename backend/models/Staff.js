const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        enum:["Chef","Manager","Waiter","Cashier","Barista",],
        required: true,
        trim:true
    },
    experience:{
        type:Number,
        required: true,
    },
  shift: {
    type: String,
    enum: ["Morning", "Evening", "Night"],
    required: true
},
    status:{
        type:String,
        enum:["Active", "On Leave"],
        default:"Active"
    },
    joiningDate: {
    type: Date,
    default: Date.now
},
phone: {
    type: String,
    required: true,
    trim: true
}
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Staff",staffSchema);