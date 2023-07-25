import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'




const ImageRender = ({hero, currentIndex}) => {
  return (
       <>
         <Image src={hero[currentIndex].heroImages} width="200" height="200" className="heroImages" alt="hero Images" unoptimized priority={true}/>  
         <div className="container mx-auto heroText">
           <h1 className="lg:text-8xl md:text-8xl text-6xl font-extrabold text-white">{hero[currentIndex].headline} </h1>
           <p className="text-lg lg:text-xl font-bold text-white">{hero[currentIndex].headstatement} </p>
         </div>
       </>
  );
}

export default ImageRender;
