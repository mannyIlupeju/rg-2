import React, { useState, useEffect} from 'react';
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'
import { usePathname } from 'next/navigation'
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {useInView} from 'react-intersection-observer'
import { useGlobalContext } from '@/ Context/context';
import secureLocalStorage from 'react-secure-storage';


const Navigation = () => {


  const { isOpenMenu, setOpenMenu, cartItems, cartNav, newCart, totalQuantity } = useGlobalContext()
 


  
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
        name: 'Services',
        href: '/services',
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
    
    <nav className='navigationStyle'>
      <div className=" flex items-center">
        <Link href='/home'>
        <img src = '/images/Retrogold (6) (1).png' alt="retrogoldlogo" className="imageBox"/>
        </Link>
      </div>

     
        <div className="lg:flex lg:gap-8 gap-2 text-md font-bold lg:text-lg lg:items-center text-zinc-700 lg:block hidden">
        {navLink.map((link)=>{
          const pathname = usePathname();
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
            className= {isActive ? 'nav-Active' : 'nav-link'}
            href={link.href}
            key={link.name}
            >
            {link.name}
            </Link>
          )
        })}
        </div>
        
        

        <div className="lg:flex flex-row lg:items-center gap-4 lg:block hidden">
          <div className="flex justify-end border-r-2 border-zinc-500">
            <div>
              <input type="search" id="search" className="rounded-lg bg-gray-300 p-1" />
            </div>
            <div className="relative right-5 -bottom-2">
              <FaSearch size="0.8rem" color="black"/>
            </div>
          </div>
          
          <Link href='/cart'>
            <div className="flex justify-end">
              <FaShoppingCart size="2.8rem" color="green"/>
              {
                cartNav.length ? 
                <div className="relative right-2">
                  <span className="bg-zinc-800 p-2 rounded-full text-sm">{totalQuantity}</span>
                </div>
                :
                " "
              }
            </div>
          </Link>
        </div>



        <div className="flex items-center lg:hidden" onClick={()=>{
          setOpenMenu(true)
        }}>
          <FaBars color="black" size="1.5rem"/>
        </div>

        
         
    </nav>
   
  );
}

export default Navigation;
