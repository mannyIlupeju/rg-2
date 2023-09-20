import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User'

let client;

async function createClient() {
  if(!client){
    client = await MongoClient.connect(process.env.NEXT_MONGODB_URI);
  }
  return client;
}

async function handler(req, res) {
  if(req.method === "POST") {
    const {email, password} = req.body
    console.log(email, password)

    const userEmail = email.toLowerCase().trim();
    

    client = await createClient()
    const db = client.db();

    //retrieve User from database if user is there
    const user = await db.collection('customers').findOne({ email: email.toLowerCase() });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      client.close();
      return;
    }

    //retrieve password in the user info and confirm if it matches
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ message: 'Invalid credentials' });
      client.close();
      return;
    }

    try{
      const token = jwt.sign(
        { email: user.email, id: user._id.toString() },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
        );
        
        const cookies = new Cookies(req, res)
        cookies.set('token', token, {
          httpOnly: true,
          secure:false,
          sameSite: 'strict',
          maxAge: 3600, // Token expiration time in seconds
          path: '/',
        })
        
        res.status(200).json({ token: token, userId: user._id.toString(),  message: 'Login successful'  });
        client.close();
    } catch(error){
      console.log('Error saving token and storing in cookies', error)
    }
  }
}

export default handler;