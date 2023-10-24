import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '@/ Context/context'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'


const RespMenu = () => {
  const {isOpenMenu, setOpenMenu} = useGlobalContext()
  console.log(isOpenMenu)

  const closeMenu = () => {
    setOpenMenu(!isOpenMenu)
  }



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
    <div className="bg-white flex flex-col absolute z-10 top-0 w-screen h-screen">
      <div className="absolute top-0 right-4" size="5px" onClick={closeMenu}>
        <FaTimes size="2rem" color="black"/>
      </div>
      {
        isOpenMenu && 
            <div className="flex flex-col items-center mt-24 text-2xl gap-12 text-zinc-700">
            {navLink.map((link)=>{
              const pathname = usePathname();
              const isActive = pathname.startsWith(link.href);
              
              return (
                <div onClick={closeMenu}>
                <Link
                className= {isActive ? 'nav-Active' : 'nav-link'}
                href={link.href}
                key={link.name}
                
                >
              {link.name}
              </Link>
              </div>
              )
            })}
          </div> 
        }
    </div>

  )
}

export default RespMenu;