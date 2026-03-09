import React from "react";

const BitcoinHero = () => {
return (
    <div className="w-[80vw] min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">

        {/* HERO SECTION */}
        <div className="bg-[#e7c79f] text-center py-10 pb-0 px-6 relative h-[35vh]">
          <p className="text-lg text-black mb-0 pb-0">
            Make your
          </p>

          <h1 className="text-5xl md:text-5xl font-bold text-black mb-10 p-0">
            Bitcoin work for you
          </h1>

          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-black text-white px-8 py-2 rounded-xl font-semibold hover:opacity-90 transition">
              Contact our Team
            </button>

            <button className="border border-orange-400 text-black px-8 py-2 rounded-xl font-semibold hover:bg-orange-100 transition">
              Read Docs (Soon)
            </button>
          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className="bg-orange-500 px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/90 text-lg">
              to get latest news about Native
            </p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-6 py-4 rounded-xl w-full md:w-80 outline-none bg-orange-400 placeholder-white text-white"
            />

            <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90">
              Subscribe
            </button>
          </div>

        </div>

      </div>
      
      
    </div>
  );
}

export default BitcoinHero;