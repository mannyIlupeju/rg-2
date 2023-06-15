import React, {useEffect} from 'react';


import Image from './Images';
import Carousel from '../../Shared/Carousel';
import { images } from '@/next.config';
import { useGlobalContext } from '@/ Context/context';

//Carousel Component 
const Hero = ({hero}) => {
  const { currentIndex, setCurrentIndex } = useGlobalContext()

  
  const heroOverlay = {
    background: '#4C5454'
  }

  //array hero reference
  const heroImg = []
  const heroImage0 = hero[0].images.asset._ref
  const heroImage1 = hero[1].images.asset._ref
  const heroImage2= hero[2].images.asset._ref
  const heroImage3 = hero[3].images.asset._ref
  heroImg.push(heroImage0, heroImage1, heroImage2, heroImage3)



  
  

  //Carousel Animation
  useEffect(()=>{
    const intervalid = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % heroImg.length)
    },3000);

    return ()=> clearInterval(intervalid);
  },[currentIndex])



   


  return (    
      <>
        <Image hero={hero} currentIndex={currentIndex} styles={heroOverlay}/>
        <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} heroImg={heroImg}></Carousel>         
      </>
  );
}

export default Hero;


