import React, {useRef, useState, useEffect} from 'react';
import Link from 'next/link'

const Footer = () => {
  const [isMessage, setMessage] = useState('')
  const inputRef = useRef(null)

  async function handleSubmit(){
    const userEmail = inputRef.current.value

    try{
      const response = await fetch('api/newsletter/newsletter', {
        method:'POST',
        headers: {
          'Content-Type':"application/json"
        },
        body: JSON.stringify({email: userEmail}),
      })

      const data = await response.json();
      setMessage(data.message)
      
    } catch(error) {
      console.log('Error occurred', error)
    }
  }

  useEffect(()=> {
    setTimeout(() => {
      setMessage(null)
      
    }, 6000);
  }, [isMessage])

  return (
  
     <div className="flex flex-col md:flex-row gap-4 text-zinc-100 text-lg justify-center p-12 footer-section">
      <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-col lg:gap-8 md:gap-2">
            <Link href='/home'>
              <img src = '/images/Retrogold (7) (1).png' alt="retrogoldlogo" className="footer-imageBox"/>
            </Link>
            <ul>
             <Link href='/about'><li className="footer-link">About</li></Link>
              <Link href='/privacy'><li className="footer-link">Privacy Policy</li></Link>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Customer Service</p>
            </div>
            <ul >
              <Link href='/contact'><li className="footer-link">Contact</li></Link>
              <Link href=''><li className="footer-link">Track My Order</li></Link>
              <Link href=''><li className="footer-link">Shipping & Returns</li></Link>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Explore</p>
            </div>
            <ul>
                <Link href='/shop'><li className="footer-link">Shop</li></Link>
                <Link href='/services'><li className="footer-link">Services</li></Link>
                <Link href='/blog'><li className="footer-link">Blog</li></Link>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-8">
            <div>
              <p>Connect with Retrogold</p>
            </div>
            <ul>
              <Link href='https://www.instagram.com/retrogoldlife'><li className="footer-link">Instagram</li></Link>
                <Link href=''><li className="footer-link">Etsy</li></Link>
            </ul>
          </div>
        
       
      </div>

      <div className="lg:border md:border-0"></div>

      <div className="md:w-1/4 ">
         <div className="">
           <p>Subscribe to our newsletter</p>
         </div>
         <div className="flex flex-col lg:flex-row gap-4 mt-4">
           <input type="email" id="email" placeholder="Enter email address" className="text-zinc-700" ref={inputRef}/>
           <button onClick={handleSubmit}>SIGN UP</button>
         </div>
         <div>
           {isMessage}
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
  );
}

export default Footer;
