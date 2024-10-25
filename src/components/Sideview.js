// src/components/SideView.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope, FaTrophy, FaCertificate } from 'react-icons/fa'; // Example Icons

function SideView() {
    return (
        <div className="fixed left-0 top-16 h-[calc(100vh-64px)] bg-gray-100 shadow-md p-6 w-60 space-y-6 flex flex-col justify-between">
            <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                    <FaHome className="text-gray-600" />
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Home
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaUser className="text-gray-600" />
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        About
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaBriefcase className="text-gray-600" />
                    <Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Experience
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCode className="text-gray-600" />
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Skills
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaProjectDiagram className="text-gray-600" />
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Projects
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaTrophy className="text-gray-600" />
                    <Link
                        to="achievements"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Achievements
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaCertificate className="text-gray-600" />
                    <Link
                        to="certifications"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="text-blue-500 font-bold"
                    >
                        Certifications
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <FaEnvelope className="text-gray-600" />
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
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
