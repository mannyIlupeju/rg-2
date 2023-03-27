import React from 'react';
import Navigation from './Navigation';
import Hero from '../Hero/Hero';


const Landing = ({hero}) => {
  return (
    <div className="heroBg">
      <Navigation/>
      <Hero hero={hero}/>
    </div>
  );
}

export default Landing;
