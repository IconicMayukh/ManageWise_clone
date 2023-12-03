import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./styles_testimonial.css";

// import Swiper core and required modules
import SwiperCore from 'swiper';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';
import TestimonialSlide from "./TestimonialSlide";
import data from "./TestimonialContent"



function Testimonials() {
    // install Swiper modules
    SwiperCore.use([Autoplay, Navigation, Pagination])

    return (
        <div className='bg-white'>
            <div className='pt-28 text-start w-[80%] mx-auto'>
                <div className='px-3 bg-white inline-block border rounded-lg text-purple-600 text-sm font-semibold mb-1'><span className='text-lg'>🧡</span> TESTIMONIALS</div>
                <div className='text-[50px] font-semibold'>Hear from our <span className='text-orange-500'>Satisfied</span> clients</div>
                <p className='w-[50%] text-lg font-semibold text-gray-500 mt-2'>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</p>
                <div class="flex justify-center mt-5">
                </div>
            </div>

        {/* swiper --------------------------------------------------------------------------------- */}
            <div className="w-[85%] mx-auto pt-5">
                <Swiper slidesPerView={1} spaceBetween={10} 
                speed={6000}
                breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    }
                }} autoplay={{
                    delay:2,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    
                }} loop={true} loopFillGroupWithBlank={true}
                 className="mySwiper">
                    <SwiperSlide><TestimonialSlide data={data[0]}></TestimonialSlide></SwiperSlide>
                    <SwiperSlide><TestimonialSlide data={data[1]}></TestimonialSlide></SwiperSlide>
                    <SwiperSlide><TestimonialSlide data={data[2]}></TestimonialSlide></SwiperSlide>
                    <SwiperSlide><TestimonialSlide data={data[3]}></TestimonialSlide></SwiperSlide>
                    <SwiperSlide><TestimonialSlide data={data[4]}></TestimonialSlide></SwiperSlide>
                </Swiper>
            </div>


        </div>
    )
}

export default Testimonials
