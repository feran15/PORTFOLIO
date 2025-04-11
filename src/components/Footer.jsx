import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <span className="flex space-x-8 md:space-x-6">
          <a href="https://github.com/feran15" target="_blank">
            <SiGithub className="socials-icon" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">
            <MdOutlineMailOutline className="socials-icon" />
          </a>
          <a href="https://www.linkedin.com/in/paul-abodunde-3a27a52b5/" target="_blank">
            <FiLinkedin className="socials-icon" />
          </a>
        </span>
        <div className="font-semibold text-sm md:text-base">&copy; PAUL DEV 2025</div>
      </div>
    </footer>
  );
};
