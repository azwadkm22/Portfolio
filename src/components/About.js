// src/components/About.js
import React from 'react';
import profilePic from '../assets/portrait.jpg';  // Import your profile image

function About() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-800">
            <div className="flex flex-col md:flex-row items-center md:space-x-8 text-center md:text-left">
                {/* Profile Image */}
                <div>
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover shadow-lg mb-6 md:mb-0"  // Image centered on small screens, margin adjustment
                    />
                </div>
                {/* About Text */}
                <div className="max-w-4xl">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 mx-12">About Me</h1>
                    <p className="text-lg md:mx-12 mx-2 p-6 sm:p-0">
                        Hi, I am K. M. Azwad Hossain, a CSE graduate from the University of Dhaka. Currently working as a 
                        Software Engineer at Samsung Research and Development, Bangladesh. I'm a simple humanoid creature, 
                        that constantly strives to expand his horizons and sharpen his abilities, aspiring to be much
                        more. My interests include game design, web design, music composition and reinforcement learning.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
