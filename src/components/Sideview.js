import React, { useState, useEffect } from 'react';

function SideView() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const sectionTitles = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    return (
        <nav className="fixed top-1/4 left-0 bg-white/80 backdrop-blur-md shadow-lg z-50 w-48 py-4">
            <ul className="space-y-6 text-lg">
                {sectionTitles.map((title, index) => (
                    <li
                        key={index}
                        className={`pl-4 ${activeSection === title.toLowerCase() ? 'text-blue-500 font-bold' : 'text-gray-700'}`}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SideView;
