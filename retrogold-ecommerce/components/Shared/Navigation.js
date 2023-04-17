import React from 'react';
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'


const Navigation = () => {
    return (
    <div className="flex justify-between text-zinc-700 navigationStyle gap-10 p-4">

      <div className="imageBox flex items-center">
        <img src = '/images/Retrogold (6) (1).png' alt="retrogoldlogo" className="imageSize"/>
      </div>
       
      <div className="flex items-center">
        <ul className="list-none flex gap-3 text-medium font-bold">
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
            <FaSearch size="0.8rem"/>
          </div>
      </div>
    </div>
  );
}

export default Navigation;
