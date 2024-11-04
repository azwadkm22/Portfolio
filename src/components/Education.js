// src/components/Education.js
import React from 'react';
import profilePic from '../assets/portrait.jpg'; 
import schoolPic from '../assets/IdealSchoolLogo.png';
import ndcPic from '../assets/ndcLogo.png';
import duLogo from '../assets/duLogo.png';

function Education() {
    const qualifications = [
        {
            degree: 'B.Sc. in Computer Science and Engineering',
            institution: 'University of Dhaka',
            year: '2019 - 2023',
            cgpa: 'CGPA: 3.81/4.00',
            logo: duLogo
        },
        {
            degree: 'Higher Secondary Certificate',
            institution: 'Notre Dame College',
            year: '2018',
            cgpa: 'GPA: 5.00/5.00',
            logo: ndcPic
        },
        {
            degree: 'Secondary School Certificate',
            institution: 'Ideal School and College',
            year: '2016',
            cgpa: 'GPA: 5.00/5.00',
            logo: schoolPic
        },
    ];

    return (
        <div className="bg-gray-100 text-gray-800 py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-left mb-12">Education</h1>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute border-r-4 border-gray-300 h-full left-4 md:left-16"></div>

                    <div className="space-y-12">
                        {qualifications.map((qual, index) => (
                            <div key={index} className="relative flex items-center justify-between">
                                {/* Circle Marker */}
                                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-400 border-4 border-white absolute left-4 md:left-12"></div>
                                {/* Qualification Details */}
                                <div className="ml-6 pl-4 md:ml-16 md:pl-8">
                                    <h2 className="text-base md:text-xl font-semibold">{qual.degree}</h2>
                                    <p className="text-sm md:text-base text-gray-600">{qual.institution} | {qual.year}</p>
                                    <p className="text-sm md:text-base text-gray-500 italic">{qual.cgpa}</p>
                                </div>
                                {/* Institution Logo */}
                                <div className="w-24 h-24 ml-8 flex-shrink-0 invisible md:visible">
                                    <img src={qual.logo} alt={`${qual.institution} logo`} className="object-contain w-full h-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
