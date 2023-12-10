import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export const ScrollToTop = () => {
  return (
    <div className="mt-16 fixed bottom-28 right-5">
      <Link smooth to="#top">
        <FaArrowAltCircleUp className=" text-[#3366CC] text-4xl animate-bounce" />
      </Link>
    </div>
  );
};
