import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { TiTimesOutline } from "react-icons/ti";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-around h-20 w-full">
      {/* Desktop Section */}
      <div>
        <Link smooth to={"#home"}>
          <img src={Logo} alt="logo" className="h-8 md:h-10 object-contain" />
        </Link>
      </div>
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to={"#skills"}>
            Skills
          </Link>
        </li>
        <li>
          <Link smooth to={"#works"}>
            Works
          </Link>
        </li>
        <li>
          <Link smooth to={"#about"}>
            About
          </Link>
        </li>
        <li>
          <Link smooth to={"#contact"}>
            Contact me 🤙
          </Link>
        </li>
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
          nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        } transition opacity-90 transform duration-700 absolute top-0 left-0 w-full h-screen bg-[#4682B4] flex flex-col items-center justify-center space-y-10 text-lg sm:text-xl text-white`}
      >
          <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to={"#skills"}>
            Skills
          </Link>
        </li>
        <li>
          <Link smooth to={"#works"}>
            Works
          </Link>
        </li>
        <li>
          <Link smooth to={"#about"}>
            About
          </Link>
        </li>
        <li>
          <Link smooth to={"#contact"}>
            Contact me 🤙
          </Link>
        </li>
      </ul>
    </nav>
  );
};
