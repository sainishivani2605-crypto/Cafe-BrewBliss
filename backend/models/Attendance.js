const mongoose = require("mongoose");
const attendanceSchema = new mongoose.Schema({
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        required: true
    },

    date: {
        type: Date,
        required: true
    },

checkIn: {
    type: String,
    default: ""
},
checkOut: {
    type: String,
    default: ""
},

    status: {
        type: String,
        enum: ["Present", "Absent", "Leave"],
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model("Attendance",attendanceSchema);