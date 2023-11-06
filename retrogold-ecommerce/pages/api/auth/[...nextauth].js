

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import User from '../models/User'
import bcrypt from 'bcryptjs';
import dbConnect from '../../lib/mongodb/dbConnect'// Adjust the path according to your file structure

export default NextAuth({
  providers: [   
    Providers.Credentials({
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with that email');
        }

        // Verify password
        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          // Invalid password
          throw new Error('Invalid password');
        }

        // If credentials are valid, return the user object
        return { email: user.email, name: user.name, role: user.role };
      }
    })
  ]
});
