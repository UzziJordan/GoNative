import React from "react";
import FeatureCard from "./FeatureCard";

import Oneclick from "../../Images/oneclick.png";
import custodial from "../../Images/custodial.svg";
import Sui from "../../Images/sui.svg";
import native from "../../Images/native.svg";
import zero from "../../Images/zero.svg";
import yieldImg from "../../Images/yield.svg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Oneclick,
      title: "One-Click Bitcoin Yield",
      description: "Deposit BTC and start earning instantly.",
    },
    {
      icon: custodial,
      title: "Non-Custodial",
      description: "Your Bitcoin stays under your control.",
    },
    {
      icon: Sui,
      title: "Sui Integration",
      description:
        "High-speed, low-cost transactions for maximum efficiency.",
    },
];

const features2 = [
    {
      icon: native,
      title: "Native Lightning Integration",
      description:
        "Native integrates directly with the Lightning Network.",
    },
    {
      icon: zero,
      title: "Zero Trust Architecture",
      description:
        "Powered by Native’s tech eliminating bridge risks.",
    },
    {
      icon: yieldImg,
      title: "Best Yield Solutions",
      description:
        "Aggregates the best Bitcoin Yield opportunities on Sui.",
    },
  ];

  return (
    <div>
        <div className="mt-20 ml-10 grid grid-cols-3 gap-10">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
       </div>
        <div className="mt-10 mr-10  grid grid-cols-3 gap-10">
            {features2.map((feature2, index) => (
            <FeatureCard key={index} {...feature2} />
         ))}
        </div>
    </div>
  );
};

export default FeaturesSection;