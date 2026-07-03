const Order = require("../models/Order");

// Place Order
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    res.status(201).json({
      message: "Order placed successfully!",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};