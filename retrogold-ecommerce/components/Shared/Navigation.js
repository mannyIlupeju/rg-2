import React from 'react';
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'
import { usePathname } from 'next/navigation'
import {FaShoppingCart} from 'react-icons/fa'


const Navigation = () => {
    const navLink = 
    [
      {
        name: 'Home',
        href: '/home',
      },
      {
        name: 'Shop',
        href: '/shop',
      }, 
      {
        name: 'Blog',
        href: '/blog',
      }, 
      {
        name: 'About',
        href: '/about',
      }, 
      {
        name: 'Contact',
        href: '/contact',
      }
    ]

    

    return (
    
    <nav className="navigationStyle">

      <div className=" flex items-center">
        <Link href='/home'>
        <img src = '/images/Retrogold (6) (1).png' alt="retrogoldlogo" className="imageBox"/>
        </Link>
      </div>

      <div className="flex gap-6 text-sm items-center text-zinc-700">
      {navLink.map((link)=>{
        const pathname = usePathname();
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
          className= {isActive ? 'nav-Active' : 'nav-link'}
          href={link.href}
          // key={name}
          >
          {link.name}
          </Link>
        )
      })}
      </div>
       
      

      <div className="flex flex-row items-center gap-4">
        <div className="flex justify-end border-r-2 border-zinc-500">
          <div>
            <input type="search" id="search" className="rounded-lg bg-gray-300" />
          </div>
          <div className="relative right-5 -bottom-1">
            <FaSearch size="0.8rem" color="black"/>
          </div>
        </div>
        <div className="flex justify-end">
          <FaShoppingCart size="1.5rem" color="green"/>
        </div>
      </div>
    </nav>
   
  );
}

export default Navigation;
