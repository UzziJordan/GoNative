import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logo2.svg';

const Navbar = () => {
  return (
    <nav className='mt-2 px-5 bg-transparent backdrop-blur-lg border-[0.5px] h-15 border-gray-500 rounded-2xl text-amber-50 flex justify-between gap-16 fixed w-[75vw] left-1/2 translate-x-[-50%] items-center'>
        <div className='w-30'>
            <NavLink to="/" className="hover:underline"> 
                <img src={Logo} alt="Logo" />
            </NavLink>
        </div>
        <div className='flex gap-5'>
            <a href="https://x.com/Uzzijordan" target='_blank'>Community</a>
            <a href="https://github.com/UzziJordan" target='_blank'>Developers</a>
            <NavLink to="/FAQ" className="hover:underline">Resources</NavLink>
            <NavLink to="/Believers" className="hover:underline">Believers</NavLink>
            <NavLink to="/Blogs" className="hover:underline">Blogs</NavLink>
            <NavLink to="/Team" className="hover:underline">Team</NavLink>
        </div>

        <a href="https://byield.gonative.cc/" target='_blank'>
            <button className='bg-amber-600 h-9 w-25 rounded-l'>Try Testnet› </button>
        </a>


    </nav>
  )
}

export default Navbar