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

export default Carousel;
