import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../../../ Context/context';




const Search = () => {
	const { activateSearch, showSearch} = useGlobalContext()
	
	return (
		<div className='flex justify-end gap-2 border-zinc-500'>
			<div className='relative right-3'>
				<FaSearch size='1.5rem' color='white' onClick={activateSearch} className={showSearch ? 'hidden' : ''} />
			</div>
		</div>
	);
};

export default Search;



