const mongoose =require("mongoose");
const { default: orders } = require("razorpay/dist/types/orders");


const orderschme=new mongoose.Schema({
 cartItems: [
    {
      name: String,
      title: String,
      price: Number,
      category: String,
      image: String,
    },
  ],
  status: {
    type: String,
    enum: ["Paid", "Failed"],
    default: "Paid",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports=mongoose.model("order",orderschme);