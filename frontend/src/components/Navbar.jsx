import React, { useState, useEffect, useContext } from 'react';
import { images } from '../assets/assets';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Handbag, Search, UserRound, AlignJustify } from 'lucide-react'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [visible, isVisible] = useState(false)
  const {search,setSearch,setShowSearch,showSearch}=useContext(ShopContext)
  useEffect(() => {
    const isScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", isScrolled);
    return () => window.removeEventListener("scroll", isScrolled)

  }, []);
  const Navigate =useNavigate();
  const menuItems = [


    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/collection", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ]
  return (
    <div className='navbar w-full top-0 left-0 fixed md:px-[10rem] sm:px-2   z-50 bg-[ #f0ede8]'>
      <div className="flex items-center justify-between ">
        <img onClick={()=>Navigate('/')} src={images.logo} className="cursor-pointer w-20 h-20 sm:w-24 md:w-28  lg:w-32  sm:h-24  md:h-28 lg:h-32"
          alt="Logo" />
        <ul className="sm:flex gap-4 hidden">
          {menuItems.map((menuItem) => (
            <NavLink key={menuItem.path}
              className={({ isActive }) =>
                `rounded-md  hover:bg-amber-500 sm:px-3 sm:py-2 font-semibold
          ${isActive ? 'rounded-md border-gray-500 bg-amber-500' : ''}`
              }
              to={menuItem.path}  >{menuItem.label}</NavLink>
          ))}
        </ul>
        <div className='flex justify-between gap-5'>
          <Search className='w-5 h-5 cursor-pointer p sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-6 lg:h-6' onClick={()=>setShowSearch(true)} />
          <div className="group relative">
            <UserRound className='w-5 h-5 cursor-pointer sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-6 lg:h-6' />
            <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
              <div className="flex flex-col items-center gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black capitalize hover:bg-amber-500 p-2 rounded-md">My profile</p>
                <p className="cursor-pointer hover:text-black capitalize hover:bg-amber-500 p-2  rounded-md">Orders</p>
                <p className="cursor-pointer hover:text-black capitalize hover:bg-amber-500 p-2  rounded-md">Logout</p>
              </div>
            </div>
          </div>
          <div className='flex relative'>
            <Handbag className="w-5 h-5 sm:w-4 sm:h-4 md:w-6 md:h-6  lg:w-6 lg:h-6" />
            <p className='absolute leading-4  bg-red-500 right-[-10px] top-[-10px] px-1 font-semibold aspect-square rounded-full text-white   text-[8px]'>10</p>
          </div>
          <AlignJustify className=' w-5 h-5 sm:hidden cursor-pointer' onClick={() => isVisible(true)} />
        </div>
        {/* sidebar  for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full fixed ' : 'w-0 '}`}>
          <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={() => isVisible(false)}>
              <AlignJustify className='h-4 rotate-180' />
              <p>Back</p>
            </div>
            {menuItems.map((menuItem,index) => (
              <NavLink key={index} onClick={() => isVisible(false)} className="py-2 pl-6 hover:bg-amber-600 hover:text-gray-900" to={menuItem.path}>{menuItem.label}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
