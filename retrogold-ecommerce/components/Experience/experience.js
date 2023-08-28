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
    <div className="h-min relative experienceBg z-2">
     

      <motion.div 
       className="p-12 flex justify-center" 
       viewport={{once:false}}
      >
        <div className="absolute z-10 top-1">
          <h1 className="text-zinc-800 text-4xl font-medium text-center">The Retrogold Experience</h1>
        </div>


        <motion.div className="flex flex-col md:flex-row justify-center gap-20"
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
    
    </div>
  );
}

export default Experience;
