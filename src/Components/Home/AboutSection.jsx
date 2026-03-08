import React from "react";

const AboutSection = () => {
  return (
    <div className="mt-40 text-center text-amber-50">
      <p className="text-4xl font-bold">
        BYield:{" "}
        <span className="font-medium text-3xl text-amber-500">
          The Bitcoin Yield Hub
        </span>
      </p>

      <p className="text-lg text-[#a0a0b0] max-w-2xl mx-auto">
            BYield is Native's Bitcoin Yield Hub, offering a simple and secure way to earn yield 
            on Bitcoin without bridges, wrapping, or trusting custodians.
        </p>
    </div>
  );
};

export default AboutSection;