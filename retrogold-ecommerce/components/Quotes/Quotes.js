import autoprefixer from 'autoprefixer';
import React, {useState, useEffect} from 'react';

const Quotes = ({ quote }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quote.length);
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-32">
        <div className="flex flex-col md:flex-row justify-center bg-gradient-to-r from-gray-200 via-gray-800 to-gray-900 rounded-lg p-8 space-y-8 md:space-y-0 md:space-x-8 max-w-screen-lg mx-auto">
          <div className="flex justify-center w-full md:w-1/2">
            <img src="/images/image1.jpeg" alt="woman meditating" className="w-full h-56 md:h-96 rounded-md object-cover" />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 text-zinc-700 space-y-4">
            <p className="text-lg md:text-xl font-light text-gray-200">{quote[currentIndex].quote}</p>
            <figcaption className="mt-2 self-end text-gray-200">- {quote[currentIndex].author}</figcaption>
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
