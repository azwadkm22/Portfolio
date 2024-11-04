// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const navItems = ["About", "Experience", "Education", "Achievements", "Skills", "Projects", "Certifications", "Contact"];

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md py-4 z-50">
            <div className="container mx-auto flex items-center justify-start px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-300 mr-10 cursor-pointer">
                    <Link to="home" smooth={true} duration={500}>azwadkm22</Link>
                </div>

                {/* Nav Links
                <ul className="flex space-x-8 text-md ">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={`${item.toLowerCase()}`} className='hover:text-blue-500 cursor-pointer' smooth={true} duration={500}>{item}</Link>
                        </li>
                    ))}
                </ul> */}

                {/* Resume Button (on the right side) */}
                {/* <div className="ml-auto">
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Resume
                    </a>
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;
