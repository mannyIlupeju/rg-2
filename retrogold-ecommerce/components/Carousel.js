import React from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = ({currentIndex, setCurrentIndex, heroImg}) => {

   //Left arrow styling
  const leftArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    left: '8px',
    top:'-300px',
    cursor: 'pointer',
  }

  //Right arrow styling
    const rightArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top:'-300px',
    right: '8px',
    cursor: 'pointer',
  }

  const nextImage = () =>{
    let lastSlide = currentIndex === heroImg.length - 1
    const newSlide = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newSlide)
 }

 const prevImage = ({heroImg}) => {
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
    <div>
      <div className="relative">
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
  );
}

export default Carousel;
