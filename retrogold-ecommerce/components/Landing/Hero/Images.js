import React, {useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';
import imageUrlBuilder from '@sanity/image-url'



const Image = ({hero, currentIndex}) => {

  return (
       <>
         <img src={urlFor(hero[currentIndex].images.asset._ref)} className="heroImages"/>  
         <div className="flex justify-center">
           <h1>{hero[currentIndex].headline} </h1>
         </div>
       </>
  );
}

export default Image;
