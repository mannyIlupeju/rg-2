import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '../../../ Context/context';
import { FaShoppingCart, FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'
import { IoPerson } from "react-icons/io5";
import { debounce } from '../../../helpers/debounce'
import Search from '../Search/Search'
import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react"






const NavLink = ({ name, href }) => {
	const pathname = usePathname();
	const isActive = pathname?.startsWith(href);
	const className = isActive ? 'nav-Active' : 'nav-link';

	return <Link className={className} href={href}>{name}</Link>;
};

const NavLinks = ({ links }) => (
	<div className='lg:flex lg:gap-4 gap-2 text-md font-bold lg:text-lg lg:items-center text-gray-100  hidden'>
		{links.map(link => <NavLink key={link.name} {...link} />)}
	</div>
);





//Navigation component
const Navigation = () => {
	
	const totalQuantity = useSelector(state => state.totalQuantity);
	const [inputValue, setInputValue] = useState('');
	const {
    searchBar,
    deactivateSearch,
    toggleRespMenu,
    isToken,
    displayWelcomeModal,
    removeWelcomeModal,
    displayProfileModal,
    removeProfileModal,
    setSearchValues,

  } = useGlobalContext();
	

	const cartItems = useSelector((state)=> state.cart)

	const navLinks = ['Home', 'Shop', 'Services', 'Blog', 'About', 'Contact'].map(name => ({
		name, href: `/${name.toLowerCase()}`
	}));






	const debouncedSearch = debounce(async (userSearch) => {
		try {
			const response = await fetch('/api/search/search', {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userSearch }) // Ensure the body uses userSearch directly
			});
			
			const data = await response.json();
			setSearchValues(data)

		} catch (error) {
			console.error(error);
		}
	}, 500); // Adjust the debounce time (ms) as needed



	async function handleInput(e){
		const userSearch = e.target.value;
		setInputValue(userSearch);
		debouncedSearch(userSearch)
	}

		
	

	return (
    <nav className='flex justify-between flex-row gap-2 navigationStyle fixed w-full'>
      <div className='flex justify-center order-2 lg:order-1'>
        <Link href='/home'>
          <Image
            src='/images/retrogold_white.png'
            alt='retrogoldlogo'
            className='imageBox'
            width={450}
            height={450}
          />
        </Link>
      </div>

      {searchBar ? (
        <div className='flex lg:order-2 '>
          <div className='relative top-1 right-3'>
            <FaSearch
              size='1.3rem'
              color='black'
              className='relative top-7 right-10'
              onClick={deactivateSearch}
            />
            <input
              type='text'
              className='searchInput bg-gray-300 p-1 border-black w-96 text-gray-100'
              value={inputValue}
              onChange={handleInput}
              autoComplete='off'
			  placeholder='What are you looking for?'
            />
          </div>
          <FaTimes
            size='1.6rem'
            color='black'
            className='relative top-8'
            onClick={deactivateSearch}
          />
        </div>
      ) : (
        <div className='lg:order-2 lg:flex lg:items-center hidden'>
          <NavLinks links={navLinks} />
        </div>
      )}

      <div className='lg:flex flex-row lg:items-center lg:order-3 gap-8 hidden'>
        <Search />

        {isToken ? (
          <Link href='/userAccount/account'>
            <span
              className='text-gray-800'
              onMouseEnter={displayProfileModal}
              onMouseLeave={removeProfileModal}
            >
              Account
            </span>
          </Link>
        ) : (
          <IoPerson
            className='relative'
            color='white'
            size='1.8rem'
            onMouseEnter={displayWelcomeModal}
            onMouseLeave={removeWelcomeModal}
          />
        )}

        <div className='flex flex-row justify-end'>
          <Link href='/cart' className='flex flex-row'>
            <FaShoppingCart size='1.8rem' color='white' />
            {cartItems ? (
              <div className='mx-2 text-zinc-800 font-semibold'>
                <span>{totalQuantity}</span>
              </div>
            ) : null}
          </Link>
        </div>
      </div>

      <div className='flex items-center lg:hidden order-1'>
        <FaBars color='black' size='1.5rem' onClick={toggleRespMenu} />
      </div>

      <div className='flex flex-row justify-end order-3 lg:hidden items-center'>
        <Link href='/cart'>
          <FaShoppingCart size='1.8rem' color='white' />
          {cartItems ? (
            <div className='mx-2 text-zinc-800 font-semibold'>
              <span>{totalQuantity}</span>
            </div>
          ) : null}
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;