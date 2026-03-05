import React from "react";
import chart2 from "../../Images/chart2.svg";

const TrustSpectrum = () => {
  return (
    <div className="mt-20 bg-linear-to-r from-[#08132b] via-[#030c24] to-[#08132b] w-[95vw] pb-5">

      <h1 className="text-center mt-10 text-[30px] font-bold text-amber-50">
        Trust Spectrum of BTC Interoperability
      </h1>

      <div className="flex justify-center">
        <img src={chart2} alt="chart" />
      </div>

    </div>
  );
};

export default TrustSpectrum;