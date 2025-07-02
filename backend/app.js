const express=require('express');
const app=express();  
const path=require('path');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cors=require('cors');
require('dotenv').config();
require("dotenv").config();
const expresssession=require("express-session");
const userrouter=require('./routes/userrouter');
const bookrouter=require('./routes/bookrouter');
const  cartrouter= require('./routes/cartrouter');
const flash=require("connect-flash");
// const Razorpay=require('razorpay');
const { default: mongoose } = require('mongoose');
// const cartmodel = require('./models/cartmodel');
// const ordermodel = require('./models/ordermodel');


require('dotenv').config();
// app.use(cors());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174','http://localhost:5174','http://localhost:5176'], // allow both
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());                  




// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine','ejs');    // both lines are for use ejs file g
app.set('views',path.join(__dirname,'views')); 



mongoose.connect('mongodb://127.0.0.1:27017/learningweb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});      




app.post('/create-order',async (req,res)=>{

  const {amount,cartItems}=req.body;

  const options={

    amount:amount*100,
    currency:"INR",
    receipt:"receipt_order"+Math.random()*1000,

  };

  try{
    const order=await razorpay.orders(options);
    await cartmodel.create({cartItems});
  }catch(err)
  {
    console.log("err creating razorpay order",err);
    res.status(500).send("failed to create order");
  }
})

app.post('/verify-payment',async (req,res)=>{

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, cartItems } = req.body;
  const hmac=crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET);
  hmac.update(razorpay_order_id + "|" +razorpay_payment_id);
  const generated_signature=hmac.digest("hex");

  if(generated_signature=== razorpay_signature)
  {

    await ordermodel.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      cartItems,
      status: "Paid",

      
    });
    res.json({status:"success"});
  } else {
    res.status(400).json({ status: "failure" });
  }

});


app.get('/', (req, res) => {
  
  res.send("nelfsfl");    

});      

app.use('/booksrouter',bookrouter); 



app.use('/api/users',userrouter);


app.use('/cartrouter',cartrouter);









const PORT=3019;

app.listen(PORT,()=>{
   
  console.log(`Server running on address http://localhost:${PORT}`);

})
