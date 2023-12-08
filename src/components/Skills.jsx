import React from "react";
import Css from "../assets/css.png";
import GitHub from "../assets/github.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import NextJs from "../assets/nextjs.png";
import NodeJs from "../assets/node.png";
import ReactJs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

export const Skills = () => {
  return (
    <section className="border border-red-600 mt-24">
      <div className="mt-3 ml-5">
        <h1 className="font-bold text-2xl inline border-b-2 border-gray-800">
          Skills
        </h1>
        <h2 className="text-lg mt-2">Technologies I currently work with:</h2>
      </div>
      <div className="grid grid-cols-3 gap-y-6 gap-x-10 py-8 mx-16">
        <div className="skills-container">
          <img src={Html} alt="html-img" className="h-20" />
          <p className="skills-text">HTML</p>
        </div>
        <div className="skills-container">
          <img src={Css} alt="css-img" className="h-20" />
          <p className="skills-text">CSS</p>
        </div>
        <div className="skills-container">
          <img src={Javascript} alt="js-img" className="h-20" />
          <p className="skills-text">JAVASCRIPT</p>
        </div>
        <div className="skills-container">
          <img src={GitHub} alt="github-img" className="h-20" />
          <p className="skills-text">GITHUB</p>
        </div>
        <div className="skills-container">
          <img src={Tailwind} alt="tailwind-img" className="h-20" />
          <p className="skills-text">TAILWIND CSS</p>
        </div>
        <div className="skills-container">
          <img src={NodeJs} alt="nodejs-img" className="h-20" />
          <p className="skills-text">NODE JS</p>
        </div>
        <div className="skills-container">
          <img src={NextJs} alt="nextjs-img" className="h-20" />
          <p className="skills-text">NEXT JS</p>
        </div>
        <div className="skills-container">
          <img src={MongoDB} alt="mongodb-img" className="h-20" />
          <p className="skills-text">MONGODB</p>
        </div>
        <div className="skills-container">
          <img src={ReactJs} alt="reactjs-img" className="h-20 animate-spin" />
          <p className="skills-text">REACT JS</p>
        </div>
      </div>
    </section>
  );
};
