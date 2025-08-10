import React from 'react'
import { images } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col  sm:flex-row border border-gray-400'>
      <div className="w-full sm:w-1/2 items-center justify-center py-10 sm:py-0">
        <div className="text-gray-700" >
          <div className="flex items-center gap-2  " >
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
            <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className="flex items-center  gap-2">
            <p className='font-semibold text-sm  md:text-base text-gray-700'>SHOP NN</p>
            <p className='w-8 md:w-11 h-[1px] bg-gray-700'></p>
          </div>
        </div>
      </div>
      <img
        src={images.s1}
        alt="Latest Arrivals"
        className="w-full sm:1/2 object-contain"
      />
    </div>
  )
}

export default Hero
