import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <span className="flex space-x-5">
          <SiGithub className="socials-icon" />
          <FaXTwitter className="socials-icon" />
          <RiContactsLine className="socials-icon" />
          <MdOutlineMailOutline className="socials-icon" />
          <BsWhatsapp className="socials-icon" />
        </span>
        <div className="font-semibold">&copy; F.A 2023</div>
      </div>
    </footer>
  );
};
