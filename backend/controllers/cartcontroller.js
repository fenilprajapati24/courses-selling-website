// const cart=require('../models/cartmodel');


// const getcart=async (req, res) => {
//   console.log("Request body:", req.body);
//   try {
//     const { cartItems } = req.body;
//     console.log("Cart items:", cartItems);
    
//     if (!cartItems || !Array.isArray(cartItems)) {
//       return res.status(400).json({ error: "Invalid cart data" });
//     }

//     const newCart = new Cart({ cartItems });  // Make sure you use 'new'
//     const savedCart = await newCart.save();

//     res.status(200).json({ message: "Cart saved successfully", cart: savedCart });
//   } catch (err) {
//     console.error("Error saving cart:", err);
//     res.status(500).json({ error: "Failed to save cart" });
//   }
// }

// // module.exports ={getcart};