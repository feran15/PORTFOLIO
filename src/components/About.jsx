import React from "react";
import { ImDownload2 } from "react-icons/im";

export const About = () => {
  return (
    <section className="border border-red-500 mt-16">
      <div>
        <h1 className="inline border-b-2 border-gray-800 font-bold text-2xl mt-3 ml-5">About</h1>
        <div className="flex items-center justify-around py-10">
          <p className="w-[50%]">
            As a full-stack developer, I seamlessly connect front-end and
            back-end technologies to craft high-performance web applications. My
            expertise lies in creating engaging user interfaces, optimizing
            server-side solutions, and integrating databases. With attention to
            detail and a commitment to innovation, I deliver tailored solutions
            for unique project needs. I am open to connecting with people,
            working, and collaborating on exciting projects.
          </p>
          <span className="flex items-center space-x-2 bg-[#3366CC] text-white p-2 h-10 rounded shadow-md">
            <p>View Resume </p>
            <ImDownload2 className="animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
};
