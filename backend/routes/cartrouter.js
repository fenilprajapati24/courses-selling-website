const express=require('express');
const router=express.Router();

// const cart=require('../models/cartmodel');
const Cart = require('../models/cartmodel');

// const {getcart}=require('../controllers/cartcontroller'); 

// router.post('/cart',async(req,res)=>{


//     console.log("cart of ans ");
//     console.log("Request body:", req.body);
//    try{
 
// const { cartItems } = req.body; // capital I to match frontend

//   if(!cartItems || !Array.isArray(cartItems)){
//     return res.status(400).json({error:"invalid cart data"});
//   }
//     const newcart=({cartItems});
//     const savedcart=await newcart.save();
//     res.status(200).json({message:"cart saved succesfully ",cart:savedcart});
//    }catch(err)
//    {
//        console.log("err savig cart",err);
//        res.status(500).json({error:"failed to save cart"});
//    };
// });

router.post('/cart', async (req, res) => {
  console.log("POST /cart called with body:", req.body);
  try {
    const { cartItems } = req.body;
    if (!cartItems || !Array.isArray(cartItems)) {
      console.log("Invalid cart data received");
      return res.status(400).json({ error: "Invalid cart data" });
    }
    const newCart = new Cart({ cartItems });
    const savedCart = await newCart.save();
    console.log("Cart saved:", savedCart);
    res.status(200).json({ message: "Cart saved successfully", cart: savedCart });
  } catch (err) {
    console.error("Error saving cart:", err);
    res.status(500).json({ error: "Failed to save cart" });
  }
});


// router.post('/cart',getcart );



router.get('/cart',async (req,res)=>{

  try{
        const carts=await cart.find().sort({createdAt:-1});
        res.status(200).json(carts);
  }catch(err)
  {
        res.status(500).json({error:"failed to fetch carts"});
  }
});

module.exports=router;
