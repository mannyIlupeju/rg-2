import { useState } from 'react'
import Head from 'next/head'
import Navigation from '@/components/Shared/Navigation/Navigation'
import PersonalInfo from '@/components/AccountInformation/PersonalInfo'
import SignInSecurity from '@/components/AccountInformation/SignInSecurity'
import Orders from '@/components/AccountInformation/OrdersComponent'
import Footer from '../../components/Shared/Footer/Footer'
import { FaChevronRight } from "react-icons/fa";
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { useGlobalContext } from '../../ Context/context'


dotenv.config()



const Account = ({ user }) => {
  const { SignOut } = useGlobalContext();
  const [visibleComponent, setVisibleComponent] = useState(null)


  const firstName = user?.name.split(' ')[0];

  const toggleSelection = (componentName) => {
    setVisibleComponent(prevComponent =>
      prevComponent === componentName ? null : componentName)
  }



  return (
    <>
      <Head>
        <title>User Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="h-screen section-background p-4 md:p-12">
        <div className="text-center">
          <h1 className="text-lg md:text-xl text-zinc-800">Welcome to your Account, {firstName}</h1>
        </div>

        <div className="container mx-auto flex justify-center my-6 md:my-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-32 h-fit">
            <div className="h-fit">
              <nav className="flex flex-col gap-10 p-8 justify-self-start">
                <button className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer"
                  onClick={() => toggleSelection('orders')}>
                  <span className="flex flex-row gap-8 justify-between">
                    Orders
                    <FaChevronRight />
                  </span>
                </button>
                <button className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer"
                  onClick={() => toggleSelection('addresses')}
                >
                  <span className="flex flex-row gap-8 justify-between">
                    Addresses
                    <FaChevronRight />
                  </span>
                </button>
                <button className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer"
                  onClick={() => toggleSelection('personalInfo')}
                >
                  <span className="flex flex-row gap-8 justify-between">
                    Personal Information
                    <FaChevronRight />
                  </span>
                </button>
                <button className="text-zinc-900 hover:underline underline-offset-8 cursor-pointer"
                  onClick={() => toggleSelection('signInSecurity')}
                >
                  <span className="flex flex-row gap-8 justify-between">
                    Sign In & Security
                    <FaChevronRight />
                  </span>
                </button>
              </nav>
            </div>

            {visibleComponent === 'personalInfo' &&
              <div className='border-solid border-2 border-zinc-800 p-8 justify-end'>
                <div>
                  <PersonalInfo />
                </div>
              </div>
            }
            {visibleComponent === 'signInSecurity' &&
              <div className='border-solid border-2 border-zinc-800 p-8 justify-end'>
                <div>
                  <SignInSecurity user={user} />
                </div>
              </div>
            }
            {visibleComponent === 'orders' &&
              <div className='border-solid border-2 border-zinc-800 p-8 justify-end'>
                <div>
                  <Orders />
                </div>
              </div>
            }
            {visibleComponent === 'Addresses' &&
              <div className='border-solid border-2 border-zinc-800 p-4 md:p-8 justify-end'>
                <div>
                  {/* <AddressInfo/> */}
                </div>
              </div>
            }
          </div>
        </div>

        <div className="flex justify-center my-16 md:my-32" >
          <button
            className="text-zinc-700"
            onClick={SignOut} >
            Sign Out
          </button>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default Account;


export async function getServerSideProps(context) {
  const { req } = context;
  const cookieHeader = req.headers.cookie || '';

  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=').map(c => c.trim());
    if (key && value) {
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


  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const client = await MongoClient.connect(process.env.NEXT_MONGODB_URI);
      const db = client.db();

      const user = await db.collection('users').findOne({ id: decoded.userId });
      console.log(user)

      if (user && user._id) {
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
          }
        }
      }

    } catch (error) {
      console.log('Error validating token:', error);
      return {
        props: {
          user: null,
        },
      };
    }

  };

}