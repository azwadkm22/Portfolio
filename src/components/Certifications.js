// src/components/Certifications.js
import React from 'react';

function Certifications() {
    const certifications = [
        {
            title: 'IBM Data Science Professional Certificate',
            provider: 'IBM',
            date: 'March 2024',
            url: 'https://coursera.org/share/83e19f6a4d3a1ddbb4f903f523674b5e' // Example URL
        },
        {
            title: 'Principles of UX/UI Design',
            provider: 'Meta',
            date: 'March 2023',
            url: 'https://coursera.org/share/a1d08ab18090f986ac9aa7044d5a4b27' // Example URL
        },
        {
            title: 'Fundamentals of Reinforcement Learning',
            provider: 'University of Alberta',
            date: 'February 2023',
            url: 'https://coursera.org/share/a47ef36a9bf2faad71861bc440ce34dc' // Example URL
        },
        {
            title: 'C++ Programming for Unreal Game Development Specialization',
            provider: 'University of Colorado System',
            date: 'October 2023',
            url: 'https://coursera.org/share/67a4e9bc663b2de13b8e32ddffa0fa8a' // Example URL
        },
        {
            title: 'Generative AI for Software Developers Specialization',
            provider: 'IBM',
            date: 'January 2024',
            url: 'https://coursera.org/share/4f0a4f77cae0ced04c23d5f18f53c51a' // Example URL
        },
        {
            title: 'Generative AI for Data Scientists Specialization',
            provider: 'IBM',
            date: 'February 2024',
            url: 'https://coursera.org/share/a2269d1b95a17d577297726444747b76' // Example URL
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Certifications</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{cert.title}</h2>
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
