const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    customerName: {
    type: String,
    default: ""
},

tableNumber: {
    type: String,
    default: ""
},

orderType: {
    type: String,
    enum: ["Dine In", "Take Away"],
    default: "Dine In"
},

    status: {
      type: String,
      enum: ["Pending", "Preparing", "Ready", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);