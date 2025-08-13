import React from 'react'
import { images } from '../assets/assets'

const Hero = () => {

  return (
    <div className='flex flex-col  sm:flex-row  '>
      {/* Hero left side  */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 relative">

        {/* Background image with opacity overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${images.w1})`, opacity: 0.1, zIndex: 0 }}
        ></div>

        <div className="relative z-10 md-w-md text-gray-700 p-6 sm:p-8  rounded-2xl">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <p className='w-10 md:w-15 h-[1px] bg-gray-500'></p>
            <p className='font-light sm:text-xs md:text-sm uppercase text-gray-700'>OUR BEST SELLERS</p>
          </div>
          <h1 className=' sm:py-3 md:py-6 sm:text-sm md:text-6xl  lg:text-8xl leading-snug ballet-font capitalize'>Latest Arrivals</h1>
          <div className="flex items-center justify-center sm:justify-end gap-2 mt-3">
            <p className='font-light text-xs md:text-sm text-gray-700 uppercase'>SHOP NOW</p>
            <p className='w-10 md:w-15 h-[1px] bg-gray-500'></p>
          </div>
        </div>
      </div>
      {/* hero right side */}
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <img
          src={images.s1}
          alt="Latest Arrivals"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
