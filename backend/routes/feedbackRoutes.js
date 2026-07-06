const express = require("express");
const router = express.Router();

const Review = require("../models/Review");
const auth = require("../middleware/auth");
const adminOnly = require("../middleware/adminOnly");
router.get("/",(req,res) =>{
    res.json(menu);
});
router.post("/", async(req,res)=>{
    try{
        const {id} = req._id;
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
});
router.put("/",auth,adminOnly, async(req,res)=>{
    try{

    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
});
router.delete("/",auth,adminOnly,async(req,res)=>{
try{

}
catch(err){
    res.status(500).json({
        message:err.message
    });
}
});
module.exports = router;