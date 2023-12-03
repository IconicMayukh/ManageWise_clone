import React from 'react'
import { FaMobile } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { HiFire } from "react-icons/hi";
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';

const More = () => {

    const ref = useRef(null);
    const isInView = useInView(ref , {once: true})

    const controls = useAnimation();

    useEffect(() => {
      if(isInView){
        controls.start("visible")
      }
    }, [isInView])

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once: true})

    const controls1 = useAnimation();

    useEffect(() => {
      if(isInView1){
        controls1.start("visible")
      }
    }, [isInView1])

    return (
        <div className='bg-gray-900 text-white'>
            <div className='w-[80%] mx-auto'>
                <div className='pt-24 text-start'>
                    <p className='bg-white text-purple-600 inline-block px-3 rounded-lg text-sm'><span className='text-lg'>🤩</span> AND MORE...</p>
                    <h1 className='mt-9 text-[50px] leading-none'>Explore an array of features that elevate your <span className='text-orange-400'>Productivity</span> to new heights</h1>
                    <p className='mt-3 text-xl text-gray-500 w-[50%] font-semibold '>Discover the tools that will revolutionize the way you manage and optimize your operations</p>
                </div>


                <div className='mt-14 pb-20'>
                    <motion.div 
                    variants={{
                        hidden: {opacity:0 , y: 75},
                        visible: {opacity:1 , y: 0},
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{duration:0.5, delay: 0.5}}
                    ref={ref}
                    class="grid grid-cols-3 gap-6">
                        <div class="pt-14 pb-8 px-10 flex flex-col text-center items-center bg-gray-800 rounded-3xl">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-3xl bg-purple-500 text-purple-100 mb-5 flex-shrink-0">
                                <FaMobile className='text-[40px]' />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-2xl font-bold title-font mb-3">Cross-Platform Compatibility</h2>
                                <p class="leading-normal text-lg text-gray-400 ">Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                                <a class="mt-3 text-purple-500 inline-flex items-center cursor-pointer">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="pt-14 pb-8 px-10 flex flex-col text-center items-center bg-gray-800 rounded-3xl">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-3xl bg-purple-500 text-purple-100 mb-5 flex-shrink-0">
                                <GoBellFill className='text-[40px]' />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-2xl font-bold title-font mb-3">Stay Informed with Essential Notifications</h2>
                                <p class="leading-normal text-lg text-gray-400 ">Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
                                <a class="mt-3 text-purple-500 inline-flex items-center cursor-pointer">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="pt-14 pb-8 px-10 flex flex-col text-center items-center bg-gray-800 rounded-3xl">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-3xl bg-purple-500 text-purple-100 mb-5 flex-shrink-0">
                                <HiFire className='text-[40px]' />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-2xl font-bold title-font mb-3">Secure Data Encryption at all times</h2>
                                <p class="leading-normal text-lg text-gray-400 ">Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
                                <a class="mt-3 text-purple-500 inline-flex items-center cursor-pointer">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>

            <div className='mt-24'>
                <div className='w-[40%] mx-auto'>
                    <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-1'><span className='text-lg mr-1'>🛠</span> INTEGRATIONS</div>
                    <div className='text-[50px] font-semibold leading-tight'>Enable <span className='text-orange-500'>integration</span> with other popular tools and platforms</div>
                    <p className='w-[80%] text-center mx-auto text-lg font-semibold text-gray-500 mt-2'>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</p>

                    <motion.div 
                    variants={{
                        hidden: {opacity:0 , y: 75},
                        visible: {opacity:1 , y: 0},
                    }}
                    initial="hidden"
                    animate={controls1}
                    transition={{duration:0.5, delay: 0.5}}
                    ref={ref1}
                    className=''>
                        <div className='w-[80%] mx-auto mt-10 rounded-3xl shadow-md'>
                            <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default More
