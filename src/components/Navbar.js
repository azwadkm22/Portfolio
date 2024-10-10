// src/components/Navbar.js
import React from 'react';

function Navbar() {
    const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md py-4 z-50">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-300">
                    <a href="#home">azwadkm22</a>
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-blue-500 transition duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/path/to/your_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-gray-700 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
