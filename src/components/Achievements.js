// src/components/Achievements.js
import React from 'react';
import AchievementCard from './AchievementCard';

function Achievements() {
    const achievements = [
        {
            title: "Dean's List",
            description: "Achieved Dean’s List honors for academic excellence in 2023.",
            date: "2023",
        },
        {
            title: "Hackathon Winner",
            description: "Won first place in the XYZ Hackathon by developing an innovative solution in 48 hours.",
            date: "2022",
        },
        {
            title: "Certified Android Developer",
            description: "Earned official certification as an Android Developer from Google.",
            date: "2021",
        },
        // Add more achievements as needed
    ];

    return (
        <section id="achievements" className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            title={achievement.title}
                            description={achievement.description}
                            date={achievement.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;
