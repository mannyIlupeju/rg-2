import React, {useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';
import imageUrlBuilder from '@sanity/image-url'


const Image = ({hero, currentIndex}) => {
  return (
       <div>
         <img src={urlFor(hero[currentIndex].images.asset._ref)} className="heroImages rounded-lg"/>  
       </div>
  );
}

export default Image;
