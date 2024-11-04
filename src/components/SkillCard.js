import React from 'react';

function SkillCard({ title, IconComponent, items, color}) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow">
            <IconComponent className={`text-xl sm:text-3xl md:text-4xl ${color} mb-2 sm:mb-4 mx-auto sm:mx-0`} />
            <h2 className="text-base md:text-2xl font-semibold text-center sm:text-left mb-2 sm:mb-4">
                {title}
            </h2>
            <ul className="space-y-2 text-center sm:text-left">
                {items.map((item, index) => (
                    <li key={index} className="text-xs sm:text-base">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillCard;
