import React from "react";
import Icon from "../../Images/nativelogo.png";
import ima from "../../Images/download.png";

const HeroSection = () => {
  return (
    <div className="mt-45 flex flex-col items-center text-amber-50">

      <p className="flex items-center border-[0.5px] h-15 w-70 border-gray-500 rounded-2xl">
        <img src={Icon} alt="Native Logo" className="size-10" />
        <span className="text-2xl">The Bitcoin Yield Hub</span>
      </p>

      <div className="mt-15 text-center font-bold">
        <h1 className="text-2xl lg:text-4xl">
          Earn Bitcoin Yield with a{" "}
          <button className="bg-amber-600 border border-gray-500 rounded-2xl h-10 w-30 text-xl lg:h-15 lg:w-50 lg:text-3xl">
            Single Click
          </button>
        </h1>
        <h2 className="text-lg lg:hidden">
          No Bridging. No Hassle. Just Yield.
        </h2>
      </div>

      <p className="mt-10 text-lg">
        Secure way to put your Bitcoin to work.
      </p>

      <img src={ima} alt="Download" />

    </div>
  );
};

export default HeroSection;