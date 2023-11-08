import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import { useGlobalContext } from '/ Context/context';
import Search from './Search/Search'
import { FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';



const Navigation = () => {
	const [inputValue, setInputValue] = useState('')



	const { isOpenMenu,
		setOpenMenu,
		cartItems,
		cartNav,
		newCart,
		totalQuantity,
		sSignIn,
		setIsSignIn,
		handleLogin,
		activateSearch,
		deactivateSearch,
		searchBar,
		isToken
	} = useGlobalContext();

	const navLink = [
		{
			name: 'Home',
			href: '/home'
		},
		{
			name: 'Shop',
			href: '/shop'
		},
		{
			name: 'Services',
			href: '/services'
		},
		{
			name: 'Blog',
			href: '/blog'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];


	const handleInput = (e) => {
		e.preventDefault()
		const userSearch = e.target.value;


		setInputValue(userSearch)
		getFilteredProducts(userSearch)
		getFilteredBlogs(userSearch)

		// handleSearch(userSearch);

	}




	return (
		<nav className='navigationStyle'>
			<div className=' flex items-center'>
				<Link href='/home'>
					<img src='/images/Retrogold (6) (1).png' alt='retrogoldlogo' className='imageBox' />
				</Link>
			</div>

			{searchBar ?
				<div className="flex">
					<div className='relative top-1 right-3'>
						<FaSearch size='1.3rem' color='black' className='relative top-7 right-10' onClick={deactivateSearch} />
						<input
							type='text' id='text' className='searchInput bg-gray-300 p-1 border-black w-96' value={inputValue} onChange={handleInput} autoComplete="off"
						/>
					</div>
					<div>
						<FaTimes size='1.6rem' color='black' className='relative top-8' onClick={deactivateSearch} />
					</div>
				</div>
				:
				<div className='lg:flex lg:gap-4 gap-2 text-md font-light lg:text-lg lg:items-center text-zinc-700 lg:block hidden'>
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

			}

			<div className='lg:flex flex-row lg:items-center gap-4 lg:block hidden'>
				<Search />
				{isToken ? <span className="text-gray-800">Account</span> : <IoPerson onClick={handleLogin} color='black' size='1.8rem' />}
				<Link href='/cart'>
					<div className='flex justify-end'>
						<FaShoppingCart size='1.8rem' color='black' />

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

export default Navigation