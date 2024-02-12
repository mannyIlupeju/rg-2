import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { getFilteredProducts, getFilteredBlogs } from '@/helpers/api-util';

import { useGlobalContext } from '@/ Context/context';






const Search = () => {
	const [inputValue, setInputValue] = useState('')
	const [suggestion, setSuggestions] = useState([]);
	const[returnedValue, setReturnedValue] = useState([])


	const { activateSearch, showSearch, setShowSearch } = useGlobalContext()
	
	return (
		<div className='flex justify-end gap-2 border-zinc-500'>
			<div className='relative right-3'>
				<FaSearch size='1.5rem' color='black' onClick={activateSearch} className={showSearch ? 'hidden' : ''} />
			</div>
		</div>
	);
};

export default Search;



