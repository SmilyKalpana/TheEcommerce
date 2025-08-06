import React, { useState } from 'react';
import { images } from '../assets/assets';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Handbag, Search, UserRound, AlignJustify } from 'lucide-react'

const Navbar = () => {
  const [visible, isVisible] = useState(false)
  const menuItems = [


    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/collection", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ]
  return (
    <div className="flex items-center justify-between navbar">
      <img src={images.logo} className="w-28 h-28" alt="Logo" />
      <ul className="sm:flex gap-4 hidden">
        {menuItems.map((menuItem) => (

          <NavLink key={menuItem.path}
            className={({ isActive }) =>
              `rounded-md  hover:bg-amber-500 p-2 sm:p-1 font-semibold
       ${isActive ? 'rounded-md border-gray-500 bg-amber-500' : ''}`
            }

            to={menuItem.path}  >{menuItem.label}</NavLink>
        ))}
      </ul>
      <div className='flex justify-between gap-5'>
        <Search className='cursor-pointer' />
        <div className="group relative">
          <UserRound className='cursor-pointer' />
          <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
            <div className=" flex flex-col items-center gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black capitalize hover:bg-amber-500 p-2 rounded-md">My profile</p>
              <p className="cursor-pointer hover:text-black capitalize hover:bg-amber-500 p-2  rounded-md">Orders</p>
              <p className="cursor-pointer hover:text-black capitalize hover:bg-amber-500 p-2  rounded-md">Logout</p>
            </div>
          </div>
        </div>
        <div className='flex relative'>
          <Handbag className='' />
          <p className='absolute leading-4  bg-red-500 right-[-10px] top-[-10px] px-1 font-semibold aspect-square rounded-full text-white   text-[8px]'>10</p>
        </div>
        <AlignJustify className='sm-hidden cursor-pointer' onClick={() => isVisible(true)} />
      </div>
      {/* sidebar  for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0 '}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>isVisible(false)} className="flex items-center gap-4 p-3">
            <AlignJustify className='h-4 rotate-180' />
            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
