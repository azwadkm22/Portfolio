// src/components/ProjectCard.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ title, description, techStack, link }) {
    return (
        <div className="bg-slate-200 border border-slate-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-5">
            <div className="flex flex-col h-full">
                {/* Project Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {title}
                </h2>

                {/* Project Description */}
                <p className="text-gray-600 mb-4">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* GitHub Link */}
                <div className="mt-auto">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 font-medium flex items-center gap-2 hover:underline"
                    >
                        <FaGithub className="text-lg" /> View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
