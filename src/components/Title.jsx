import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className='inline-flex gap-2 items-center mb-3'>
            <p className="uppercase text-xl sm:text-xl md:text-2xl lg:text-3xl text-amber-600 ">{text1}
                <span className="text-gray-400 pl-2 font-medium ">
                    {text2}
                </span>
            </p>
            <p className='w-10 sm:w-20 h-[1px] sm:h-[1.5px] bg-gray-500' ></p>
        </div>
    )
}

export default Title
