import React from 'react';
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'





//Hero Object that contains the hero and headline together
const heroCarousel1 = {
  hero1: 'heropic1',
  headline1: 'Connect your mind'
}
//We destrcutured the object to retrieve the individual values 
const {hero1, headline1} = heroCarousel1
console.log(hero1, headline1)

const heroCarousel2 = {
  hero2: 'IMG_1358',
  headline2: 'Connect your body'
}
//We destrcutured the object to retrieve the individual values 
const {hero2, headline2} = heroCarousel2

const heroCarousel3 = {
  hero3: 'IMG_1360',
  headline3: 'Connect your soul'
}
//We destrcutured the object to retrieve the individual values 
const {hero3, headline3} = heroCarousel3

const heroCarousel4 = {
  hero4: 'home3',
  headline4: 'Connect your spirit'
}
//We destrcutured the object to retrieve the individual values 
const {hero4, headline4} = heroCarousel4
/*********************************************************** */


//Put all the values in their respective arrays(images and headlines)
const heroImg = [hero1, hero2, hero3, hero4]
const headlines = [headline1, headline2, headline3, headline4]



//Carousel Component 

const Hero = ({hero}) => {
  console.log(hero)



  const [currentIndex, setCurrentIndex] = useState(0)

  const leftArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top: '50%',
    left: '8px',
    cursor: 'pointer',
  }


    const rightArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top: '50%',
    right: '8px',
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
   color: 'purple',
  
 }

 const notActive = {
   color: '#D5BDAF',
 }
 



  return (    
      <div className="container flex justify-center mx-auto mt-10">
        <div className="relative">
            <img src={`/images/${heroImg[currentIndex]}.jpeg`} className="heroBg absolute rounded-lg"/>
          <div className="absolute -translate-y-96 translate-x-12 md:translate-x-32 text-white bg-black p-4">
            <div className="font-bold text-xl md:text-6xl xl:text-7xl">{headlines[currentIndex]}</div>
           
          </div>
        <div className="relative -translate-y-96">
          <FaChevronLeft style={leftArrow} onClick={prevImage} size="2rem"/>
          <FaChevronRight style={rightArrow} onClick={nextImage} size="2rem"/>
        </div>
        <div className="flex flex-row justify-center relative bottom-10">
          <RxDot size="2rem" style={currentIndex === 0 ? isActive: notActive} onClick={(e) => {
            setCurrentIndex(0)}} />
          <RxDot size="2rem" style={currentIndex === 1 ? isActive : notActive}onClick={(e) => {
            setCurrentIndex(1)}} />
          <RxDot size="2rem" style={currentIndex === 2 ? isActive : notActive} onClick={(e) => {
            setCurrentIndex(2)}} />
          <RxDot size="2rem" style={currentIndex === 3 ? isActive : notActive} onClick={(e) => {
            setCurrentIndex(3)}} />
        </div>
            </div>
      </div>
  );
}

export default Hero;
