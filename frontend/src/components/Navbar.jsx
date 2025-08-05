import React from 'react'
import { images } from '../assets/assets'
import "./Navbar.css"
// import { li  } from 'react-router'
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between navbar">
        <img src={images.logo}  className="w-20 h-20" alt="" />

        <ul className='flex flex-row gap-5'>
          <li className='basis-64'>Home</li >
          <li className=''>About</li >
          <li className=''>Cart</li >
          <li className=''>Order</li >
        </ul>
        </div>
      </div>
  )
}

export default Navbar
