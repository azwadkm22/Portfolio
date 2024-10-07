// src/components/AchievementCard.js
import React from 'react';

function AchievementCard({ title, description, date }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

export default AchievementCard;
