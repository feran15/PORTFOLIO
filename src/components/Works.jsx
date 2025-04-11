import React, { useEffect } from "react";
import Ace from '/Ace.png'
import Currency from '/Currenncy.png'
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pt-24" id="works">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1
            className="border-2 border-[#C8CACD] py-2 px-5 font-bold text-lg md:text-xl"
            data-aos="fade-up"
          >
            Works
          </h1>
          <p className="mt-2 text-base md:text-lg" data-aos="fade-up">
            These are some of my works👇🏻
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-14 gap-y-10 mx-14 md:mx-16 py-10 text-[#0C0C0C]">
          <div className="works-container " data-aos="fade-up">
            <img
              src={Ace}
              alt="foodspace-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
               ACE FASHION
              </h1>
              <p className="mb-3 px-2 text-sm md:text-base">
                A Front-end e-commerce web application offering a variety of accessories where
                users can explore different categories. Users can Add items to cart and purchase.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React js</p>
                <p className="works-pill">TailwindCSS</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
              <Link to="https://github.com/feran15/ACE-FASHION">
                <FaGithub className="text-lg" />
              </Link>
              <Link to="https://ace-fashion.vercel.app/">
                <FaLink className="text-lg" />
              </Link>
            </span>
          </div>
          <div className="works-container " data-aos="fade-up">
            <img
              src={Currency}
              alt="foodspace-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">
                CURRENCY CONVERTER
              </h1>
              <p className="mb-3 px-2 text-sm md:text-base">
               A easy developed currency coverter to be able to convert from one currency to anther
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
              <Link to="https://github.com/feran15/CURRENCY-CONVERTER">
                <FaGithub className="text-lg" />
              </Link>
              <Link to="https://currency-converter-one-livid.vercel.app/">
                <FaLink className="text-lg" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
