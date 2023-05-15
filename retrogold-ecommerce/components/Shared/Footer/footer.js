import React from 'react';

const Footer = () => {
  return (
    <>
     <div className="flex flex-col md:flex-row gap-4 text-zinc-100 text-sm justify-center p-12">
      <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col lg:gap-8 md:gap-2">
            <div>
              <p>Company</p>
            </div>
            <ul>
              <li><p>About</p></li>
              <li>Policies</li>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Customer Service</p>
            </div>
            <ul>
              <li>
                <p>Contact Us</p>
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
                <p>Shop</p>
                <p>Service</p>
                <p>Blog</p>
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
         <div className="flex flex-col md:flex-row gap-4 mt-4">
           <input type="email" id="email"/>
           <button>SIGN UP</button>
         </div>
         <div className="mt-12">
           <p>
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
