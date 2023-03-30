import React from 'react';
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navigation = () => {
  


  return (
    <div className="container mx-auto xl:p-8 flex justify-between p-4 text-white h-fit">
      <div className="imageBox">
        <img src = '/images/Retrogold (7) (1).png' alt="retrogoldlogo" className="imageSize"/>
      </div>
        {/* <p className="font-extrabold text-5xl ">Retrogold</p> */}
      <div>
        <ul className="list-none flex gap-4 font-medium cursor-pointer items-center ">
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
