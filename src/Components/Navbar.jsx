import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logo2.svg';

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-amber-50 flex justify-between gap-16 fixed w-[70vw] left-1/2 translate-x-[-50%] items-center'>
        <div className='w-30'>
            <NavLink to="/" className="hover:underline"> 
                <img src={Logo} alt="Logo" />
            </NavLink>
        </div>
        <div className='flex gap-10'>
            <a href="https://x.com/Uzzijordan" target='_blank'>Community</a>
            <a href="https://github.com/UzziJordan" target='_blank'>Developers</a>
            <NavLink to="/FAQ" className="hover:underline">Resources</NavLink>
            <NavLink to="/Believers" className="hover:underline">Believers</NavLink>
            <NavLink to="/Blogs" className="hover:underline">Blogs</NavLink>
            <NavLink to="/Team" className="hover:underline">Team</NavLink>
        </div>

        <a href="">
            <button>Try Testnet› </button>
        </a>


    </nav>
  )
}

export default Navbar