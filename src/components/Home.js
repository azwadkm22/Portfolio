// src/components/Home.js
import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Import icons from react-icons
import leetcodeLogo from '../assets/leetcode.svg';

function Home() {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-500 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Hello there, nice to see you here.</h1>
                <p className="text-xl mb-6">I’m a Software Engineer with a passion for building things!</p>

                {/* Links to GitHub, LinkedIn, and Leetcode */}
                <div className="flex justify-center space-x-8">
                    <a href="https://github.com/azwadkm22" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-5xl hover:text-gray-300 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/azwadkm22/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-5xl hover:text-gray-300 transition-colors" />
                    </a>
                    <a
                        href="https://leetcode.com/u/azwadkm22/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img
                            src={leetcodeLogo}
                            alt="LeetCode"
                            className="h-12 w-12 object-contain"
                            style={{ filter: 'grayscale(100%) brightness(80%)' }}  // Apply grey filter
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
