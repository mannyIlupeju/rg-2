import React from 'react';
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'




const heroImg = ['image1', 'image2', 'image3']

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [color, setColor] = useState('blue')


  const leftArrow = {
    color: 'white',
    transform: 'translate(0, -50%)',
    position:'absolute',
    top: '50%',
    left: '30px',
    cursor: 'pointer',
  }

    const rightArrow = {
    color: 'white',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top: '50%',
    right: '30px',
    cursor: 'pointer',
  }

 const nextImage = () =>{
  let lastSlide = currentIndex === heroImg.length - 1
  const newSlide = lastSlide ? 0 : currentIndex + 1
  setCurrentIndex(newSlide)

 }

 const prevImage = () => {
  let firstSlide = currentIndex === 0
  const newSlides = firstSlide ? heroImg.length-1 : currentIndex - 1
  setCurrentIndex(newSlides)
 }

 const isActive = {
   color: 'red'
 }

 

  return (    
      <div className="container mx-auto mt-8">
        <div>
          <img src={`/images/${heroImg[currentIndex]}.jpeg`} className="heroBg absolute"/>
        </div>
        <div className="relative bottom-80">
          <FaChevronLeft style={leftArrow} onClick={prevImage} size="3rem"/>
          <FaChevronRight style={rightArrow} onClick={nextImage} size="3rem"/>
        </div>
        <div className="flex flex-row justify-center">
          <RxDot size="2rem" style={isActive}/>
          <RxDot size="2rem"/>
          <RxDot size="2rem"/>
        </div>



      </div>
  );
}

export default Hero;
