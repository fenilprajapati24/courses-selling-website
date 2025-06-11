// bookcontroller.js
// import book from '../models/bookmodel';
const book=require('../models/bookmodel');


 const getbook = async (req, res) => {
  try {
    
    const books = await book.find();
    res.status(200).json(books);
  } catch (err) {
    console.log("error is ", err);
    res.status(500).json(err);
  }
};


module.exports = { getbook };
