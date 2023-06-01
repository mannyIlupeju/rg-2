import React, { useEffect} from 'react';
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'
import { usePathname } from 'next/navigation'
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {useInView} from 'react-intersection-observer'
import { useGlobalContext } from '@/ Context/context';

const Navigation = () => {
  // const targetRef = useRef(null)
  // const [showNavigation, setShowNavigation] = useState(false);
  // const [ref, inView] = useInView({
  //   threshold: 100, // Adjust this threshold as needed
  // });

  const { isOpenMenu, setOpenMenu } = useGlobalContext()


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

  

   

    console.log(isOpenMenu)
    
  
    return (
    
    <nav className='navigationStyle'>
      <div className=" flex items-center">
        <Link href='/home'>
        <img src = '/images/Retrogold (6) (1).png' alt="retrogoldlogo" className="imageBox"/>
        </Link>
      </div>

     
        <div className="lg:flex lg:gap-8 gap-2 text-sm font-bold lg:text-xl lg:items-center text-zinc-700 lg:block hidden">
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
              <input type="search" id="search" className="rounded-lg bg-gray-300" />
            </div>
            <div className="relative right-5 -bottom-1">
              <FaSearch size="0.8rem" color="black"/>
            </div>
          </div>
          <div className="flex justify-end">
            <FaShoppingCart size="1.5rem" color="green"/>
          </div>
        </div>



        <div className="flex items-center lg:hidden" onClick={()=>{
          setOpenMenu(true)
          console.log('clicked')
        }}>
          <FaBars color="black" size="1.5rem"/>
        </div>

        
         
    </nav>
   
  );
}

export default Navigation;
