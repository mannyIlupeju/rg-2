import React, { useMemo, useEffect } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '@/ Context/context';
import { useRouter } from 'next/router';
import Image from 'next/image';


const RespMenu = () => {
  console.log("resp menu click");
  const { isOpenMenu, setOpenMenu, toggleLoginModal, toggleRegisterModal, toggleRespMenu, isToken, SignOut, incrementOverflowHidden, decrementOverflowHidden } = useGlobalContext();
  const router = useRouter();

  const closeMenu = () => {
    setOpenMenu(prevState => !prevState);
  };

  const navLink = useMemo(() => [
    { name: 'Home', href: '/home' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ], []); // Empty dependency array since navLink does not depend on external variables

  const navLinkWithActiveState = useMemo(() =>
    navLink.map(link => ({
      ...link,
      isActive: router.pathname === link.href
    })),
    [router.pathname, navLink]
  );



  useEffect(() => {
    incrementOverflowHidden();

    return () => {
      decrementOverflowHidden();
    };
  }, [incrementOverflowHidden, decrementOverflowHidden]);

  return (
    <>
      
      <main className="bg-white flex flex-col absolute z-10 top-0 w-screen h-screen">
        <div>
          <Link href='/home'>
            <Image src='/images/Retrogold (6) (1).png' alt='retrogoldlogo' className='imageBox' width={250} height={250} />
          </Link>
          <button className="absolute top-5 right-4" onClick={toggleRespMenu}>
            <FaTimes size="1.5rem" color="black" />
          </button>
        </div>

        {isOpenMenu && (
          <div className="flex flex-col mt-8 justify-start text-left text-2xl gap-4 text-zinc-700 font-semibold">
            {navLinkWithActiveState.map((link) => (
              <button onClick={closeMenu} key={link.name} className={`${link.isActive ? 'nav-Active' : 'nav-link'} text-left`}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </button>
            ))}
          </div>
        )}


        <div className="ml-4 mt-12 flex flex-col gap-4 cursor-pointer text-zinc-700">
          {isToken ?
            <Link href='/userAccount/account'>
            Account
          </Link>
            :
            <div className="flex flex-row gap-2">
            <button className="font-semibold text-zinc-700" onClick={toggleLoginModal}>
              Log In
            </button>
            <div className="border-r-2 border-zinc-600"></div>
            <button className="font-semibold text-zinc-700" onClick={toggleRegisterModal}>
              Register
            </button>
            </div>
            }
            {isToken && 
              <div>
                <button
                  className="text-zinc-700"
                  onClick={SignOut} >
                  Sign Out
                </button>
              </div>
            }
        </div>
      </main>
    </>
  );
};

export default RespMenu;