import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import User from '../../../models/User';
import connectDB from '../../../lib/mongoose';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const verificationCode = uuidv4();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

connectDB();

async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { email, name, password, retype } = req.body;
    
    if (!name || typeof name !== 'string') {
      return res.status(422).json({ message: 'Please provide a valid name' });
    }

    const userEmail = email.toLowerCase().trim();
    if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      return res.status(422).json({ message: 'Please enter a correct email address' });
    }

    if (password !== retype) {
      return res.status(422).json({ message: 'Passwords do not match' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const existingUser = await User.findOne({ email: userEmail });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }

      const user = await User.create({ name: name, email: userEmail, password: hashedPassword, role: 'user' });
      await sendVerificationEmail(userEmail, verificationCode);
      res.status(201).json({ success: true, data: user, message: 'Signed up! A verification email has been sent to your email address' });
    } catch (error) {
      res.status(500).json({ message: 'User not created', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}

async function sendVerificationEmail(email, verificationCode) {
  try {
    await transporter.sendMail({
      from: '"Retrogold" <pelumiilupeju@gmail.com>',
      to: email,
      subject: 'Verify Your Email',
      text: `Please click the link below to verify your email:\nhttp://your-app.com/verify-email?code=${verificationCode}`,
      html: `<b>Please click the link below to verify your email:</b><br><a href="http://your-app.com/verify-email?code=${verificationCode}">Verify Email</a>`,
    });
    console.log('Verification email sent successfully');
  } catch (error) {
    console.error('Error sending verification email:', error);
  }
}

export default handler;
