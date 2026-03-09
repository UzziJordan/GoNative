import React from 'react'
import p1 from "../../Images/p1.svg";
import p2 from "../../Images/p2.svg";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.svg";
import p5 from "../../Images/p5.svg";

const Ecosystem = () => {
  return (
    <div>
        <section className="relative mt-0 text-center text-white overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0"
                style={{
                background:
                    "radial-gradient(circle at top, rgba(255,170,90,0.5), transparent 30%)",
                }}
            ></div>

            {/* Content */}
            <div className="relative py-10 z-10">
                <h2 className="text-3xl pb-20 font-bold">
                Ecosystem & Partners
                </h2>
            </div>

        </section>
            <div className='flex mt-0'>
                <img className='size-60' src={p1} alt="Partner 1" />
                <img className='size-60' src={p2} alt="Partner 2" />
                <img className='size-0' src={p3} alt="Partner 3" />
                <img className='size-60' src={p4} alt="Partner 4" />
                <img className='size-60' src={p5} alt="Partner 5" />
            </div>
    </div>
  )
}

export default Ecosystem