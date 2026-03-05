import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-left w-[21vw] h-[25vh] border border-gray-500 rounded-2xl px-7 py-5 text-amber-50">
      <p className="flex items-center">
        <img className="size-10" src={icon} alt="" />
        <span>{title}</span>
      </p>

      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;