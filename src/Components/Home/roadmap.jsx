import React from "react";

const roadmap = [
  {
    title: "Native Alpha",
    date: "April, 25",
    items: [
      "nBTC smart contracts & UI for minting",
      "Bitcoin proving + verification system",
      "Proving Bitcoin testnet & mainnet on Sui",
      "Select DeFi partner integrations for nBTC",
      "Community activation & Marketing",
    ],
  },
  {
    title: "Native Beta",
    date: "Summer, 2025",
    items: [
      "IKA testnet integration",
      "Enable withdrawals",
      "Bridge transactions",
      "Co-marketing with partners",
      "Testnet Campaign & User activities",
      "BTCFi Beelievers NFT Launch",
    ],
  },
  {
    title: "Native Mainnet",
    date: "End of Q3, 2025",
    items: [
      "Bitcoin Yield Hub",
      "More Defi & Social Apps integrations",
      "Liquidity mining",
      "Co-marketing & PR",
    ],
  },
  {
    title: "Expansion & TGE",
    date: "Q4 25 - Q1 26",
    items: [
      'Bitcoin "Single-click" integration',
      "TGE",
      "Governance module",
      "BTC Orchestration",
      "IBC Integration",
      "Dogecoin & Litecoin integration",
      "PR & Marketing campaigns",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className=" text-white py-20 px-6">

      {/* Title */}
      <div className="text-center mb-24">
        <span className="px-5 py-2 text-sm rounded-full bg-[#0b1634] text-gray-300">
          Our Roadmap
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6">
          The <span className="text-orange-400">Road</span> Ahead
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-700"></div>

        {roadmap.map((step, index) => (
          <div key={index} className="relative mb-24">

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full border-4 border-[#020B1F]"></div>

            <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-12">

              {/* Left Side */}
              <div className="md:text-right md:pr-12">
                <h3 className="text-2xl text-gray-300 font-semibold">
                  {step.title}
                </h3>

                <p className="text-gray-400">{step.date}</p>
              </div>

              {/* Right Side */}
              <div className="mt-6 md:mt-0 md:pl-12 text-gray-300">
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Roadmap;