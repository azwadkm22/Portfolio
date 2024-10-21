// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    // Manually defined projects array
    const projects = [
        {
            title: 'boku.gg',
            description: 'Boku.gg is a feature-rich anime streaming app that offers users the ability to explore and enjoy a wide range of anime. Users can browse and search for their favorite shows by title or genre, stream episodes seamlessly, and maintain personalized lists of their favorite anime series. Built using Flutter with Dart, the app provides a smooth, responsive, and intuitive experience across multiple devices.',
            techStack: ['Flutter SDK', 'Dart'],
            link: 'https://github.com/azwadkm22/boku.gg'
        },
        {
            title: 'Solvei',
            description: 'Solvei is a platform dedicated to helping CSEDU students by providing a searchable archive of past exam questions. Users can search for questions by year, course code, or instructor, making it easier to find relevant materials for their studies. Additionally, students can contribute by posting answers or leaving comments on specific questions. The backend is hosted on Render, while the frontend is deployed on Vercel. The project was developed using React.js for the frontend, Express.js for the backend, and JavaScript as the primary programming language. The design was implemented using basic CSS as a personal challenge.',
            techStack: ['React', 'Express', 'HTML' , 'CSS', 'JavaScript'],
            link: 'https://github.com/azwadkm22/Solvei'
        },
        {
            title: 'Thaprabo the game',
            description: 'Thaprabo the Game is a 2D platformer I created as a surprise for a friend\'s birthday in 2021, using the Godot Engine for its simplicity and accessibility.The game features multiple levels, a variety of enemies, and mechanics inspired by Hollow Knight, blending challenge with engaging gameplay.This project gave me the opportunity to explore Godot\'s powerful scripting language (GDScript), hone my level design skills, and refine my understanding of game mechanics and interactive storytelling.',
            techStack: ['Godot Engine', 'GDScript'],
            link: 'https://github.com/azwadkm22/Thaprabo-The-Game'
        },
        {
            title: 'cg_calculator',
            description: 'cg_calculator is a simple but handy app that I created for my personal use to calculate the CGPA after I input the individual weights and CG of each course in a semester.',
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
        <div className="bg-gray-200 px-12 py-24">
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
