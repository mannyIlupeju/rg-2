import React from 'react';
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navigation = () => {

  
  return (
    <div className="container mx-auto flex justify-around">
      <div className="self-end">
        <p className="font-extrabold text-5xl text-gray-300">Retrogold</p>
      </div> 
      <div className="mt-5">
        <ul className="list-none flex gap-4 font-medium cursor-pointer items-center text-gray-300">
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
    </div>
  );
}

export default Navigation;
