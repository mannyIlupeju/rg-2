import React from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = ({currentIndex, setCurrentIndex, heroImg}) => {

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
   color: 'white',
 }

 



  return (
    <>
          <div className="relative top-40 lg:top-72">
            <FaChevronLeft onClick={prevImage} size="4rem"  className="leftArrow"/>
            <FaChevronRight onClick={nextImage} size="4rem"  className="rightArrow"/>
          </div>
           {heroImg && 
          (<div className="flex flex-row justify-center relative bottom-96 lg:bottom-60">
            <RxDot size="2rem" style={currentIndex === 0 ? isActive: notActive} onClick={(e) => {
              setCurrentIndex(0)}} />
            <RxDot size="2rem" style={currentIndex === 1 ? isActive : notActive}onClick={(e) => {
              setCurrentIndex(1)}} />
            <RxDot size="2rem" style={currentIndex === 2 ? isActive : notActive} onClick={(e) => {
              setCurrentIndex(2)}} />
            <RxDot size="2rem" style={currentIndex === 3 ? isActive : notActive} onClick={(e) => {
              setCurrentIndex(3)}} />
          </div>)
            }
         
    </>
  );
}

export default Carousel;
