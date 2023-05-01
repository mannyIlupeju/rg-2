import React from 'react';
import Hero from './Hero/Hero';
import Navigation from '../Shared/Navigation';


const Landing = ({hero}) => {
  return (
    <>
    <Hero hero={hero}/>
    </>
  );
}

export default Landing;
