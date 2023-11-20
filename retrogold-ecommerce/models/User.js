import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  addresses: [{
    street: String,
    city: String,
    zipCode: String,
    country: String
  }],
  orders: [{
    orderId: String,
    orderDate: Date,
    // other order details
  }],
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  // ... other fields
});

 

export default mongoose.models.User || mongoose.model('User', userSchema);