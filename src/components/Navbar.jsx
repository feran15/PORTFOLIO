import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { TiTimesOutline } from "react-icons/ti";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-around h-20 w-full">
      {/* Desktop Section */}
      <div>
        <img src={Logo} alt="logo" className="h-24 md:h-28 object-contain" />
      </div>
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li>Home</li>
        <li>Works</li>
        <li>Skills</li>
        <li>About</li>
        <li>Contact me 🤙</li>
      </ul>

      {/* Mobile Section */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? (
          <FaBarsStaggered className="text-[22px]" />
        ) : (
          <TiTimesOutline className="text-[24px]" />
        )}
      </div>
      <ul
        className={`${
          nav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } transition opacity-90 transform duration-700 absolute top-0 left-0 w-full h-screen bg-[#4682B4] flex flex-col items-center justify-center space-y-10 text-lg sm:text-xl text-white`}
      >
        <li>Home</li>
        <li>Works</li>
        <li>Skills</li>
        <li>About</li>
        <li>Contact me 🤙</li>
      </ul>
    </nav>
  );
};
