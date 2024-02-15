import Dropdown from './Dropdown'
import React, { useState } from 'react'
import { useGlobalContext } from '../../ Context/context';
import Link from 'next/link'
import Image from 'next/image'


export default function SearchDropdown() {

    const { searchValues, isSearchValue, hideDropdown } = useGlobalContext()
    const [currentIndex, setCurrentIndex] = useState(0)

    const content = (
        <>
            {searchValues && searchValues.length > 0 ? (
                <div className='p-2'>
                    <div className="mb-2">
                        <h1 className='text-sm'>Search Results</h1>
                    </div>
                    <ul>
                        <div className="flex flex-col gap-2">
                            {searchValues?.map((values, index) => {
                                const { images, type, slug, title, handle } = values
                                console.log(images?.edges[0]);
                                return (
                                    <li key={index} onClick={hideDropdown}>
                                        {type === 'blogPost' ?
                                            (<Link href={`/blog/${slug.current}`}>
                                                <p>{title}</p>
                                            </Link>) :
                                            type === 'product' ? (
                                                <Link href={`/shop/${handle}`}>
                                                    <div className="flex flex-row gap-2 items-center text-lg">
                                                        <Image
                                                            src={images?.edges[0].node.originalSrc}
                                                            width="50"
                                                            height="50"
                                                            alt="main product image of the pot"
                                                            loading='lazy'
                                                        />
                                                        <p>{title}</p>
                                                    </div>
                                                </Link>
                                            ) : null
                                        }
                                    </li>
                                )
                            }
                            )}
                        </div>
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
                styleClass="w-96 bg-white min-h-[220px] max-h-[500px] absolute z-10 top-16 rounded-lg h-48 text-zinc-800"
            />
        </div>

    )
}
