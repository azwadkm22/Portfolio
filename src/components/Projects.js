// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    // Manually defined projects array
    const projects = [
        {
            title: 'boku.gg',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'Solvei',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'Thaprabo the game',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'cg_calculator',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'JobDen',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'Will - You - Go - With - Me - SDL2',
            description: 'A single-page application to showcase my skills, projects, and resume. Built with React and Tailwind CSS.',
            techStack: ['React', 'Tailwind CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
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
