// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    // Manually defined projects array
    const projects = [
        {
            title: 'boku.gg',
            description: '',
            techStack: ['Flutter SDK', 'Dart'],
            link: 'https://github.com/azwadkm22/boku.gg'
        },
        {
            title: 'Solvei',
            description: '',
            techStack: ['React', 'Express', 'HTML' , 'CSS', 'JavaScript'],
            link: 'https://github.com/your-github-username/portfolio-website'
        },
        {
            title: 'Thaprabo the game',
            description: 'A platformer game I made for my friend Nashmin\'s birthday in 2021 using Godot Engine.',
            techStack: ['Godot Engine', 'GDScript'],
            link: 'https://github.com/azwadkm22/Thaprabo-The-Game'
        },
        {
            title: 'cg_calculator',
            description: '',
            techStack: ['Flutter SDK', 'Dart'],
            link: 'https://github.com/azwadkm22/cg_calculator'
        },
        {
            title: 'Flappy Borb',
            description: 'Flappy Borb is a Flappy Bird Clone made in Unity.',
            techStack: ['Unity', 'C#'],
            link: 'https://github.com/azwadkm22/Flappy-Borb'
        },

        
        {
            title: 'JobDen',
            description: '',
            techStack: ['Flutter SDK', 'Dart'],
            link: 'https://github.com/azwadkm22/JobDen'
        },
        {
            title: 'Will - You - Go - With - Me - SDL2',
            description: 'Will You Go With Me is a simple Platformer game developed using SDL2. It has custom sounds and multiple levels. A fairly early level project. Youtube showcase: https://www.youtube.com/watch?v=NAlCNrqi4nU',
            techStack: ['C++', 'SDL2'],
            link: 'https://github.com/azwadkm22/Will-You-Go-With-Me-SDL2'
        },
        // Add more projects as needed
    ];

    return (
        <div className="bg-gray-100 px-12 py-24">
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
