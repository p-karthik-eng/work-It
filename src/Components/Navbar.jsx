import React, { useState } from 'react';
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
import Locus from '../assets/locusw.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-gradient-to-r from-black to-blue-600 px-6 md:px-16 py-3 shadow-md w-full ">
            <div className="flex items-center justify-between">
                
                <img src="locus" alt="Locus" className="h-12 cursor-pointer" />

                <ul className="hidden md:flex gap-16">
                <li ><a href="/"  className="text-white cursor-pointer hover:underline font-josefin text-[22px]">Home</a></li>
                    <li ><a href="#about"  className="text-white cursor-pointer hover:underline font-josefin text-[22px]">About</a></li>
                    <li ><a href="#features" className="text-white cursor-pointer hover:underline font-josefin text-[22px]">Features</a></li>
                    <li ><a href="#contact" className="text-white cursor-pointer hover:underline font-josefin text-[22px]">Contact us</a></li>

                </ul>

                <div className="hidden md:flex bg-white rounded-[32px] px-6 py-2 flex-row gap-2 cursor-pointer">
                    <MdOutlineFileDownload size={23} className='text-blue-600' />
                    <div className="font-semibold text-blue-600 font-josefin">Download</div>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <MdClose size={30} color="white" /> : <MdMenu size={30} color="white" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gradient-to-r from-black to-blue-600 text-white font-josefin py-4 gap-4">
                    <a href="/" className="text-[20px] hover:underline">Home</a>
                    <a href="#about" className="text-[20px] hover:underline">About</a>
                    <a href="#features" className="text-[20px] hover:underline">Features</a>
                    <a href="#contact" className="text-[20px] hover:underline">Contact us</a>

                    <div className="bg-white rounded-[32px] px-6 py-2 flex flex-row gap-2 cursor-pointer">
                        <MdOutlineFileDownload size={23} className='text-blue-600' />
                        <div className="font-semibold text-blue-600 font-josefin">Download</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
