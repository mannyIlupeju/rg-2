import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';



import { getFilteredProducts, getFilteredBlogs } from '/helpers/api-util';

const Search = () => {
	const [inputValue, setInputValue] = useState('')
	const [suggestion, setSuggestions] = useState([]);
	const[returnedValue, setReturnedValue] = useState([])
	const [searchBar, setSearchBar] = useState(false)


	const handleInput = (e) => {
		e.preventDefault()
		const userSearch = e.target.value;


		setInputValue(userSearch)
		getFilteredProducts(userSearch)
		getFilteredBlogs(userSearch)

		// handleSearch(userSearch);

	}

	const activateSearch = (e) => {
		e.preventDefault()
		setSearchBar(!searchBar)
	}

	const deactivateSearch = (e) => {
		e.preventDefault()
		setSearchBar(false)
	}



	return (
		<div className='flex justify-end gap-2 border-zinc-500'>
			{searchBar ?
			<div className='relative bottom-2 right-3'>
			<FaSearch size='1.3rem' color='black' className='relative top-7 left-40' onClick={deactivateSearch}/>
			<input 
			  type='text' id='text' className='rounded-lg bg-gray-300 p-1 border-black' value={inputValue} onChange={handleInput} autoComplete="off"
			/>
			</div>
			  :
			<div className='relative right-3'>
				<FaSearch size='1.5rem' color='black' onClick={activateSearch} />
			</div>
			}
		</div>
	);
};

export default Search;



