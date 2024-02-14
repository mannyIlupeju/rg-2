
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../models/User'
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongoose';




export default NextAuth({
  providers: [   
    CredentialsProvider({
      async authorize(credentials) {
        try {
         console.log(Providers);
         connectDB();
         const user = await User.findOne({ email: credentials.email });
         if (!user) {
           throw new Error('No user found with that email');
          }
          
          const isValid = await bcrypt.compare(credentials.password, user.password);
          
          if (!isValid) {
            throw new Error('Invalid password');
          }
          return { email: user.email, name: user.name, role: user.role };
        } catch(error){
          throw new Error(error.message);
        }
      }
    })
  ]
});
