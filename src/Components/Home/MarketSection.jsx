import React from "react";
import market from "../../Images/market.png";

const MarketSection = () => {
  return (
    <div>
        <div className="w-[77vw] mt-20">
        <img src={market} alt="market" />
        </div>
        <div className="w-[75vw] h-0.5 bg-linear-to-r from-transparent via-orange-300 to-transparent my-10"></div>
    </div>
  );
};

export default MarketSection;