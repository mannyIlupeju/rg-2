import {MongoClient} from 'mongodb'
require('dotenv').config()

let client;

async function handler (req, res){
  if(req.method === 'POST'){
    const userEmail = req.body.email
    console.log(userEmail)


    try {
      if(!userEmail || !userEmail.includes('@')){
        res.status(422).json({message: 'Please enter a correct email address'})
      }
    
      const client = await MongoClient.connect(process.env.NEXT_MONGODB_URI)
      //create database
      const db = client.db();
      //use database to create collection and insert entry
      await db.collection('newsletter').insertOne({email: userEmail}) 

      client.close();

      res.status(201).json({message: 'Signed up'})
    } catch(error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }
}

export default handler;