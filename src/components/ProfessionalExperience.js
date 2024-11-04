// src/components/ProfessionalExperience.js
import React from 'react';
import ExperienceItem from './ExperienceItem';

function ProfessionalExperience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Samsung R&D Institute Bangladesh (SRBD)",
            date: "2024, February - Present",
            description: "As a Software Engineer at Samsung R&D Institute Bangladesh, I've contributed to the maintenance and enhancement of key Samsung applications, including Samsung DeX and Samsung Notes, ensuring seamless functionality and improved user experience. Alongside this, I've worked on bringing several Proof of Concepts to life, turning innovative ideas into viable solutions that push the boundaries of product capabilities."
            
        },

    ];

    return (
        <section id="professional-experience" className="py-12 bg-gray-200">
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 ">Professional Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mx-2 md:mx-24">
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProfessionalExperience;
