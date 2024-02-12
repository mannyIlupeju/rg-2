import Navigation from '@/components/Shared/Navigation/Navigation'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/Shared/Footer/footer'
import WelcomeDrop from '@/components/Dropdown/WelcomeDrop'
import ProfileDrop from '@/components/Dropdown/ProfileDrop'
import Login from '@/components/Authorization/Login'
import Register from '@/components/Authorization/Register'
import { useGlobalContext } from '@/ Context/context'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import BookAppointment from '@/components/CalendarBooking/cal-com'


const Services = () => {
  const {
    isOpenMenu,
    isSignIn,
    isUserRegistered,
    isHovered,
    isDropdownHovered,
    isProfileHovered,
    isProfileDropdownHovered
  } = useGlobalContext();

  const shouldShowDropdown = isHovered || isDropdownHovered
  const shouldProfileShowDropdown = isProfileHovered

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
      {shouldShowDropdown && <WelcomeDrop />}
      {shouldProfileShowDropdown && <ProfileDrop />}

      <main className="section-background">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/images/tarotheadline.jpeg"
            alt="tarotcards"
            fill={true}
            className="bg-zinc-700"
            unoptimized
            priority
          />
        </div>


        <div className="container mx-auto flex flex-col lg:flex-row gap-12 p-8 md:p-24">
          <div className="flex-1">
            <Image
              src="/images/sideTarotImage.jpeg"
              alt="Tarot card image"
              className="w-full h-full object-cover rounded-lg"
              width={200}
              height={200}
              priority
              unoptimized

            />

          </div>

          <div className="flex-1 flex flex-col gap-6 text-zinc-700 my-12">
            <h1 className="text-2xl md:text-3xl font-bold">Book a Session Today</h1>
            <p className="text-base md:text-lg">
              Make an appointment today, to discuss your concerns with our resident psychic today.
            </p>
            <BookAppointment />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Services