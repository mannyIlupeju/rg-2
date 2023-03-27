import React, {useState, useEffect} from 'react';

const Quotes = ({quote}) => {
  const [quotes, setQuotes] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
 console.log(quotes[0].quote)

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

  



  return (
    <div className="container mx-auto flex justify-center h-full my-20">
      <div>
        <div className="grid grid-cols-2 gap-8 p-8 mt-5 quoteBg" style={gridBackground}>
          <div className="">
            <img src='/images/image2.jpeg' alt="woman meditating" style={imageQuote}/>
          </div>
          <div>
            <figure>
             <p>{quotes[currentIndex].quote}</p>
             <figcaption className="mt-2"> - {quote[currentIndex].author}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
