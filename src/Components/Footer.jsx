import React from "react";

import { FaXTwitter, FaGithub, FaDiscord, FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from '../Images/logo2.svg';

export default function Footer() {
  return (
    <div className="w-full bg-slate-950 justify-center items-center align-middle mx-auto" >
        <div className="w-[70vw] mx-auto h-0.5 bg-linear-to-r from-transparent via-orange-300 to-transparent mt-10 mb-0"></div>

        <footer className=" text-white px-10 py-12">
            
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">

            {/* LEFT SIDE */}
            <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
                <img src={Logo} alt="Logo" className="w-30" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
                <SocialIcon>
                <FaXTwitter />
                </SocialIcon>

                <SocialIcon>
                <FaTelegramPlane />
                </SocialIcon>

                <SocialIcon>
                <FaGithub />
                </SocialIcon>

                <SocialIcon>
                <FaDiscord />
                </SocialIcon>

                <SocialIcon>
                <FaYoutube />
                </SocialIcon>
            </div>
            </div>

            {/* DEVELOPERS */}
            <div>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Docs (coming soon)</li>
                <li className="hover:text-white cursor-pointer">Github</li>
            </ul>
            </div>

            {/* COMPANY */}
            <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Team</li>
                <li className="hover:text-white cursor-pointer">Blogs</li>
                <li className="hover:text-white cursor-pointer">Brand Kit</li>
            </ul>
            </div>

        </div>
        </footer>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-xl hover:bg-gray-800 cursor-pointer text-lg">
      {children}
    </div>
  );
}