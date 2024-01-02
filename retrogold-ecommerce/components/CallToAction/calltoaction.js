import React, {useRef, useState, useEffect} from 'react';
import { urlFor } from '/lib/sanity';
import Image from 'next/image'
import { useGlobalContext } from '@/ Context/context';

const Calltoaction = ({calltoAction}) => {
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

    <div className="">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FAC3DF" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,144C672,117,768,75,864,96C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
    
      <div className="md:pb-28 p-12">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-screen-xl mx-auto">
          <div className="md:w-1/2 w-full text-left max-w-xl">
            <div className="text-gray-600 whitespace-normal">
              <h1 className="text-xl md:text-2xl font-bold w-3/4">{calltoAction[0].headline}</h1>
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

          <div className="lg:w-1/2 w-full flex justify-center" style={mainImageBlog}>
              <Image
                src={calltoAction[0].mainImage} 
                alt="plant pot" 
                style={mainImageBlog} 
                className="w-full md:max-w-lg rounded-lg object-cover"
                width={400}
                height={400}
              />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calltoaction;
