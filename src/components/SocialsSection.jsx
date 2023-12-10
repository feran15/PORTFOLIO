import React, { useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";


export const SocialsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1100, easing: 'ease-in-sine' });
  });

  return (
    <section className="mt-20" data-aos='fade-up'>
      <h2 className="text-lg ml-5 font-semibold my-2">Connect with me on:</h2>
      <div className="flex justify-center space-x-5">
        <div className="socials-card" data-aos="fade-right">
          <SiGithub className="socials-icon" />
          <p> GitHub</p>
        </div>
        <div className="socials-card" data-aos="fade-right">
          <FaXTwitter className="socials-icon"/>
          <p>Twitter</p>
        </div>
        <div className="socials-card" >
          <RiContactsLine className="socials-icon"/>
          <p>Contact</p>
        </div>
        <div className="socials-card" data-aos="fade-left">
          <MdOutlineMailOutline className="socials-icon"/>
          <p>Email</p>
        </div>
        <div className="socials-card" data-aos="fade-left">
          <BsWhatsapp className="socials-icon"/>
          <p>Whatsapp</p>
        </div>
      </div>
    </section>
  );
};
