import React from 'react';
import Link from 'next/link'

const Footer = () => {
  return (
    <>
     <div className="flex flex-col md:flex-row gap-4 text-zinc-100 text-lg justify-center p-12 footer-section">
      <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-col lg:gap-8 md:gap-2">
            <Link href='/home'>
              <img src = '/images/Retrogold (7) (1).png' alt="retrogoldlogo" className="footer-imageBox"/>
            </Link>
            <ul>
              <li>
              <p><Link href="/about">About</Link></p>
              </li>
              <p><Link href="/privacy">Policies</Link></p>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Customer Service</p>
            </div>
            <ul>
              <li>
                <p><Link href="/contact">Contact Us</Link></p>
                <p>Track My Order</p>
                <p>Shipping & Returns</p>
                <p>FAQs</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Explore</p>
            </div>
            <ul>
              <li>
                <p><Link href='/shop'>Shop</Link></p>
                <p><Link href='/services'>Service</Link></p>
                <p><Link href='/blog'>Blog</Link></p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Connect with Retrogold</p>
            </div>
            <ul>
              <li>
                <p>Instagram</p>
                <p>Etsy</p>
              </li>
            </ul>
          </div>
        
       
      </div>

      <div className="lg:border md:border-0"></div>

      <div className="md:w-1/4 ">
         <div className="">
           <p>Subscribe to our newsletter</p>
         </div>
         <div className="flex flex-col lg:flex-row gap-4 mt-4">
           <input type="email" id="email" placeholder="Enter email address" className="text-zinc-700"/>
           <button>SIGN UP</button>
         </div>
         <div className="mt-12">
           <p className="text-sm">
             By clicking "submit" you agree to receive emails from Retrogold 
             and accept our web terms of use and privacy and cookie apply. 
             Terms apply
            </p>
         </div>
       </div>
      </div> 

    </>
  );
}

export default Footer;
