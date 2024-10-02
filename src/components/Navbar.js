// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 z-10">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
