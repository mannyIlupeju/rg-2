import React, {useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';




const Image = ({hero, currentIndex}) => {


  return (
       <>
         <img src={urlFor(hero[currentIndex].images.asset._ref)} className="heroImages"/>  
         <div className="flex flex-col gap-2 relative bottom-64 p-4 md:bottom-64 container mx-auto">
           <h1 className="text-6xl lg:text-7xl font-extrabold text-white">{hero[currentIndex].headline} </h1>
           <p className="text-lg lg:text-xl font-bold text-white">{hero[currentIndex].headstatement} </p>
         </div>
       </>
  );
}

export default Image;
