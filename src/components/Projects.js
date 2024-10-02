// src/components/Projects.js
import React from 'react';

function Projects() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-800">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Project 1</h2>
                    <p>A cool project I built using React and Node.js.</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Project 2</h2>
                    <p>An awesome mobile app built using Flutter and Firebase.</p>
                </div>
                {/* Add more projects here */}
            </div>
        </div>
    );
}

export default Projects;
