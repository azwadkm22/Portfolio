// src/components/ExperienceItem.js
import React from 'react';

function ExperienceItem({ company, title, date, description }) {
    return (
        <div className="border-l-4 border-blue-500 pl-6 mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{company}</h3>
            <p className="text-sm sm:text-lg text-gray-500 mb-1">{date}</p>
            <p className="text-sm sm:text-xl font-medium text-gray-700">{title}</p>
            <p className="text-sm sm:text-lg text-gray-600 mt-3">{description}</p>
        </div>
    );
}

export default ExperienceItem;
