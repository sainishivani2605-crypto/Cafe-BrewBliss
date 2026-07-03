const express = require("express");
const router = express.Router();

const Attendance = require("../models/Attendance");
const Staff = require("../models/Staff");

const auth = require("../middleware/auth");
const adminOnly = require("../middleware/adminOnly");

// Create Attendance
router.post("/", auth, adminOnly, async (req, res) => {
    try {
        const {
            staff,
            date,
            checkIn,
            checkOut,
            status
        } = req.body;

        const staffMember = await Staff.findById(staff);

        if (!staffMember) {
            return res.status(404).json({
                message: "Staff not found"
            });
        }

        const attendance = await Attendance.create({
            staff,
            date,
            checkIn,
            checkOut,
            status
        });

        res.status(201).json({
            message: "Attendance marked successfully",
            attendance
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get All Attendance
router.get("/", auth, adminOnly, async (req, res) => {
    try {

        const attendance = await Attendance.find()
            .populate("staff", "name role experience shift");

        res.json(attendance);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Update Attendance
router.put("/:id", auth, adminOnly, async (req, res) => {
    try {

        const attendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance record not found"
            });
        }

        res.json({
            message: "Attendance updated successfully",
            attendance
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Delete Attendance
router.delete("/:id", auth, adminOnly, async (req, res) => {
    try {

        const attendance = await Attendance.findByIdAndDelete(req.params.id);

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance record not found"
            });
        }

        res.json({
            message: "Attendance deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;