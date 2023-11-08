import autoprefixer from 'autoprefixer';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';

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
  
   <section className="container mx-auto px-4 lg:px-0 lg:my-24 my-10 h-24">
  <div className="flex flex-col md:flex-row justify-center items-center rounded-lg space-y-8 md:space-y-0 md:space-x-8 max-w-screen-lg mx-auto">
    <div className="flex justify-center w-full md:w-1/2">
    
      <Image src="/images/image1.jpeg" alt="woman meditating" className="w-full h-auto rounded-md object-cover" width={50} height={50} unoptimized/>
    </div>
    <div className="flex flex-col justify-center w-full md:w-1/2 text-zinc-700 space-y-4">
      <p className="text-lg md:text-xl font-light text-gray-700">{quote[currentIndex].quote}</p>
      <figcaption className="mt-2 self-end text-gray-700">- {quote[currentIndex].author}</figcaption>
    </div>
  </div>
</section>

  );
}

export default Quotes;
