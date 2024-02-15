import React from 'react';
import Navigation from '@/components/Shared/Navigation/Navigation'
import Head from 'next/head'
import ContactForm from '../../components/Shared/Forms/ContactForm'
import Footer from '@/components/Shared/Footer/Footer'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import Login from '@/components/Authorization/Login';
import Register from '@/components/Authorization/Register'
import { useGlobalContext } from '../../ Context/context';

const Contact = () => {
  const { isOpenMenu, isSignIn, isUserRegistered } = useGlobalContext();

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      {isOpenMenu && <RespMenu />}
      {isSignIn && <Login />}
      {isUserRegistered && <Register />}

      <main className="container mx-auto min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12 w-full max-w-5xl">

            <div className="lg:col-span-1 space-y-8 text-zinc-700">
              <h1 className="text-4xl font-bold  mb-4">Get in Touch</h1>
              <p>
                We respond to each and every message as soon as possible; it may take 2-3 business days for us to get back to you via email. PS. We recommend adding info@retrogoldlife.com to your contacts to ensure our responses land in your inbox.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">In the meantime, here is some information that may answer your question</h2>

              <h3 className="text-xl font-bold mt-4">Order Status Update</h3>
              <p className="mt-2">
                Orders with standard shipping ship within 2-6 business days. Orders with express shipping ship within 1-2 business days. Tracking information is automatically sent to your email.
              </p>
              <p className="mt-2 underline">
                More details about shipping can be found here.
              </p>
            </div>

            <div className="lg:mt-0 lg:col-span-1 space-y-6 mt-12">
              <h1 className="text-3xl font-medium text-zinc-700">Contact Us</h1>
              <ContactForm />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
