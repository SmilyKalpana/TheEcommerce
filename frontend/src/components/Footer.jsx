import React from 'react';
import { images } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Delivery", path: "/delivery" },
    { title: "Privacy Policy", path: "/privacy-policy" }
  ];

  return (
    <div className="py-8 bg-gray-50">
      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-8 px-6">
        
        {/* Logo + Brand Info */}
        <div className="w-64">
          <img src={images.logo2} alt="Smilies Logo" className="w-32 h-32 mb-3" />
          <p className="whitespace-normal text-justify text-gray-600 text-sm leading-relaxed">
            Smilies is a vibrant scrunchies and hair accessories brand that blends style, comfort, 
            and durability. From playful everyday looks to chic statement pieces, each accessory is 
            designed to add a touch of charm and personality to your hairstyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-lg font-bold">Quick Links</h1>
          <ul className="py-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  className="text-sm hover:text-amber-600 transition-colors"
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <p className="text-sm">📞 00974-40400002</p>
          <p className="text-sm">✉️ info@smilies.com</p>
        </div>
      </div>
<hr className='text-gray-400 my-4' />
      {/* Footer Bottom */}
      <p className="text-center text-gray-400 text-sm mt-6">
        © 2025 smilies.com — All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
