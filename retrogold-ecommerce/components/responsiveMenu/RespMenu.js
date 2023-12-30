import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../ Context/context';
import { useRouter } from 'next/router';

const RespMenu = () => {
  const { isOpenMenu, setOpenMenu } = useGlobalContext();
  const router = useRouter();

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const navLink = [
    { name: 'Home', href: '/home' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-white flex flex-col absolute z-10 top-0 w-screen h-screen">
      <button className="absolute top-0 right-4" onClick={closeMenu}>
        <FaTimes size="2rem" color="black" />
      </button>
      {isOpenMenu && (
        <div className="flex flex-col items-center mt-24 text-2xl gap-12 text-zinc-700">
          {navLink.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <button onClick={closeMenu} key={link.name} className={isActive ? 'nav-Active' : 'nav-link'}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RespMenu;