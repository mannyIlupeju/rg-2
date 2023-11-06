import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
<<<<<<< HEAD

import { getFilteredProducts, getFilteredBlogs } from '@/helpers/api-util';
=======
import { useGlobalContext } from '@/ Context/context';



import { getFilteredProducts, getFilteredBlogs } from '/helpers/api-util';

>>>>>>> origin/main

const Search = () => {
	const [inputValue, setInputValue] = useState('')
	const [suggestion, setSuggestions] = useState([]);
	const[returnedValue, setReturnedValue] = useState([])
<<<<<<< HEAD


	const handleInput = (e) => {
		e.preventDefault()
		const userSearch = e.target.value;


		setInputValue(userSearch)
		getFilteredProducts(userSearch)
		getFilteredBlogs(userSearch)

		// handleSearch(userSearch);

	}

	//this function should fetch the 
	// async function handleSearch(userSearch){
	// 	const response = await fetch('/api/search/search', {
	// 		method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ search: userSearch }),
	// 	})

	// 	const data = await response.json()
	// 	return data
	// }
	
	


	return (
		<div className='flex justify-end gap-2 border-zinc-500'>
			<input type='text' id='text' className='rounded-lg bg-gray-300 p-1 border-black' value={inputValue} onChange={handleInput} autoComplete="off"/>
			<div className='relative right-9 top-3'>
				<FaSearch size='1rem' color='black' />
=======
	const [searchBar, setSearchBar] = useState(false)

	const { activateSearch, showSearch, setShowSearch } = useGlobalContext()
	
	return (
		<div className='flex justify-end gap-2 border-zinc-500'>
			<div className='relative right-3'>
				<FaSearch size='1.5rem' color='black' onClick={activateSearch} className={showSearch ? 'hidden' : ''} />
>>>>>>> origin/main
			</div>
		</div>
	);
};

export default Search;



