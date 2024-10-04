// src/components/About.js
import React from 'react';
import profilePic from '../assets/portrait.jpg';  // Import your profile image

function About() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-200 text-gray-800">
            <div className="flex flex-col md:flex-row items-center md:space-x-8 text-center md:text-left">
                {/* Profile Image */}
                <div>
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-80 h-80 rounded-full object-cover shadow-lg mb-6 md:mb-0"  // Image centered on small screens, margin adjustment
                    />
                </div>
                {/* About Text */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-lg">
                        Hi, Azwad here, a CSE graduate from the University of Dhaka. Currently working as a 
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
