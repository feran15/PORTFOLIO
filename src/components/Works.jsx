import React from "react";
import Foodspace from "../assets/foodspace.jpeg";
import Fan from "../assets/fan.png";
import Blogapp from "../assets/blogapp.png";
import Quizapp from "../assets/quizapp.png";
import Weatherapp from "../assets/weatherapp.png";
import Musicapp from "../assets/musicapp.png";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

export const Works = () => {
  return (
    <section className="mt-24">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="border-2 border-gray-800 py-2 px-5 font-bold text-xl">
            Works
          </h1>
          <p className="mt-2 text-lg">These are some of my works👇🏻</p>
        </div>
        <div className="grid grid-cols-3 gap-x-14 gap-y-10 mx-16 py-10">
          <div className="works-container">
            <img
              src={Foodspace}
              alt="foodspace-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <h1 className="text-lg font-semibold mb-1 px-2">FOOD-SPACE</h1>
            <p className="text-gray-800 mb-3 px-2">
              An e-commerce website offering a variety of foods, drinks, and
              snacks, where users can explore different categories, each
              displaying products with their corresponding prices. Users have
              the flexibility to easily add items from any category to their
              shopping cart.
            </p>
            <span className="flex flex-wrap gap-2 px-2">
              <p className="works-pill">React.Js</p>
              <p className="works-pill">TailwindCSS</p>
            </span>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <FaGithub className="text-lg" />
              <FaLink className="text-lg" />
            </span>
          </div>
          <div className="works-container">
            <img
              src={Musicapp}
              alt="musicapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <h1 className="text-lg font-semibold mb-1 px-2">MUSIC APP</h1>
            <p className="text-gray-800 mb-3 px-2">
              This music web application allows users to play default songs, add
              them to playlists, and discover the artists behind each track.
              Additionally, users can search for any song among the default
              tunes available on the app.
            </p>
            <span className="flex flex-wrap gap-2 px-2">
              <p className="works-pill">React.Js</p>
              <p className="works-pill">TailwindCSS</p>
              <p className="works-pill">React-H5-Audio-Player</p>
              <p className="works-pill">Robo Music Api</p>
            </span>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <FaGithub className="text-lg" />
              <FaLink className="text-lg" />
            </span>
          </div>
          <div className="works-container">
            <img
              src={Fan}
              alt="fan-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <h1 className="text-lg font-semibold mb-1 px-2">FAN</h1>
            <p className="text-gray-800 mb-3 px-2">
              This is a fan designed with the ability to rotate.
            </p>
            <span className="flex flex-wrap gap-2 px-2">
              <p className="works-pill">Html</p>
              <p className="works-pill">Css</p>
              <p className="works-pill">Animation</p>
            </span>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <FaGithub className="text-lg" />
              <FaLink className="text-lg" />
            </span>
          </div>
          <div className="works-container">
            <img
              src={Blogapp}
              alt="blogapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <h1 className="text-lg font-semibold mb-1 px-2">BLOG APP</h1>
            <p className="text-gray-800 mb-3 px-2">
              This blog web application enables users to create accounts, log
              in, generate and publish content, as well as edit and view default
              blog news.
            </p>
            <span className="flex flex-wrap gap-2 px-2">
              <p className="works-pill">React.Js</p>
              <p className="works-pill">TailwindCSS</p>
              <p className="works-pill">Express.JS</p>
              <p className="works-pill">Mongo DB</p>
            </span>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <FaGithub className="text-lg" />
              <FaLink className="text-lg" />
            </span>
          </div>
          <div className="works-container">
            <img
              src={Quizapp}
              alt="quizapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <h1 className="text-lg font-semibold mb-1 px-2">QUIZ APP</h1>
            <p className="text-gray-800 mb-3 px-2">
              A quiz web application designed to challenge users with
              thought-provoking questions. Users can test their knowledge,
              answer questions, and receive a grade upon completing the quiz.
            </p>
            <span className="flex flex-wrap gap-2 px-2">
              <p className="works-pill">React.Js</p>
              <p className="works-pill">TailwindCSS</p>
            </span>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <FaGithub className="text-lg" />
              <FaLink className="text-lg" />
            </span>
          </div>
          <div className="works-container">
            <img
              src={Weatherapp}
              alt="weatherapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <h1 className="text-lg font-semibold mb-1 px-2">WEATHER APP</h1>
            <p className="text-gray-800 mb-3 px-2">
              This is a web app that allows users to check the current weather
              conditions of a city or state.
            </p>
            <span className="flex flex-wrap gap-2 px-2">
              <p className="works-pill">React.Js</p>
              <p className="works-pill">TailwindCSS</p>
              <p className="works-pill">AccuWeather Api</p>
            </span>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <FaGithub className="text-lg" />
              <FaLink className="text-lg" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
