import React from "react";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

export const SocialsSection = () => {
  return (
    <section className="border border-red-400 mt-20">
      <h2 className="text-lg ml-4">Connect with me on:</h2>
      <div className="flex justify-center space-x-5">
        <div className="socials-card">
          <SiGithub className="socials-icon" />
          <p> GitHub</p>
        </div>
        <div className="socials-card">
          <FaXTwitter className="socials-icon"/>
          <p>Twitter</p>
        </div>
        <div className="socials-card">
          <RiContactsLine className="socials-icon"/>
          <p>Contact</p>
        </div>
        <div className="socials-card">
          <MdOutlineMailOutline className="socials-icon"/>
          <p>Email</p>
        </div>
        <div className="socials-card">
          <BsWhatsapp className="socials-icon"/>
          <p>Whatsapp</p>
        </div>
      </div>
    </section>
  );
};
