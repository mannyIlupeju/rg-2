import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const productSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  categories: [{
    type: String
  }],
  attributes: {
    color: String,
    size: String,
    // Add other attributes as needed
  },
  inStock: {
    type: Boolean,
    default: true
  },
  images: [{
    type: String // URLs of product images
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Add other fields as necessary
})