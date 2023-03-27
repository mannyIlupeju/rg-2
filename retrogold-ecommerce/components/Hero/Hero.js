import React, {useEffect} from 'react';
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'
import Image from './Images';
import Carousel from '../Carousel';


//Carousel Component 
const Hero = ({hero}) => {
  const [currentIndex, setCurrentIndex] = useState(0)


  //array hero reference
  const heroImg = []
  const heroImage0 = hero[0].images.asset._ref
  const heroImage1 = hero[1].images.asset._ref
  const heroImage2= hero[2].images.asset._ref
  const heroImage3 = hero[3].images.asset._ref
  heroImg.push(heroImage0, heroImage1, heroImage2, heroImage3)

  
  

  //Carousel Animation
  setTimeout(() => {
    if(currentIndex === 0) {
      setCurrentIndex(1)
    }
    if(currentIndex === 1) {
      setCurrentIndex(2)
    }
    if(currentIndex === 2) {
      setCurrentIndex(3)
    }
    if(currentIndex === 3) {
      setCurrentIndex(0)
    }
  }, 2000);


   


  return (    
      <div className="container flex justify-center mx-auto mt-8">
        <div>
          <Image hero={hero} currentIndex={currentIndex}/>
          <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} heroImg={heroImg}></Carousel>         
        </div>
      </div>
  );
}

export default Hero;
