import bcrypt from 'bcrypt';
import { MongoClient } from 'mongodb';
import User from '../../../models/User';
import connectDB from '../../../lib/mongoose'

connectDB();

async function handler(req, res){
    if(req.method === "POST"){
     try {
        console.log(req.body)
        const {userData, userId} = req.body
        const {currentPassword, newPassword, verify} = userData
         const user = await User.findOne({ _id: userId });

         if(!user){
            return res.status(404).json({message: 'User not found'});
         }       
         if(newPassword !== verify){
             return res.status(401).json({message: 'Passwords do not match'})
         }
        
         const isMatch = await bcrypt.compare(currentPassword, user.password);
         if(!isMatch){
         return res.status(403).json({message: "Current password is incorrect"});
         }
            
         const isSameAsOldPassword = await bcrypt.compare(newPassword, user.password);
         if(isSameAsOldPassword){
            return res.status(403).json({message: 'Password cannot be the same as old password'})
         }
         const hashedPassword = await bcrypt.hash(newPassword, 10);
            
         await User.updateOne({ _id: userId}, {$set: { password: hashedPassword}})
         
         res.status(200).json({message: 'Password successfully updated'})
        } catch(error) {
            console.log(error);
            return res.status(500).json({message: 'Internal server error'})
        }
    } else {
        return res.status(405).json({message: 'Method not allowed'})
    }
}


export default handler;