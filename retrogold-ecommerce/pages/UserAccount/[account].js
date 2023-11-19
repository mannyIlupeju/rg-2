import Head from 'next/head'
import Navigation from '@/components/Shared/Navigation'
import Footer from '@/components/Shared/Footer/footer'
import { FaChevronRight } from "react-icons/fa";
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config()



const Account = ({ user }) => {
  
  console.log(user)
    return (
      <>
        <Head>
        <title>User Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation/>
        <main className="h-screen">
          <div className="container mx-auto">
            <div className="my-8 text-center">
            <h1 className="text-zinc-800">Welcome to your Account, {user.name}</h1>
            </div>

            <div className="flex w-fit">
              <nav className="flex flex-col gap-16 border-solid border-2 border-zinc-800 p-8">
                <span className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer">Orders</span>
                <span className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer">Addresses</span>
                <span className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer">Personal Information</span>
                <span className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer">Sign in & Security</span> 
              </nav>

              <div>

              </div>
            </div>



          </div>
        </main>
        <Footer/>
      </>
    )
}

export default Account;


export async function getServerSideProps(context){
  const {req} = context;
  const cookieHeader = req.headers.cookie || '';

  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=').map(c => c.trim());
    if(key && value){
      acc[key] = decodeURIComponent(value);
    }
    return acc;
  }, {});

  const token = cookies.token;

  if (!token) {
    return {
      props: {
        user: null,
      },
    };
  }


  if (token){
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const client = await MongoClient.connect(process.env.NEXT_MONGODB_URI);
      const db = client.db();
      
      const user = await db.collection('users').findOne({id: decoded.userId});
      console.log(user)

      if(user && user._id){
        user._id = user._id.toString()
      }
      
    return {
      props: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
          vSign: user.__v
          
          // ... include other user fields you need
        }
      }
    } 
      
    } catch(error) {
      console.log('Error validating token:', error);
      return {
      props: {
        user: null,
      },
    };
    } 

 };

}