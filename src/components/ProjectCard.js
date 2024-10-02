// src/components/ProjectCard.js
import React from 'react';

function ProjectCard({ title, description, link }) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <a href={link} className="text-blue-500 mt-4 inline-block">View Project</a>
        </div>
    );
}

export default ProjectCard;
