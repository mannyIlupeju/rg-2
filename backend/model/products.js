const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  brandName: String,
  productName: String,
  price: Number,
  description: String,
  
})