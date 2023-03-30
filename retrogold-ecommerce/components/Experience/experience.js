import React, {useRef} from 'react';
import { motion, useScroll, useSpring, useInView, useTransform } from 'framer-motion';
import { viewport } from '@popperjs/core';
import { duration } from 'moment';


const Experience = () => {
  const imageElement1 = useRef()
  const imageElement2 = useRef(null)
  const experienceRef = useRef(null)


  //to set the animation on both boxes to give it the scroll animation 
  const {scrollYProgress, scrollY} = useScroll();
  let x = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ['0', '200px', '-200px', '980px'])
  let y= useTransform(scrollYProgress,[0, 0.2, 0.5, 1], ['0', '100px', '370px','-950px'])







  //when element is in view, repeat animation when it is fully in view
  const isInView = useInView(experienceRef, {once:false}, {amount: 1})
  console.log(isInView)




  const sectionAnimate = {
    offscreen: {y:-400},
    onScreen: {y:100,
    transition: {duration:1}
  }
  }

  console.log(scrollYProgress)
 

  return (
    <div className="container mx-auto experienceBg h-screen rounded-lg mb-40" >
      <div className="p-20 mt-32 flex justify-center">
        <div className="absolute z-10 ">
          <h1 className="text-white text-7xl  font-semibold text-center">The Retrogold Experience</h1>
        <div className="justify-center">
          <p className="text-4xl leading-none text-center text-white">Take advantage of the items and services we are offering today.</p>
        </div>
        </div>
        <motion.div className="flex justify-center" 
      
          
        >
          <motion.div style={{translateY:x}}
          animate={
            {transition: {duration: 3}}
          }
          >
            <img src='/images/shop.png' alt="shop Image" className="experienceImage imageParallax1 justify-items-end" 
            ref={imageElement1}
            />
           
          </motion.div>
          <motion.div style={{translateY:y}}
            animate={
            {transition: {duration: 3}}
          }>
            <img src='/images/tarot.png' alt="shop Image" className="experienceImage imageParallax2" ref={imageElement2}/>
          </motion.div>
        </motion.div>
        
      </div>
    
    </div>
  );
}

export default Experience;
