const mongoose = require('mongoose');

const bookschme=mongoose.Schema({

  name:String,
  price:Number,
  category:String,
  image:String,
  title:String,
})

module.exports = mongoose.model('book', bookschme);
