import React from 'react';
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'


const Navigation = () => {
    return (
    
    <nav className="navigationStyle">

      <div className="imageBox flex items-center">
        <Link href='/'>
        <img src = '/images/Retrogold (6) (1).png' alt="retrogoldlogo" className="imageSize"/>
        </Link>
      </div>
       
      <div className="flex items-center bg-green-300 px-12 py-1 rounded-lg">
        <ul className="list-none flex gap-2 text-sm text-zinc-600">
          <li className=" isActive nav-link">
          <Link href='/'>Home</Link>  
          </li>
          <li className="nav-link">
          <Link href='/shop'>Shop</Link>
          </li>
          <li className="nav-link">
          <Link href='/blog'>Blog</Link>
          </li>
          <li className="nav-link">
          <Link href='/about'>About</Link>
          </li>
          <li className="nav-link">
          <Link href='/contact'>Contact</Link>  
          </li>
        </ul>
      </div>

      <div className="flex items-center ">
        <div>
          <input type="search" id="search" className="rounded-lg bg-gray-300 p-1"/>
        </div>
          <div className="relative right-6">
            <FaSearch size="0.8rem" color="black"/>
          </div>
      </div>
    </nav>
   
  );
}

export default Navigation;
