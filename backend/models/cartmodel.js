const mongoose=require('mongoose');


const cartschme=new mongoose.Schema({
 cartItems: [
    {
      name: String,
      title: String,
      price: Number,
      category: String,
      image: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports=mongoose.model('cart',cartschme);