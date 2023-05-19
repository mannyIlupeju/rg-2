import autoprefixer from 'autoprefixer';
import React, {useState, useEffect} from 'react';

const Quotes = ({quote}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
 
  const gridBackground = {
    backgroundColor: 'linear-gradient(167deg, rgba(208,212,211,1) 62%, rgba(41,59,47,1) 100%, rgba(78,79,79,1) 100%)',
    width: '900px'
  }

  const imageQuote = {
    width: '460px',
    height: 'auto',
    borderRadius: '0.5rem'
  }


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
  }, 10000);




  return (
    <>
    <div className="container mx-auto mt-32 p-2">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 quoteBg rounded-lg md:w-2/4" style={gridBackground}>
          <div className="">
            <img src='/images/image1.jpeg' alt="woman meditating" style={imageQuote}/>
          </div>
          <div className="self-center p-8 relative right-4 text-zinc-700">
            <figure className="font-light text-medium">
             <p>{quote[currentIndex].quote}</p>
             <figcaption className="mt-2 flex justify-end"> - {quote[currentIndex].author}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#efefbc" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,240C672,213,768,171,864,160C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </>
  );
}

export default Quotes;
