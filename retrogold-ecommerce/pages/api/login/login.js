import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import connectDB from '../../../lib/mongoose'
import Cookies from 'cookies'; 
import dotenv from 'dotenv';


dotenv.config()
connectDB();




async function handler(req, res) {
  if(req.method === "POST") {
    try {
      const {email, password} = req.body
      const userEmail = email.toLowerCase().trim();
      
     //retrieve User from database if user is there
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        res.status(401).json({ message: 'User does not exist' });
        return;
      }

      //retrieve password in the user info and confirm if it matches
      const isValidPassword = await bcrypt.compare(password, user.password)

     // If the password is invalid, return a 401 Unauthorized status code
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Incorrect email or password' });
        
      }
      
      const token = jwt.sign(
        { email: user.email, id: user._id.toString() },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      
      const cookies = new Cookies(req, res)
      cookies.set('token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
          maxAge: 3600, // Token expiration time in seconds
          path: '/',
      })
    
      res.status(200).json({ token: token, userId: user._id.toString(),  message: 'Login successful'  })
  
      } catch(error){
      console.log('Error saving token and storing in cookies', error)
      res.status(500).json({ message: 'An internal server error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;