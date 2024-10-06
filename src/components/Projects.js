// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    // Manually defined projects array
    const projects = [
        {
            title: 'Personal Portfolio Website',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'Game Development Project',
            description: 'A 3D game developed in Unreal Engine. This project involved creating gameplay mechanics, animations, and level design.',
            techStack: ['Unreal Engine', 'C++'],
            link: 'https://github.com/your-github-username/game-project'
        },
        {
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce platform with a shopping cart, checkout process, and order management. Built using Node.js, Express, and MongoDB.',
            techStack: ['Node.js', 'Express', 'MongoDB'],
            link: 'https://github.com/your-github-username/e-commerce-platform'
        },
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
