import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <span className="flex space-x-8 md:space-x-6">
          <a href="https://github.com/favourAyomikun" target="_blank">
            <SiGithub className="socials-icon" />
          </a>
          <a href="href='https://x.com/favour_ayomikun?t=UFbQ8TjcitAB-1EcnIzN5g&s=09'">
            <FaXTwitter className="socials-icon" />
          </a>
          <a href="href='mailto:oshoarofavour@gmail.com'" target="_blank">
            <MdOutlineMailOutline className="socials-icon" />
          </a>
          <a href="https://www.linkedin.com/in/favour-oshoaro?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE3HxiV4WQ2O8g%2BiVin7OLA%3D%3D" target="_blank">
            <FiLinkedin className="socials-icon" />
          </a>
        </span>
        <div className="font-semibold text-sm md:text-base">&copy; F.A 2023</div>
      </div>
    </footer>
  );
};
