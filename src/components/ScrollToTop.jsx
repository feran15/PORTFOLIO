import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";


export const ScrollToTop = () => {
  return (
    <div className="mt-16 fixed bottom-28 right-5">
      <FaArrowAltCircleUp className=" text-[#3366CC] text-4xl animate-bounce" />
    </div>
  );
};
