import React from "react";

import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import FeaturesSection from "../Components/Home/FeaturesSection";
import MarketSection from "../Components/Home/MarketSection";
import HowItWorks from "../Components/Home/HowItWorks";
import NBTCSection from "../Components/Home/NBTCSection";
import TrustSpectrum from "../Components/Home/TrustSpectrum";

const Home = () => {
  return (
    <div className="flex flex-col items-center">

      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MarketSection />
      <HowItWorks />
      <NBTCSection />
      <TrustSpectrum />

    </div>
  );
};

export default Home;