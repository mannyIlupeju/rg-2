import React from 'react';
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="flex justify-around">
      <div>
        <p>Retrogold</p>
      </div>
      <div>
        <ul className="list-none flex gap-10">
          <li>
          <Link href='/'>Home</Link>  
          </li>
          <li>
          <Link href='/shop'>Shop</Link>
          </li>
          <li>
          <Link href='/blog'>Blog</Link>
          </li>
          <li>
          <Link href='/about'>About</Link>
          </li>
          <li>
          <Link href='/contact'>Contact</Link>  
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
