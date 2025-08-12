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
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
            <p className='font-semibold sm:text-xs md:text-sm uppercase'>OUR BEST SELLERS</p>
          </div>
          <h1 className='text-2xl sm:py-3 md:text-4xl lg:text-6xl leading-snug ballet-font'>Latest Arrivals</h1>
          <div className="flex items-center justify-center sm:justify-end gap-2 mt-3">
            <p className='font-semibold text-xs md:text-base text-gray-700'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-gray-700'></p>
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

