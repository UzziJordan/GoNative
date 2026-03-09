import React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "What is Native?",
    answer:
      "Native is the most advanced Bitcoin protocol bringing real BTC into DeFi—securely, simply, and without compromise. We make Bitcoin interoperable without using bridges or wrapped tokens. Our mission? Make BTC the heart of DeFi while staying true to Bitcoin’s core values.",
  },
  {
    question: "How Native helps you to earn yield with a single click?",
    answer:
      "Our Bitcoin Yield Hub provides an easy to use platform where users can earn yield on their Bitcoin holdings with a single click of a button, without compromising on security and decentralization. Powered by Pass Keys and ZKLogin technology, users may stick to their Bitcoin wallet or just use a credit card and directly get exposure to BTC with yield opportunity.",
  },
  {
    question: "What is BYield?",
    answer: 
        "BYield is Native’s one-click Bitcoin Yield Hub. It’s a dashboard where you can earn yield on your BTC, without dealing with all of the DeFi complexities. Just deposit BTC (or nBTC), pick an opportunity, and earn. BYield handles the heavy lifting while you stay in control."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-20 bg-linear-to-r relative from-[#08132b] via-[#030c24] to-[#08132b] w-[95vw] pb-20 text-amber-50 rounded-4xl">


      {/* Header */}
      <div className="text-center mb-20">
        <span className="absolute px-4 py-2 left-10 top-10 rounded-full bg-[#121d3a] text-sm text-white">
          FAQ’s
        </span>

        <h2 className="text-4xl md:text-3xl font-bold mt-20">
          Frequently Asked{" "}
          <span className="text-orange-400">Questions</span>
        </h2>
      </div>

      {/* FAQ Container */}
      <div className="w-[70vw] mx-auto space-y-6">

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1a2236] rounded-2xl p-8"
          >

            {/* Question */}
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl font-bold
                ${openIndex === index
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-800"
                  }`}
              >
                {openIndex === index ? "−" : "+"}
              </div>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="text-gray-300 mt-6 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>

    </section>
  );
};

export default FAQ;