import {MongoClient} from 'mongodb'
import bcrypt from 'bcrypt';
require('dotenv').config()

let client;

async function createClient() {
  if(!client){
    client = await MongoClient.connect(process.env.NEXT_MONGODB_URI)
  }
  return client;
}


async function handler (req, res) {
  if(req.method === "POST"){
    const {email, name, password, retype} = req.body;

    const userEmail = email.toLowerCase().trim();
    const userName = name.toLowerCase().trim()
   
    if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      return res.status(422).json({ message: 'Please enter a correct email address' });
    }

     if (password !== retype) {
      return res.status(422).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

     try {
      const client = await createClient();
      const db = client.db();

      const existingEmail = await db.collection('customers').findOne({ email: userEmail });
      if (existingEmail) {
        return res.status(400).json({ message: 'This email is already registered' });
      }

      await db.collection('customers').insertOne({ email: userEmail, name: userName, password: hashedPassword });

      client.close();

      await sendVerificationEmail(userEmail);

      res.status(201).json({ message: 'Signed up! A verification email has been sent to your email address' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}



export default handler;