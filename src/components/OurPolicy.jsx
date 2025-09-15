import { PackageCheck, RefreshCcw, Headset } from 'lucide-react'
import React from 'react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <div className='flex flex-col items-center'>
          <PackageCheck className='w-8 h-8 text-amber-500 mb-2' />
        </div>
        <p className='font-semibold'>
          Easy Exchange Policy</p>
        <p className='text-gray-500'>We Offer hasle free exchange policy</p>
      </div>
      <div>
        <div className='flex flex-col items-center'>
          <RefreshCcw className='w-8 h-8 text-amber-500 mb-2' />
        </div>
        <p className='font-semibold'>
          7 Day Return Policy</p>
        <p className='text-gray-500'>Return any product within 7 days for a full refund or exchange.</p>
      </div>
      <div>
        <div className='flex flex-col items-center'>
          <Headset className='w-8 h-8 text-amber-500 mb-2' />
        </div>
        <p className='font-semibold'>
          Best Customer Support team</p>
        <p className='text-gray-500'>Our friendly support team is here to help you anytime.</p>
      </div>

    </div>
  )
}

export default OurPolicy
