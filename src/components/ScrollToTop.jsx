import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";


export const ScrollToTop = () => {
  return (
    <div className="fixed bottom-28 right-12">
      <FaArrowAltCircleUp className=" text-[#3366CC] text-4xl animate-bounce" />
    </div>
  );
};
