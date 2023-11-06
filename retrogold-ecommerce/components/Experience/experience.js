import React, {useRef} from 'react';
import Link from 'next/link'
import { motion, useScroll, useSpring, useInView, useTransform } from 'framer-motion';




const Experience = () => {
  const imageElement1 = useRef()
  const imageElement2 = useRef(null)
  const experienceRef = useRef(null)




  //to set the animation on both boxes to give it the scroll animation 
  const {scrollYProgress, scrollY} = useScroll();


  let x = useTransform(scrollYProgress, [0,0.5,1], ['0','10px','20px'])
  let y = useTransform(scrollYProgress, [0, 0.5,1], ['0','10px','20px'])



  //when element is in view, repeat animation when it is fully in view
  const isInView = useInView(experienceRef, {once:false}, {amount: 1})



  const experienceVariant = {
    offscreen: {y:-600},
    onscreen: {y:40,
    transition: {
      duration: 3,
      type: "spring"
    },
    }
  }


 

  return (
    <>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#C7D8A0" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,240C672,213,768,171,864,160C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    <section className="relative experienceBg z-2">
      <motion.div 
       className="p-12 flex justify-center" 
       viewport={{once:false}}
      >
        <div className="absolute z-10">
          <h1 className="text-zinc-800 text-4xl font-medium text-center">The Retrogold Experience</h1>
        </div>


        <motion.div className="flex flex-col md:flex-row justify-center gap-4 mt-12"
            initial={"offscreen"}
              whileInView={{y:40, 
              transition: {
                duration: 3,
                type: "spring"
              }}
            }
        >
        

          <motion.div style={{translateY:x}}
              className="p-3 cursor-pointer"
          >
            <img src='/images/shop.JPG' alt="shop Image" className="experienceImage imageParallax1 justify-items-end" 
            ref={imageElement1}
            />
            <div className="flex justify-center relative bottom-56">
            <Link href='/shop' className="text-3xl p-2 text-zinc-800 experience-link cursor-pointer">Shop</Link>  
            </div>
          </motion.div>


          <motion.div style={{translateY:y}}
          className="p-3 cursor-pointer"
          >
            <img src='/images/services.jpg' alt="shop Image" className="experienceImage imageParallax2" ref={imageElement2}/>
            <div className="flex justify-center relative bottom-56">
              <Link href="/services" className="text-3xl p-2 text-zinc-800 experience-link">Services</Link>  
            </div>
          </motion.div>
        </motion.div>
        
      </motion.div>
    
    </section>
    </>
  );
}

export default Experience;
