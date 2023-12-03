import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';


const Features = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1 , {once: true})
    const isInView2 = useInView(ref2 , {once: true})

    const controls1 = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
      if(isInView1){
        controls1.start("visible")
      }
    }, [isInView1])
    useEffect(() => {
        if(isInView2){
            controls2.start("visible")
          }
    }, [isInView2])

    return (
        <div className='pt-28 bg-white'>
            <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-1'><span className='text-lg'>🔥</span>PREMIER FEATURES</div>
            <div className='text-[50px] font-semibold'>Discover our product's <span className='text-orange-500'>Capabilities</span></div>
            <p className='w-[40%] text-center mx-auto text-lg font-semibold text-gray-500 mt-2'>Don't settle for mediocrity - embrace the future of management with Manage Wise.</p>

            <motion.div 
            variants={{
                hidden: {opacity:0 , y: 75},
                visible: {opacity:1 , y: 0},
            }}
            initial="hidden"
            animate={controls1}
            transition={{duration:0.5, delay: 0.5}}
            ref={ref1}
            className='px-36 grid grid-cols-2 gap-12 items-center mt-10'>
                <div className='bg-purple-200 rounded-2xl pt-20 pb-10 px-8 text-start'>
                    <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-2xl bg-white text-white flex-shrink-0 text-3xl">⭐️
                    </div>
                    <div class="flex-grow">
                        <h2 className='text-[40px] font-bold '>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</h2>
                    </div>
                </div>

                <div className='rounded-2xl pb-8 border border-gray-100'>
                    <div className='mb-10'>
                        <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" objectFit= 'cover' alt="" />
                    </div>
                    <div className='text-start px-8'>
                        <h2 className='text-2xl  font-semibold'>Smart Task Management</h2>
                        <p className='text-gray-600 mt-2'>Say goodbye to chaos with our smart task management system</p>
                    </div>
                </div>
            </motion.div>

            <div className='py-10'>
                <motion.div 
                variants={{
                    hidden: {opacity:0 , y: 70},
                    visible: {opacity:1 , y: 0},
                }}
                initial="hidden"
                animate={controls2}
                transition={{duration:0.5,delay: 0.5}}
                ref={ref2}
                className='grid grid-cols-3 gap-8 px-36'>
                    <div className='border-2 border-gray-100 rounded-3xl'>
                        <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="" />
                        <h2 className='text-xl font-extrabold text-start px-8 mt-2'>Flexible Scheduling</h2>
                        <p className='px-8 text-start text-gray-600 font-semibold mt-2 mb-5'>Stay productive with our flexible scheduling system</p>
                    </div>
                    <div className='border-2 border-gray-100 rounded-3xl'>
                        <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="" />
                        <h2 className='text-xl font-extrabold text-start px-8 mt-2'>Flexible Scheduling</h2>
                        <p className='px-8 text-start text-gray-600 font-semibold mt-2 mb-5'>Stay productive with our flexible scheduling system</p>
                    </div>
                    <div className='border-2 border-gray-100 rounded-3xl'>
                        <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="" />
                        <h2 className='text-xl font-extrabold text-start px-8 mt-2'>Flexible Scheduling</h2>
                        <p className='px-8 text-start text-gray-600 font-semibold mt-2 mb-5'>Stay productive with our flexible scheduling system</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Features
