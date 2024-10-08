// src/components/ExperienceCard.js
import React from 'react';

function ExperienceCard({ title, company, date, description }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-200 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mb-1">{company}</p>
            <p className="text-sm text-gray-500 mb-3">{date}</p>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

export default ExperienceCard;
