// src/components/Achievements.js
import React from 'react';
import AchievementCard from './AchievementCard';

function Achievements() {
    const achievements = [
        {
            title: "Champion of DU CTF 2023 with team CSE_FRD",
            description: "DU CTF is an intra university cyber security competition hosted by CSEDU Students Club.",
            date: "2023",
        },
        {
            title: "Top 10 Finalist of HackTheVerse Open APIs Challenge Hackathon with team CSEDU_ARD",
            description: "HackTheVerse - Cefalo Presents ITverse 2023 is an inter university Hackathon organised by Institute of Information Technology, University of Dhaka.",
            date: "2023",
        },
        {
            title: "Provisional finalist of Robi Datathon 2.0 with team DU_Datamon",
            description: "Robi Datathon 2.0 was Bangladesh's biggest datathon of 2022 revolving around the role of Big Data and Machine Learning in solving business problems.",
            date: "2022",
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
