const jwt=require('jsonwebtoken');
const express=require('express');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const router=express.Router();
const {registeruser,loginuser} =require('../controllers/authcontroller');
// const router=express.router();
 
const usermodel=require('../models/usermodel');


router.get('/',(req,res)=>{
  res.send('hey');
})

router.post('/register',registeruser);  // register   
 

router.post('/login',loginuser);

router.get('/all', async (req, res) => {
  try {

    // view all data 
    const users = await usermodel.find().select("-password"); // hide passwords
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Server error");
  }
});  




module.exports=router;