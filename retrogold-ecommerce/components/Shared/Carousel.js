
// import React from 'react'
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
// import { RxDot } from 'react-icons/rx'
// import { RxDotFilled } from 'react-icons/rx'

// const Carousel = ({ currentIndex, setCurrentIndex, heroImg }) => {
//   const nextImage = () => {
//     let lastSlide = currentIndex === heroImg.length - 1
//     const newSlide = lastSlide ? 0 : currentIndex + 1
//     setCurrentIndex(newSlide)
//   }

//   const prevImage = () => {
//     let firstSlide = currentIndex === 0
//     const newSlides = firstSlide ? heroImg.length - 1 : currentIndex - 1
//     setCurrentIndex(newSlides)
//   }

//   const isActive = {
//     color: 'purple',
//   }

//   const notActive = {
//     color: 'white',
//   }

//   return (
//     <div>
//       <div className="relative top-40 lg:top-72 md:-top-20">
//         <FaChevronLeft
//           onClick={prevImage}
//           size="4.4rem"
//           className="leftArrow"
//         />
//         <FaChevronRight
//           onClick={nextImage}
//           size="4.4rem"
//           className="rightArrow"
//         />
//       </div>{' '}
//       {heroImg && (
//         <div className="flex flex-row justify-center relative bottom-80 md:bottom-96 lg:bottom-80 md:top-2/4">
//           <RxDot
//             size="2rem"
//             style={currentIndex === 0 ? isActive : notActive}
//             onClick={(e) => {
//               setCurrentIndex(0)
//             }}
//           />{' '}
//           <RxDot
//             size="2rem"
//             style={currentIndex === 1 ? isActive : notActive}
//             onClick={(e) => {
//               setCurrentIndex(1)
//             }}
//           />{' '}
//           <RxDot
//             size="2rem"
//             style={currentIndex === 2 ? isActive : notActive}
//             onClick={(e) => {
//               setCurrentIndex(2)
//             }}
//           />{' '}
//           <RxDot
//             size="2rem"
//             style={currentIndex === 3 ? isActive : notActive}
//             onClick={(e) => {
//               setCurrentIndex(3)
//             }}
//           />{' '}
//         </div>
//       )}
//     </div>
//   )
// }
// =======
import React, {useState} from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = ({ currentIndex, setCurrentIndex, heroImg }) => {
  const [startX, setStartX] = useState(0); // To store the starting X-coordinate of the touch event

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    // Check if swipe distance is greater than a certain threshold (here 50 pixels) to recognize it as a swipe
    if (startX - endX > 50) {
      nextImage();
    } else if (startX - endX < -50) {
      prevImage();
    }
  };

  const nextImage = () => {
    const newSlide = (currentIndex + 1) % heroImg.length;
    setCurrentIndex(newSlide);
  }

  const prevImage = () => {
    const newSlide = currentIndex === 0 ? heroImg.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  }

  return (
    <>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <FaChevronLeft onClick={prevImage} size="4rem" className="leftArrow text-green-400" />
        <FaChevronRight onClick={nextImage} size="4rem" className="rightArrow text-green-400" />
      </div>
      {heroImg && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          {heroImg.map((_, index) => (
            <RxDot
              key={index}
              size="2rem"
              style={currentIndex === index ? { color: 'purple' } : { color: 'white' }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};


export default Carousel
