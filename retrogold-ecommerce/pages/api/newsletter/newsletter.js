import {MongoClient} from 'mongodb'
require('dotenv').config()


let client;

//TODO: 
//Create a functionality that sends USER a discount code for their orders. 
//checks if user already exists and if so does not send a discount code. 

async function createClient() {
  if(!client){
    client = await MongoClient.connect(process.env.NEXT_MONGODB_URI)
  }
  return client;
}



async function handler (req, res){
  if(req.method === 'POST'){
    const email = req.body.email
    const userEmail = email.toLowerCase()
   
    
    if(!userEmail || !userEmail.includes('@') || userEmail === ''){
      return res.status(422).json({message: 'Please enter a correct email address'})
    }


    try {
      const client = await createClient();
      const db = client.db();

      //check if email already exists before inserting it in 
      const existingEmail = await db.collection('newsletter').findOne({email: userEmail})
      if(existingEmail) {
        return res.status(400).json({message:'This Email already exists'});
      }
      
      //save email within the collection.
      await db.collection('newsletter').insertOne({email: userEmail}) 

      client.close();

      res.status(201).json({message: 'Signed up!'})
    } catch(error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }

  

}

export default handler;