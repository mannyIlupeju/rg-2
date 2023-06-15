import React, {useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'




const Image = ({hero, currentIndex}) => {
  return (
       <>
         <img src={urlFor(hero[currentIndex].images.asset._ref)} className="heroImages"/>  
         <div className="container mx-auto heroText">
           <h1 className="lg:text-8xl md:text-8xl text-6xl font-extrabold text-white">{hero[currentIndex].headline} </h1>
           <p className="text-lg lg:text-xl font-bold text-white">{hero[currentIndex].headstatement} </p>
         </div>
       </>
  );
}

export default Image;
