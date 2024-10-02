// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 p-4 text-center text-white">
            <p>&copy; 2024 My Portfolio</p>
            <div className="mt-2">
                <a href="https://github.com/yourusername" className="mx-2">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" className="mx-2">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;
