const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const adminOnly = require("../middleware/adminOnly");
const Review = require("../models/Review");
const Menu =require("../models/Menu");


router.post("/",auth , async (req,res)=>{
    try{
        const {menuItem, rating,comment} = req.body;
        const user = req.user.id;
          const menu = await Menu.findById(menuItem);
        if(!menu){
            return res.status(404).json({
                message: "Menu item not found"
            });
        }
             const existingReview = await Review.findOne({
        user,
        menuItem

      });
      if(existingReview){
        return res.status(400).json({
            message: "You have already reviewed this item"
        });
      }

        const review = await Review.create({
            user,
            menuItem,
            rating,
            comment
        });
        res.status(201).json({
            message: "Review added successfully",
            review
       
        });
 

    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.get("/", auth ,async (req,res)=>{
    try{

        const reviews = await Review.find().populate("user","name") .populate("menuItem","name price");
        res.json(reviews);
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.delete("/:id",auth, adminOnly, async (req,res)=>{
    try{

        const review = await Review.findByIdAndDelete(req.params.id);
        if(!review){
            return res.status(404).json({
                message: "Review not found"
            });
        }
        res.json({
            message: "Review deleted successfully"
        });
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
});
module.exports = router;