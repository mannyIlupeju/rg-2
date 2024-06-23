import React from 'react';
import Image from 'next/image'



const Landing = () => {
  
    return (
    <div className="heroOverlay relative h-4/6 flex-col justify-center items-center w-full">
      <div className="heroOverlay">
        <Image
          src='/images/victorianRetrogold.png'
          className="heroImages"
          alt="hero Images"
          fill={true}
          unoptimized
          loading='lazy'
        />
        <div className="absolute bottom-1/4 lg:bottom-1/4 md:-bottom-6 text-center w-full translate-x-1/5 -translate-y-1/2 lg:translate-y-1/4 p-3 text-white font-extrabold text-2xl md:text-6xl lg:text-7xl">
          <h1 className="text-center text-white font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {'Connecting your Mind, Body, Spirit & Home.'}
          </h1>
        </div>
      </div>
    </div>
  );
  
}

export default Landing;