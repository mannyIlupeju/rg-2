import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import { useGlobalContext } from '/ Context/context';
import Search from './Search/Search'



const Navigation = () => {
	const { isOpenMenu, setOpenMenu, cartItems, cartNav, newCart, totalQuantity, isSignIn, setIsSignIn, handleLogin } = useGlobalContext();

	const navLink = [
		{
			name : 'Home',
			href : '/home'
		},
		{
			name : 'Shop',
			href : '/shop'
		},
		{
			name : 'Services',
			href : '/services'
		},
		{
			name : 'Blog',
			href : '/blog'
		},
		{
			name : 'About',
			href : '/about'
		},
		{
			name : 'Contact',
			href : '/contact'
		}
	];

	

	return (
		<nav className='navigationStyle'>
			<div className=' flex items-center'>
				<Link href='/home'>
					<img src='/images/Retrogold (6) (1).png' alt='retrogoldlogo' className='imageBox' />
				</Link>
			</div>

			<div className='lg:flex lg:gap-4 gap-2 text-md font-bold lg:text-lg lg:items-center text-zinc-700 lg:block hidden'>
				{navLink.map((link) => {
					const pathname = usePathname();
					const isActive = pathname.startsWith(link.href);

					return (
						<Link className={isActive ? 'nav-Active' : 'nav-link'} href={link.href} key={link.name}>
							{link.name}
						</Link>
					);
				})}
			</div>

			<div className='lg:flex flex-row lg:items-center gap-4 lg:block hidden'>
				<Search/>
				<IoPerson onClick={ handleLogin } color='black' size='1.8rem'/>
				<Link href='/cart'>
					<div className='flex justify-end'>
						<FaShoppingCart size='1.8rem' color='black'/>
					
						{cartItems.length ? (
							<div className='mx-2 text-zinc-800 font-semibold'>
								<span>({totalQuantity})</span>
							</div>
						) : (
							' '
						)}
					</div>
				</Link>
			</div>

			<div
				className='flex items-center lg:hidden'
				onClick={() => {
					setOpenMenu(true);
				}}
			>
				<FaBars color='black' size='1.5rem' />
			</div>
		</nav>
	);
};

export default Navigation;
