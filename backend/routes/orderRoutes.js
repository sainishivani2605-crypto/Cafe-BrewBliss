
const express = require('express');
const router = express.Router();
const Order = require("../models/Order");
const auth = require("../middleware/auth");
const adminOnly = require("../middleware/adminOnly");
const Menu = require("../models/Menu");


router.post("/", auth, async (req, res) => {
    try {

     const {
    items,
    customerName,
    tableNumber,
    orderType
} = req.body;

const user = req.user.id;
        let totalPrice = 0;
        for(const item of items){
            const menuItem = await Menu.findById(item.menuItem);
            if(!menuItem){
                res.status(404).json({
                    message: 'Menu Item not found'
                });
            }
            totalPrice += menuItem.price*item.quantity;
        }
         const order = await Order.create({
    user,
    customerName,
    tableNumber,
    orderType,
    items,
    totalPrice
});
            res.status(201).json({
                message:"Order placed successfully",
                order
            });
        

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.get("/my-orders", auth,async (req,res) =>{
    try{
        const user = req.user.id;
        const orders = await Order.find({ user }).populate("items.menuItem");
        res.json(orders);
       }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.get("/", auth,adminOnly, async (req,res)=>{
    try{
    const orders = await Order.find().populate("user","name email") .populate("items.menuItem");
    res.json(orders);
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.put("/:id/status",auth, adminOnly, async (req,res) =>{
    try{
        const id = req.params.id;
        const {status} = req.body;
        const order =await Order.findByIdAndUpdate(id,
            {status},
            {new: true}
        );
        if(!order){
            return res.status(404).json({
                message: "Order not found"
            });

        }
        res.status(200).json({
            message: "Order status updated successfully",
            order
        });
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
router.delete("/:id", auth, adminOnly, async (req, res) => {

    try {

        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json({
            message: "Order deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});
router.put("/:id", auth, adminOnly, async (req, res) => {

    try {

        const {items, customerName,
tableNumber,
orderType  } = req.body;
  

        let totalPrice = 0;

        for (const item of items) {

            const menuItem = await Menu.findById(item.menuItem);

            if (!menuItem) {
                return res.status(404).json({
                    message: "Menu item not found"
                });
            }

            totalPrice += menuItem.price * item.quantity;
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {customerName,
tableNumber,
orderType,
                items,
                totalPrice
            },
            {
                new: true
            }
        ).populate("items.menuItem", "name price");

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json({
            message: "Order updated successfully",
            order
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});
module.exports = router;




