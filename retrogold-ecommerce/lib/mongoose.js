import mongoose from 'mongoose'

const connectDB = () => {
   if (mongoose.connections[0].readyState) {
    console.log("Already connected.");
    return;
  }
  
  mongoose.connect(process.env.NEXT_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Connection error', err)
    process.exit(1);
  })
}

export default connectDB