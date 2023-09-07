import React from 'react';
import { urlFor } from '/lib/sanity';


const Calltoaction = ({calltoAction}) => {
    const mainImageBlog = {
    width: '20rem',
    height: 'auto',
    borderRadius: '0.5rem',
    display: 'block'
  }
  

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#D5B2BB" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,144C672,117,768,75,864,96C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <div className="pb-24 calltoaction p-4">
      <div className="flex flex-col gap-12 md:p-0 md:flex-row justify-center">
        <div className="md:w-2/6 w-full">
          <div className="text-zinc-700">
            <h1 className="text-4xl font-bold">{calltoAction[0].headline}</h1>
            <p className="text-xl mt-8 font-semibold">{calltoAction[0].sub_headline}</p>
          </div>

          <div className="mt-2">
            <input type="email" id='email' placeholder="Enter email address" size="20"/>
          </div>
          <button className="mt-4 btn">Submit</button>
        </div>

        <div className="flex justify-end inline-block" style={mainImageBlog}>
          <img src= {urlFor(calltoAction[0].image.asset._ref)} alt="plant pot" style={mainImageBlog}/>
        </div>
      
      </div>
      
    </div>
    </>
  );
}

export default Calltoaction;
