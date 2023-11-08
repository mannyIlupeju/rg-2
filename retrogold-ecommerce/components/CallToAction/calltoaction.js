import React, {useRef, useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';
import { useGlobalContext } from '@/ Context/context';

const Calltoaction = ({calltoAction}) => {

  //TODO:
  //Display sign up message 

  const inputRef = useRef(null)
  const [isMessage, setMessage] = useState('')

  async function handleSubmit(){
    const userEmail = inputRef.current.value

    try{
      const response = await fetch('api/newsletter/newsletter', {
        method:'POST',
        headers: {
          'Content-Type':"application/json"
        },
        body: JSON.stringify({email: userEmail}),
      })

      const data = await response.json();
      setMessage(data.message)

    } catch(error) {
      console.log('Error occurred', error)
    }
  }

  useEffect(()=> {
    setTimeout(() => {
      setMessage(null)
    }, 6000);
  }, [isMessage])

  


  const mainImageBlog = {

    width: '20rem',
    height: 'auto',
    borderRadius: '0.5rem',
    display: 'block'
  }


  

  return (
    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
     <path fill="#D5B2BB" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,144C672,117,768,75,864,96C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg> */}
    
    {/* <div className="pb-24 calltoaction p-4">
      <div className="flex flex-col gap-12 md:p-0 md:flex-row justify-center">
        <div className="md:w-2/6 w-full">
          <div className="text-zinc-700">
            <h1 className="text-4xl font-bold">{calltoAction[0].headline}</h1>
            <p className="text-xl mt-8 font-semibold">{calltoAction[0].sub_headline}</p>
          </div>

          <div className="mt-2">
            <input type="email" id='email' placeholder="Enter email address" size="20" ref={inputRef}/>
          </div>

          <div className="mt-2 text-zinc-800">
          {isMessage}
          </div>

          <button className="mt-4 btn" onClick={handleSubmit}>Submit</button> */}

    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FAC3DF" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,144C672,117,768,75,864,96C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    
      <div className="md:pb-28 calltoaction p-4 md:p-8 h-auto md:h-96">
        <div className="flex flex-col md:flex-row md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-screen-xl mx-auto">
          <div className="md:w-1/2 w-full text-left max-w-xl relative bottom-32">
            <div className="text-gray-600 whitespace-normal">
              <h1 className="text-xl md:text-4xl font-bold w-3/4">{calltoAction[0].headline}</h1>
              <p className="text-xl mt-8 font-semibold">{calltoAction[0].sub_headline}</p>
            </div>

            <div className="mt-2">
              <input type="email" id='email' placeholder="Enter email address" size="20" ref={inputRef}/>
            </div>

            <div className="mt-2 text-zinc-800">
            {isMessage}
            </div>

            <button className="mt-4 btn" onClick={handleSubmit}>Submit</button>
          </div>

          <div className="md:w-1/2 w-full flex justify-center inline-block relative bottom-28" style={mainImageBlog}>
              <img 
                src={urlFor(calltoAction[0].image.asset._ref)} 
                alt="plant pot" 
                style={mainImageBlog} 
                className="w-full md:max-w-lg rounded-lg object-cover"
              />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calltoaction;
