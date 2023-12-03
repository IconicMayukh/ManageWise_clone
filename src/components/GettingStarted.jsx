import React, { useEffect, useRef } from 'react'
import { FaPlayCircle, FaArrowCircleRight } from "react-icons/fa";
import "./styles.css";
import { motion, useInView, useAnimation } from 'framer-motion';

const GettingStarted = () => {

    const ref = useRef(null);
    const isInView = useInView(ref , {once: true})

    const controls = useAnimation();

    useEffect(() => {
      if(isInView){
        controls.start("visible")
      }
    }, [isInView])
    

    return (
        <div className='pt-24' style={{ "background-color": "rgb(253, 242, 236)" }}>
            <motion.div
            variants={{
                hidden: {opacity:0 , y: 85},
                visible: {opacity:1 , y: 0},
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:0.5, delay: 0.5}}
            className='start_container'>
                <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-1'><span className='text-lg'>👋</span> WELCOME TO MANAGE WISE!</div>
                <div className='text-[80px] font-semibold'>Empower your business with</div>
                <div className='text-[80px] font-semibold -mt-8'><span className='text-orange-500'>Strategic</span> insights</div>
                <p className='w-[50%] text-center mx-auto text-lg font-semibold text-gray-500 mt-2'>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
                <div class="flex justify-center pt-5">
                    <button class="button inline-flex text-white bg-indigo-500 border-8 border-white py-4 items-center px-12 focus:outline-none hover:bg-indigo-600 hover:border-indigo-200 transition duration-300 ease-in-out tracking-wide rounded-3xl text-lg font-semibold"><span>Get Started </span><FaArrowCircleRight className='ml-2 hover:inline-block arrow' /></button>
                    <button class="ml-4 inline-flex border-[1px] border-gray-100 items-center text-gray-800 bg-white py-3 px-12 focus:outline-none hover:border-gray-300 rounded-3xl text-lg font-semibold">Watch Demo <FaPlayCircle className='ml-2' /></button>
                </div>
             </motion.div>

            <div className='bg-white'>
                <motion.div
                variants={{
                    hidden: {opacity:0.5 , scale: 0.5},
                    visible: {opacity:1 , scale: 1},
                }}
                initial="hidden"
                animate={controls}
                transition={{duration:0.5, delay: 0.85}}
                ref={ref}
                className='w-[80%] mx-auto pt-10 rounded-full shadow-black shadow-[15px 15px]'>
                    <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" alt="" />
                </motion.div>
            </div>

        </div>
    )
}

export default GettingStarted
