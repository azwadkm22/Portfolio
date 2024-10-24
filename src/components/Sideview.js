// src/components/SideView.js
import React from 'react';
import { Link } from 'react-scroll';

function SideView() {
    return (
        <div className="fixed left-0 h-[calc(100vh-60px)] mt-16 bg-gray-800 p-4 w-48">
            {/* Adjust the margin-top (mt-16) based on the navbar's height */}
            <ul className="space-y-4">
                <li>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-500 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-500 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-500 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-500 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-500 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-white hover:text-blue-500 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideView;
