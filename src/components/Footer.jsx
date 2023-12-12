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
        <span className="flex space-x-8 md:space-x-6">
          <a href="https://github.com/favour5678" target="_blank">
            <SiGithub className="socials-icon" />
          </a>
          <a href="href='https://x.com/favour_ayomikun?t=UFbQ8TjcitAB-1EcnIzN5g&s=09'">
            <FaXTwitter className="socials-icon" />
          </a>
          <a href="href='mailto:oshoarofavour@gmail.com'" target="_blank">
            <MdOutlineMailOutline className="socials-icon" />
          </a>
          <a href="https://wa.me/2348080994170" target="_blank">
            <BsWhatsapp className="socials-icon" />
          </a>
        </span>
        <div className="font-semibold text-sm md:text-base">&copy; F.A 2023</div>
      </div>
    </footer>
  );
};
