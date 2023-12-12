import React, { useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";

export const SocialsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1100, easing: 'ease-in-sine' });
  });

  return (
    <section className="mt-20 py-4" data-aos='fade-up'>
      <h2 className="text-base md:text-lg ml-16 md:ml-20 font-semibold">Connect with me on:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-20 gap-y-2 md:gap-y-0 px-16 md:px-20">
        <a href='https://github.com/favour5678' target="_blank" className="socials-card" data-aos="fade-right">
          <SiGithub className="socials-icon" />
          <p>GitHub</p>
        </a>
        <a href='https://x.com/favour_ayomikun?t=UFbQ8TjcitAB-1EcnIzN5g&s=09' target="_blank" className="socials-card" data-aos="fade-right">
          <FaXTwitter className="socials-icon"/>
          <p>Twitter</p>
        </a>
        <a href='mailto:oshoarofavour@gmail.com' target="_blank" className="socials-card" data-aos="zoom-in">
          <MdOutlineMailOutline className="socials-icon"/>
          <p>Email</p>
        </a>
        <a href='https://wa.me/2348080994170' target="_blank" className="socials-card" data-aos="zoom-in">
          <BsWhatsapp className="socials-icon"/>
          <p>Whatsapp</p>
        </a>
      </div>
    </section>
  );
};
