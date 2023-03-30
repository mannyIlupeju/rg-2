import React, {useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';
import imageUrlBuilder from '@sanity/image-url'



const Image = ({hero, currentIndex}) => {

  return (
       <div className="relative -top-4">
         <img src={urlFor(hero[currentIndex].images.asset._ref)} className="heroImages absolute rounded-lg"/>  
         <div className="flex justify-center">
           <h1 className="font-semibold xl:text-6xl text-4xl text-white absolute mx-2 bottom-1 w-fit bg-black p-4">{hero[currentIndex].headline} </h1>
         </div>
       </div>
  );
}

export default Image;
