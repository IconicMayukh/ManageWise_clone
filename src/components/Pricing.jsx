import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';


const Pricing = () => {

    const ref = useRef(null);
    const isInView = useInView(ref , {once: true})

    const controls = useAnimation();

    useEffect(() => {
      if(isInView){
        controls.start("visible")
      }
    }, [isInView])

    return (
        <div className='bg-white'>
            <div>
                <div className='pt-40'>
                    <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-1'><span className='text-lg'>💲</span> PRICING</div>
                    <div className='text-[50px] font-semibold'>Select your ideal <span className='text-orange-500'>Pricing</span> plan</div>
                    <p className='w-[40%] text-center mx-auto text-lg font-semibold text-gray-500 mt-2'>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p>
                </div>


                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        {/* <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                            <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                                <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
                                <button class="py-1 px-4 focus:outline-none">Annually</button>
                            </div>
                        </div> */}


                        <motion.div 
                        variants={{
                            hidden: {opacity:0 , y: 75},
                            visible: {opacity:1 , y: 0},
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{duration:0.5, delay: 0.5}}
                        ref={ref}
                        class="flex flex-wrap -m-4">
                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                <div class="h-full p-6 pt-10 rounded-3xl bg-blue-100 flex flex-col relative overflow-hidden">
                                    <h2 class="text-sm tracking-widest title-font mb-3 font-medium text-start"><span className='bg-white rounded-xl px-2 py-1'>FREE</span></h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>$0</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/month</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Access to all basic features
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Reporting and analytics
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Up to 5 individual users
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-6">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Chat and email support
                                    </p>
                                    <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-[50%] mx-auto focus:outline-none hover:bg-gray-500 rounded-xl">Get Started
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p class="text-xs text-gray-500 mt-3"></p>
                                </div>
                            </div>



                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full scale-110">
                                <div class="h-full p-6 rounded-3xl border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                    <h2 class="text-sm tracking-widest title-font mb-3 font-medium text-start"><span className='bg-white rounded-xl px-2 py-1'>STANDARD</span></h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>$25</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/month</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Access to all basic features
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Reporting and analytics
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Up to 5 individual users
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Chat and email support
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>3+ integrations
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-6">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Account performance reporting
                                    </p>
                                    <button class="flex items-center mt-auto text-white bg-indigo-500 border-8 border-white py-2 px-4 w-[50%] mx-auto focus:outline-none hover:bg-indigo-600 hover:border-indigo-200 rounded-xl transition-all duration-300 ease-in-out">Get Started
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p class="text-xs text-gray-500 mt-3"></p>
                                </div>
                            </div>



                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                <div class="h-full p-6 rounded-3xl bg-blue-100  flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-3 font-medium text-start"><span className='bg-white rounded-xl px-2 py-1'>BUSINESS</span></h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>$42</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/month</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Access to all basic features
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Reporting and analytics
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Up to 5 individual users
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Chat and email support
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-6">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>3+ integrations
                                    </p>
                                    <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-[50%] mx-auto focus:outline-none hover:bg-gray-500 rounded-xl">Get Started
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p class="text-xs text-gray-500 mt-3"></p>
                                </div>
                            </div>



                            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                <div class="h-full p-6 rounded-3xl bg-blue-100  flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-3 font-medium text-start"><span className='bg-white rounded-xl px-2 py-1'>PREMIUM</span></h2>
                                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>$56</span>
                                        <span class="text-lg ml-1 font-normal text-gray-500">/month</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Access to all basic features
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Reporting and analytics
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Up to 5 individual users
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Chat and email support
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-6">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>3+ integrations
                                    </p>
                                    <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-[50%] mx-auto focus:outline-none hover:bg-gray-500 rounded-xl">Get Started
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p class="text-xs text-gray-500 mt-3"></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Pricing
