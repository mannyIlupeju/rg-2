import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart, FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { useGlobalContext } from '../../ Context/context';
import Search from './Search/Search'




const NavLink = ({ name, href }) => {
	const pathname = usePathname();
	const isActive = pathname?.startsWith(href);
	const className = isActive ? 'nav-Active' : 'nav-link';

	return <Link className={className} href={href}>{name}</Link>;
};

const NavLinks = ({ links }) => (
	<div className='lg:flex lg:gap-4 gap-2 text-md font-light lg:text-lg lg:items-center text-zinc-700  hidden'>
		{links.map(link => <NavLink key={link.name} {...link} />)}
	</div>
);




//Navigation component
const Navigation = () => {
	
	const totalQuantity = useSelector(state => state.totalQuantity);
	const [inputValue, setInputValue] = useState('');
	const {
	    searchBar, deactivateSearch, toggleRespMenu, toggleLoginModal,
		isToken, cartItems
	} = useGlobalContext();

	const navLinks = ['Home', 'Shop', 'Services', 'Blog', 'About', 'Contact'].map(name => ({
		name, href: `/${name.toLowerCase()}`
	}));

	const handleInput = e => {
		const userSearch = e.target.value;
		setInputValue(userSearch);
		// Assuming getFilteredProducts and getFilteredBlogs are defined elsewhere
		getFilteredProducts(userSearch);
		getFilteredBlogs(userSearch);
	};

	return (
		<nav className='flex justify-between flex-row gap-2 navigationStyle'>
			<div className='flex justify-center order-2 lg:order-1'>
				<Link href='/home'>
					<Image src='/images/Retrogold (6) (1).png' alt='retrogoldlogo' className='imageBox' width={250} height={250} />
				</Link>
			</div>

			{searchBar ? (
				<div className="flex lg:order-2 ">
					<div className='relative top-1 right-3'>
						<FaSearch size='1.3rem' color='black' className='relative top-7 right-10' onClick={deactivateSearch} />
						<input type='text' className='searchInput bg-gray-300 p-1 border-black w-96' value={inputValue} onChange={handleInput} autoComplete="off" />
					</div>
					<FaTimes size='1.6rem' color='black' className='relative top-8' onClick={deactivateSearch} />
				</div>
			) : (
				<div className="lg:order-2 lg:flex lg:items-center hidden">
					<NavLinks links={navLinks} />
				</div>
			)}

			<div className='lg:flex flex-row lg:items-center lg:order-3 gap-8 hidden'>
				<Search />

				{isToken ? (
					<Link href='/userAccount/account'>
						<span className="text-gray-800">Account</span>
					</Link>
				) : (
					<IoPerson onClick={toggleLoginModal} color='black' size='1.8rem' />
				)}

				
				<div className='flex flex-row justify-end'>
					<Link href='/cart' className="flex flex-row">
							<FaShoppingCart size='1.8rem' color='black' />
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


			<div className='flex justify-end order-3 lg:hidden items-center'>
				<Link href='/cart'>
					<FaShoppingCart size='1.8rem' color='black' />
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