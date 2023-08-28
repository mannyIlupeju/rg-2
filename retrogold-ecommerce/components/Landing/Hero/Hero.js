import React, {useEffect} from 'react';


import ImageRender from './Images';
import Carousel from '../../Shared/Carousel';
import { images } from '@/next.config';
import { useGlobalContext } from '@/ Context/context';

//Carousel Component 
const Hero = ({hero}) => {
  console.log(hero)
  const { currentIndex, setCurrentIndex } = useGlobalContext()

  console.log(hero[0].headline)

  const heroOverlay = {
    background: '#4C5454'
  }

  //array hero reference
  const heroImg = []
  const heroImage0 = hero[0].heroImages
  const heroImage1 = hero[1].heroImages
  const heroImage2= hero[2].heroImages
  const heroImage3 = hero[3].heroImages
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
        <ImageRender hero={hero} currentIndex={currentIndex} styles={heroOverlay}/>
        <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} heroImg={heroImg}></Carousel>         
      </>
  );
}

export default Hero;


