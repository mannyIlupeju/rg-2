import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  phone: String,
  addresses: [{
    street: String,
    city: String,
    postalCode: String,
    country: String
  }],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);