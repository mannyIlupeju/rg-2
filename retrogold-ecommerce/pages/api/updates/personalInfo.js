import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import connectDB from '../../../lib/mongoose'
import Cookies from 'cookies'; 
import dotenv from 'dotenv';


dotenv.config()
connectDB();


async function handler(req, res){
if(req.method === "POST"){
 try {  
   const {newEmail, currentEmail} = req.body
   console.log(newEmail, currentEmail)
   const currentEmailLower = currentEmail.toLowerCase().trim();
   const userEmail = newEmail.toLowerCase().trim();

    const user = await User.findOne({ email: currentEmailLower });

    if (!user) {
     res.status(401).json({ message: 'This email address does not exist' });
     return;
    }

    if(user.email === newEmail){
        res.status(401).json({message: 'This email is already being used'})
        return
    }
    
    if(user.email !== newEmail){
        user.email = userEmail;
        //it should send verification email before it saves in the database
        await user.save();
        res.status(200).json({ message: 'Email updated successfully' });
    }
    
 }catch (error){
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
}
}



export default handler