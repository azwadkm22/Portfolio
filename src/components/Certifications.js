// src/components/Certifications.js
import React from 'react';

function Certifications() {
    const certifications = [
        {
            title: 'React - The Complete Guide',
            provider: 'Udemy',
            date: 'June 2023',
            url: 'https://www.udemy.com/certificate/react-course' // Example URL
        },
        {
            title: 'Full-Stack Web Development with Node.js',
            provider: 'Coursera',
            date: 'April 2023',
            url: 'https://www.coursera.org/certificate/web-dev-course' // Example URL
        },
        {
            title: 'Data Science Professional Certificate',
            provider: 'IBM',
            date: 'February 2023',
            url: 'https://www.ibm.com/certificate/data-science' // Example URL
        },
        {
            title: 'Introduction to Game Development',
            provider: 'edX',
            date: 'August 2022',
            url: 'https://www.edx.org/certificate/game-development' // Example URL
        },
        {
            title: 'Android Development Masterclass',
            provider: 'Udemy',
            date: 'November 2022',
            url: 'https://www.udemy.com/certificate/android-dev-course' // Example URL
        },
        // Add more courses and certifications here
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 py-16">
            <div className="max-w-8xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-12">Certifications</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-12">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-2">{cert.title}</h2>
                                <p className="text-gray-600 mb-4">{cert.provider}</p>
                                <p className="text-gray-500">{cert.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certifications;
