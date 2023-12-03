import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { PiPlusBold } from "react-icons/pi";
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';


const FAQ = () => {

    const [faq1, setFaq1] = useState(false)
    const [faq2, setFaq2] = useState(false)
    const [faq3, setFaq3] = useState(false)
    const [faq4, setFaq4] = useState(false)
    const [faq5, setFaq5] = useState(false)

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
            <div className='w-[80%] mx-auto grid grid-cols-3 pt-24 space-x-20'>
                <div className='mx-auto col-span-1 text-start w-[80%]'>
                    <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-1'><span className='text-lg mr-1'>🙋‍♀️</span>FAQ</div>
                    <div className='text-[50px] font-semibold leading-none'>Need <span className='text-orange-500'>Answers?</span></div>
                    <p className='text-start mx-auto text-lg font-semibold text-gray-500 mt-3'>Checkout the most <span className='text-orange-500'>F</span>requently <span className='text-orange-500'>A</span>sked <span className='text-orange-500'>Q</span>uestions section below to find the information you need.</p>
                </div>

                <motion.div 
                variants={{
                    hidden: {opacity:0 , y: 75},
                    visible: {opacity:1 , y: 0},
                }}
                initial="hidden"
                animate={controls}
                transition={{duration:0.5, delay: 0.5}}
                ref={ref}
                className='col-span-2'>
                    <div className='bg-blue-50 rounded-3xl py-5 px-10 items-center text-start mb-5'>
                        <div className='relative cursor-pointer' onClick={()=>{setFaq1(!faq1)}}>
                            <h2 className={`text-2xl font-semibold ${faq1 ? "text-purple-600" : "text-black"} select-none`}>What is Manage Wise and what does it offer?</h2>
                            {faq1 ? <RxCross2 className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600'/>
                            :

                            <PiPlusBold className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600 font-bold'/>}
                        </div>
                        <div className={`text-lg leading-tight text-gray-500 my-6 ${faq1 ? "inline-block" : "hidden"} select-none`}>Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.</div>
                    </div>

                    <div className='bg-blue-50 rounded-3xl py-5 px-10 items-center text-start mb-5'>
                        <div className='relative cursor-pointer' onClick={()=>{setFaq2(!faq2)}}>
                            <h2 className={`text-2xl font-semibold ${faq2 ? "text-purple-600" : "text-black"} select-none`}>Is Manage Wise suitable for small businesses and larger enterprises alike?</h2>
                            {faq2 ? <RxCross2 className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600'/>
                            :

                            <PiPlusBold className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600 font-bold'/>}
                        </div>
                        <div className={`text-lg leading-tight text-gray-500 my-6 ${faq2 ? "inline-block" : "hidden"} select-none`}>Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.</div>
                    </div>

                    <div className='bg-blue-50 rounded-3xl py-5 px-10 items-center text-start mb-5'>
                        <div className='relative cursor-pointer' onClick={()=>{setFaq3(!faq3)}}>
                            <h2 className={`text-2xl font-semibold ${faq3 ? "text-purple-600" : "text-black"} select-none`}>Can I access Manage Wise from different devices and platforms?</h2>
                            {faq3 ? <RxCross2 className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600'/>
                            :

                            <PiPlusBold className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600 font-bold'/>}
                        </div>
                        <div className={`text-lg leading-tight text-gray-500 my-6 ${faq3 ? "inline-block" : "hidden"} select-none`}>Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.</div>
                    </div>

                    <div className='bg-blue-50 rounded-3xl py-5 px-10 items-center text-start mb-5'>
                        <div className='relative cursor-pointer' onClick={()=>{setFaq4(!faq4)}}>
                            <h2 className={`text-2xl font-semibold ${faq4 ? "text-purple-600" : "text-black"} select-none`}>What kind of support options do you offer to users?</h2>
                            {faq4 ? <RxCross2 className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600'/>
                            :

                            <PiPlusBold className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600 font-bold'/>}
                        </div>
                        <div className={`text-lg leading-tight text-gray-500 my-6 ${faq4 ? "inline-block" : "hidden"} select-none`}>We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.</div>
                    </div>

                    <div className='bg-blue-50 rounded-3xl py-5 px-10 items-center text-start'>
                        <div className='relative cursor-pointer' onClick={()=>{setFaq5(!faq5)}}>
                            <h2 className={`text-2xl font-semibold ${faq5 ? "text-purple-600" : "text-black"} select-none`}>How secure is the data stored within Manage Wise?</h2>
                            {faq5 ? <RxCross2 className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600'/>
                            :

                            <PiPlusBold className='absolute -right-4 top-[50%] -translate-y-[50%] text-2xl text-purple-600 font-bold'/>}
                        </div>
                        <div className={`text-lg leading-tight text-gray-500 my-6 ${faq5 ? "inline-block" : "hidden"} select-none`}>Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.</div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default FAQ
