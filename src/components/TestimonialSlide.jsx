import React from 'react'

const TestimonialSlide = ({data}) => {
  return (
    <div className='w-full border border-gray-100 rounded-3xl p-10'>
        <div className='text-start text-gray-600 mb-6'>"{data.comment}"</div>

        <div className='grid grid-cols-4 w-full'>
            <div className='col-span-1'>
                <img src={data.img} alt={data.name} style={{"object-fit": "contain"}}/>
            </div>
            <div className='flex flex-col justify-center items-start col-span-3 pl-5'>
                <h3 className='font-semibold text-gray-800 text-start text-lg tracking-wider'>{data.name}</h3>
                <p className='text-base text-gray-600 text-start'>{data.proffession}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSlide
