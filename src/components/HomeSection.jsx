import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HomeSection = () => {
  const Animated_Image =
    "https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0";

  return (
    <section className="mt-16">
      <div className="flex justify-evenly items-center">
      <div className="text-right">
        <p className="text-lg">Hi, I am </p>
        <h2 className="text-5xl text-[#333333] font-semibold">Favour Oshoaro</h2>
        <TypeAnimation sequence={['FullStack Developer', 1000, '', 1000]} repeat={Infinity} className="text-lg"/>
      </div>
      <div>
        <img src={Animated_Image} alt="animated-image" className="rounded-full h-96 object-contain shadow"/>
      </div>
      </div>
    </section>
  );
};
