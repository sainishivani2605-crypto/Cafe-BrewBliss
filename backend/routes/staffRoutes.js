const express = require("express");
const router = express.Router();
const adminOnly = require("../middleware/adminOnly");
const auth = require("../middleware/auth");
const Staff = require("../models/Staff");

router.post("/", auth ,adminOnly, async(req,res)=>{
    try{
        const {
    name,
    role,
    experience,
    shift,
    status,
    joiningDate,
    phone
} = req.body;

const staff = await Staff.create({
    name,
    role,
    experience,
    shift,
    status,
    joiningDate,
    phone
});
        res.status(201).json({
            message:"Staff member created successfully",
            staff
        });
    }catch (err) {

    console.error("Attendance Error:", err);

    res.status(500).json({
        message: err.message
    });

}
});
router.get("/",auth,adminOnly, async(req,res)=>{
    try{
        const staffMembers = await Staff.find();
        res.json(staffMembers);
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.get("/:id", auth, adminOnly, async (req, res) => {
    try {

        const staff = await Staff.findById(req.params.id);

        if (!staff) {
            return res.status(404).json({
                message: "Staff not found"
            });
        }

        res.json(staff);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});
router.put("/:id",auth,adminOnly, async (req,res)=>{
    try{
        const {id} = req.params;
        const {name,role,experience,shift} = req.body;
        const staff = await Staff.findByIdAndUpdate(id,{
            name,
            role,
            experience,
            shift

        },
    {new:true}
);
if(!staff){
    return res.status(404).json({
        message: "Staff not found"
    });
}
res.status(200).json({
    message: "Staff member updated successfully",
    staff

});
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.delete("/:id", auth,adminOnly, async(req,res)=>{
try{
    const{id} = req.params;
    const staff =await Staff.findByIdAndDelete(id);
    if(!staff){
        return res.status(404).json({
            message: "Staff not found"
        });
    }
    res.status(200).json({
        message:"Staff member deleted successfully",
        staff
    });

}catch(err){
    res.status(500).json({
        message:err.message
    });
}
});

module.exports = router;