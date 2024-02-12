import Dropdown from './Dropdown'
import React, {useState} from 'react'
import { useGlobalContext } from '@/ Context/context';
import Link from 'next/link'

export default function SearchDropdown() {

  const { searchValues, isSearchValue, hideDropdown} = useGlobalContext()

  const content = (
    <>
      {searchValues && searchValues.length > 0 ? (
        <div className='p-2'>
          <h1 className='text-sm'>Search Results</h1>
          <ul>
            {searchValues?.map((values, index) => (
              <li key={index} onClick={hideDropdown}>
                <Link href={`/blog/${values.slug.current}`}>
                  <p>{values.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='p-2'>
          <p>No search results found.</p>{" "}
        </div>
      )}
    </>
  );

    if (!isSearchValue) return null;

  

  return (
        <div className="flex justify-center">
        <Dropdown
        isVisible={isSearchValue}
        content={content}
        styleClass="w-96 bg-white absolute z-10 top-16 rounded-lg h-48 text-zinc-800"
        />
        </div>
        
  )
}
