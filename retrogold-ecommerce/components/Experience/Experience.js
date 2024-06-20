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

        <section className="relative bg-white z-2 pt-20">
            <motion.div
                className="flex justify-center"
                viewport={{ once: false }}
            >
                <div className="absolute z-10 ">
                    <h1 className="text-zinc-800 md:text-4xl text-3xl font-medium text-center">The Retrogold Experience</h1>
                </div>


                <motion.div className="flex flex-col lg:flex-row justify-center gap-4"
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
                        className="p-3 cursor-pointer w-full"
                    >
                        <Image
                            src='/images/shop.JPG'
                            alt="shop Image"
                            className="experienceImage justify-items-end"
                            width={800}
                            height={800}
                            loading='lazy'
                            ref={imageElement1}
                        />
                        <div className="flex justify-center relative md:bottom-56 bottom-28">
                            <Link href='/shop' className="text-3xl p-2 text-zinc-800 experience-link cursor-pointer">Shop</Link>
                        </div>
                    </motion.div>


                    <motion.div style={{ translateY: y }}
                        className="p-3 cursor-pointer w-full"
                    >
                        <Image
                            src='/images/services.jpg'
                            alt="shop Image"
                            className="experienceImage "
                            ref={imageElement2}
                            width={800}
                            height={800}
                            loading='lazy'
                        />
                        <div className="flex justify-center relative md:bottom-56 bottom-28">
                            <Link href="/services" className="text-3xl p-2 text-zinc-800 experience-link">Services</Link>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>

        </section>

    );
}

export default Experience;