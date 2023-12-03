import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-10 py-4 border-b border-gray-200' style={{"background-color": "rgb(253, 242, 236)"}}>
      <div>
        <a href="/"><img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" height={35} width={175} alt="ManageWise" /></a>
      </div>
      <div className='flex justify-between gap-12 items-center font-semibold'>
        <ul className='flex gap-16 text-[17px]  text-gray-900 '>
            <li className='cursor-pointer hover:text-blue-400 transition duration-150 ease-in-out'>Features</li>
            <li className='cursor-pointer hover:text-blue-400 transition duration-150 ease-in-out'>FAQ</li>
            <li className='cursor-pointer hover:text-blue-400 transition duration-150 ease-in-out'>Pricing</li>
            <li className='cursor-pointer hover:text-blue-400 transition duration-150 ease-in-out'>Testimonials</li>
        </ul>
        <div>
        <button class="flex mx-auto bg-white border border-gray-200 rounded-md py-2 px-5 focus:outline-none hover:border-gray-500 text-lg">Buy Template</button>
        </div>
      </div>
    </div>
  )
}

export default Header
