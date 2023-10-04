import Navigation from '@/components/Shared/Navigation'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/Shared/Footer/footer'
import InputForm from '@/components/Shared/Forms/inputForm'
import Login from '@/components/Authorization/Login'
import Register from '@/components/Authorization/Register'
import { useGlobalContext } from '@/ Context/context'



const services = () => {
  const { isOpenMenu, isSignIn, isUserRegistered } = useGlobalContext();

  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isOpenMenu && <RespMenu />}
      <Navigation />
      {isSignIn && <Login />}
      {isUserRegistered && <Register />}

      <main className="bg-white">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/images/tarotheadline.jpeg"
            alt="tarotcards"
            layout="fill"
            objectFit="cover"
            className="bg-zinc-700"
          />
        </div>

        <div className="container mx-auto flex flex-col md:flex-row gap-12 p-8 md:p-24">
          <div className="flex-1">
            <img
              src="/images/sideTarotImage.jpeg"
              alt="sideTarotImage"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6 text-zinc-700">
            <h1 className="text-2xl md:text-3xl font-bold">Book a Session Today</h1>
            <p className="text-base md:text-lg">
              Make an appointment today, to discuss your concerns with our resident psychic today.
            </p>

            <InputForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default services