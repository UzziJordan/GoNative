import React from "react";
import wallet from "../../Images/wallet.png";
import vault from "../../Images/vault.png";
import earn from "../../Images/earn.png";

const HowItWorks = () => {
  const steps = [
    { img: wallet, text: "1. Connect to your Wallet" },
    { img: vault, text: "2. Choose your preferred vault" },
    { img: earn, text: "3. Earn yield on your Bitcoin" },
  ];

  return (
    <div className="bg-linear-to-r from-[#08132b] via-[#030c24] text-amber-50 to-[#08132b] w-[95vw] text-center pb-20">

      <h1 className="text-3xl mt-10 text-amber-50">
        How Bitcoin Yield Hub works
      </h1>
        <p className='mt-5 w-[45vw] mr-auto ml-auto'>Native is a next-generation interoperability solution designed to overcome Bitcoin’s limitations and establish Bitcoin as a core asset in DeFi.</p>

        <div className='border-[0.5px] border-gray-500 rounded-xl w-50 ml-auto mr-auto mt-15 mb-15'>
            <p className='text-2xl'>3 step process</p>
        </div>

      <div className="flex justify-center gap-10 mt-15">
        {steps.map((step, index) => (
          <div
            key={index}
            className="h-70 w-63 border border-gray-500 rounded-xl"
          >
            <img className="w-60 h-35 p-2" src={step.img} alt="" />
            <p className='-ml-0.5 text-left pt-5 text-amber-50'>| <span className="pl-3">{step.text}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;