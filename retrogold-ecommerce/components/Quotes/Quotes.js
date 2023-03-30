import React, {useState, useEffect} from 'react';

const Quotes = ({quote}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quotes, setQuotes] = useState('')


  useEffect(()=>{
    setQuotes(quote)
  }, [quote])

 

  
  const gridBackground = {
    backgroundColor: 'linear-gradient(167deg, rgba(208,212,211,1) 62%, rgba(41,59,47,1) 100%, rgba(78,79,79,1) 100%)',
    width: '1000px'
  }

  const imageQuote = {
    width: '460px',
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
    <div className="container mx-auto h-fit mt-24 mb-24 p-8">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 quoteBg rounded-lg md:w-2/4" style={gridBackground}>
          <div className="w-fit">
            <img src='/images/thumbnail_IMG_1357.jpeg' alt="woman meditating" style={imageQuote}/>
          </div>
          <div className="self-center p-8 relative right-4">
            <figure className="font-semibold">
             <p className="text-lg">{quote[currentIndex].quote}</p>
             <figcaption className="mt-2 flex justify-end"> - {quote[currentIndex].author}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
