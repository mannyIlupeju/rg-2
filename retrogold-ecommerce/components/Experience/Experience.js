import React, { useRef } from 'react';
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'



const Experience = () => {
    const imageElement1 = useRef()
    const imageElement2 = useRef(null)
    const experienceRef = useRef(null)

    //to set the animation on both boxes to give it the scroll animation 
    const { scrollYProgress, scrollY } = useScroll();


    let x = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '10px', '20px'])
    let y = useTransform(scrollYProgress, [0, 0.5, 1], ['0', '10px', '20px'])






    return (

        <section className="relative bg-white z-2 p-20">
            <motion.div
                className="flex justify-center"
                viewport={{ once: false }}
            >
                <div className="absolute z-10 ">
                    <h1 className="text-zinc-800 text-4xl lg:text-3xl font-medium text-center">The Retrogold Experience</h1>
                </div>


                <motion.div className="flex flex-col md:flex-row justify-center gap-4"
                    initial={"offscreen"}
                    whileInView={{
                        y: 80,
                        transition: {
                            duration: 3,
                            type: "spring"
                        }
                    }
                    }
                >


                    <motion.div style={{ translateY: x }}
                        className="p-3 cursor-pointer"
                    >
                        <Image
                            src='/images/shop.JPG'
                            alt="shop Image"
                            className="experienceImage imageParallax1 justify-items-end"
                            width={200}
                            height={200}
                            loading='lazy'
                            ref={imageElement1}
                        />
                        <div className="flex justify-center relative bottom-56">
                            <Link href='/shop' className="text-3xl p-2 text-zinc-800 experience-link cursor-pointer">Shop</Link>
                        </div>
                    </motion.div>


                    <motion.div style={{ translateY: y }}
                        className="p-3 cursor-pointer"
                    >
                        <Image
                            src='/images/services.jpg'
                            alt="shop Image"
                            className="experienceImage imageParallax2"
                            ref={imageElement2}
                            width={200}
                            height={200}
                            loading='lazy'
                        />
                        <div className="flex justify-center relative bottom-56">
                            <Link href="/services" className="text-3xl p-2 text-zinc-800 experience-link">Services</Link>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>

        </section>

    );
}

export default Experience;