// src/components/ProfessionalExperience.js
import React from 'react';
import ExperienceCard from './ExperienceCard';

function ProfessionalExperience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Tech Solutions Inc.",
            date: "2022 - Present",
            description: "Worked on developing scalable web applications and improving system performance. Implemented several key features in React and Node.js that improved efficiency by 15%.",
        },
        {
            title: "Junior Developer",
            company: "Web Dev Co.",
            date: "2020 - 2022",
            description: "Collaborated on frontend development for client projects using React and Tailwind CSS. Assisted in designing RESTful APIs and debugging issues.",
        },
        {
            title: "Intern",
            company: "Startup XYZ",
            date: "Summer 2019",
            description: "Supported the team with data analytics tasks and performed testing on web applications. Gained hands-on experience with JavaScript and SQL.",
        },
        // Add more experiences as needed
    ];

    return (
        <section id="professional-experience" className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Professional Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
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
