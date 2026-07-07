const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const adminOnly = require("../middleware/adminOnly");
const User = require("../models/User");
const Order = require("../models/Order");
const Menu = require("../models/Menu");
const Review = require("../models/Review");
const Staff = require("../models/Staff");
// const Order = require("../models/Order");

router.get("/today-sales", auth, adminOnly, async (req, res) => {
    try {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        // Today's orders
        const todayOrdersData = await Order.find({
            createdAt: {
                $gte: today,
                $lt: tomorrow
            }
        });

        // Yesterday's orders
        const yesterdayOrdersData = await Order.find({
            createdAt: {
                $gte: yesterday,
                $lt: today
            }
        });

        // Revenue
        const todayRevenue = todayOrdersData.reduce(
            (sum, order) => sum + order.totalPrice,
            0
        );

        const yesterdayRevenue = yesterdayOrdersData.reduce(
            (sum, order) => sum + order.totalPrice,
            0
        );

        const todayOrders = todayOrdersData.length;
        const yesterdayOrders = yesterdayOrdersData.length;

        const revenueGrowth =
            yesterdayRevenue === 0
                ? 100
                : Number(
                      (
                          ((todayRevenue - yesterdayRevenue) /
                              yesterdayRevenue) *
                          100
                      ).toFixed(1)
                  );

        const orderGrowth =
            yesterdayOrders === 0
                ? 100
                : Number(
                      (
                          ((todayOrders - yesterdayOrders) /
                              yesterdayOrders) *
                          100
                      ).toFixed(1)
                  );

        res.json({
            todayRevenue,
            yesterdayRevenue,
            todayOrders,
            yesterdayOrders,
            revenueGrowth,
            orderGrowth
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});
router.get("/", auth, adminOnly, async (req,res)=>{
    try{
        const totalCustomers = await User.countDocuments({
            role:"customer"
     } );
     const totalOrders = await Order.countDocuments();
     const orders = await Order.find();
     let totalRevenue = 0;
     for(const order of orders){
        totalRevenue += order.totalPrice;
     }
     const averageOrderValue = totalOrders > 0 ? totalRevenue/totalOrders : 0;
     const totalStaff = await Staff.countDocuments();
const totalMenu = await Menu.countDocuments();
const totalReviews = await Review.countDocuments();
const recentOrders = await Order.find()
    .populate("items.menuItem", "name")
    .sort({ createdAt: -1 })
    .limit(5);
     res.json({
        totalRevenue,
        totalOrders,
        totalCustomers,
        totalMenu,
        totalStaff,
        totalReviews,
        recentOrders,
        averageOrderValue
     });
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
});

router.get("/recent-transaction", auth,adminOnly, async (req,res)=>{
    try{
        const transaction = await Order.find() 
        .populate("user","name")
        .populate("items.menuItem","name")
        .sort({ createdAt: -1})
        .limit(10);
        res.json(transaction);
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
});
router.get("/top-selling", auth, adminOnly, async (req, res) => {
    try {

        const topSelling = await Order.aggregate([

            { $unwind: "$items" },

            {
                $group: {
                    _id: "$items.menuItem",
                    sold: {
                        $sum: "$items.quantity"
                    }
                }
            },

            {
                $sort: {
                    sold: -1
                }
            },

            {
                $limit: 5
            }

        ]);

        await Menu.populate(topSelling, {
            path: "_id",
            select: "name price"
        });

        const result = topSelling.map(item => ({
            item: item._id.name,
            sold: item.sold,
            revenue: item.sold * item._id.price
        }));

        res.json(result);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
module.exports = router;