import React from 'react';
import ImageRender from './Images';

//Carousel Component 
const Hero = ({hero}) => {
  const heroOverlay = {
    background: '#4C5454'
  }

  return (    
    <ImageRender hero={hero} styles={heroOverlay}/>
      
  );
}

export default Hero;


