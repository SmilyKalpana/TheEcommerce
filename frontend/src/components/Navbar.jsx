import React from 'react';
import { images } from '../assets/assets';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/collection", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ]
  return (
    <div className="flex items-center justify-between navbar">
      <img src={images.logo} className="w-30 h-30" alt="Logo" />

      <ul className="flex gap-4">
        {menuItems.map((menuItem) => (

          <NavLink
            className={({ isActive }) =>
              `rounded-md  font-semibold over:bg-amber-500 p-2 font-semibold
       ${isActive ? 'rounded-md border-gray-500 bg-amber-500' : ''}`
            }

            to={menuItem.path} active >{menuItem.label}</NavLink>
        ))}

      </ul>
    </div>
  );
};

export default Navbar;
