import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import "./styles.css";
import picture from "../Screenshot 2023-12-02 230626.png"
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';


function Miss() {

    const ref = useRef(null);
    const isInView = useInView(ref , {once: true})

    const controls = useAnimation();

    useEffect(() => {
      if(isInView){
        controls.start("visible")
      }
    }, [isInView])

    return (
        <div className='miss_container py-24'>
            <motion.div 
            variants={{
                hidden: {opacity:0.25 , scale: 0.35},
                visible: {opacity:1 , scale: 1},
            }}
            initial="hidden"
            animate={controls}
            transition={{duration:0.5, delay: 0.25}}
            ref={ref}
            className='w-[80%] mx-auto rounded-3xl border border-gray-200 grid grid-cols-2 gap-10 p-28 bg-white'>
                <div className='mx-auto text-start'>
                    <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-2'><span className='text-xl mr-1'>👋</span> DON'T MISS OUT</div>
                    <div className='text-[50px] font-semibold leading-tight'>Unleash your <span className='text-orange-500'>Potential</span> with us</div>
                    <p className='w-[80%] text-start text-lg font-semibold text-gray-500 mt-2'>Join our community of ambitious individuals and organizations eager to make a difference.</p>

                    <button class="button flex mt-6 items-center text-white border-8 border-white bg-purple-500 py-4 px-10 focus:outline-none hover:bg-purple-600 transition duration-300 rounded-2xl text-lg font-semibold tracking-wider hover:border-8 hover:border-purple-200"><span>Try out now</span>
                    <FaArrowCircleRight className='arrow ml-1 text-xl'/></button>
                </div>

                <div className='col-span-1'>
                    <img src={picture} alt="" />
                </div>

            </motion.div>
        </div>
    )
}

export default Miss
