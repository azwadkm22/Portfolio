// src/components/SideView.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope, FaTrophy, FaCertificate, FaGraduationCap } from 'react-icons/fa'; // Added FaGraduationCap

function SideView() {
    return (
        <div className="fixed left-0 top-16 h-[calc(100vh-64px)] bg-gray-100 shadow-md p-6 w-60 space-y-6 flex flex-col justify-between">
            <ul className="space-y-4">
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaHome className="text-gray-600" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaUser className="text-gray-600" />
                        <span>About</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaBriefcase className="text-gray-600" />
                        <span>Experience</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaGraduationCap className="text-gray-600" />
                        <span>Education</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="achievements"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaTrophy className="text-gray-600" />
                        <span>Achievements</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaCode className="text-gray-600" />
                        <span>Skills</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaProjectDiagram className="text-gray-600" />
                        <span>Projects</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="certifications"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaCertificate className="text-gray-600" />
                        <span>Certifications</span>
                    </Link>
                </li>
                <li className="relative flex items-center space-x-2 py-5">
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="flex items-center w-full space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 cursor-pointer"
                        activeClass="active-link"
                    >
                        <FaEnvelope className="text-gray-600" />
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideView;
