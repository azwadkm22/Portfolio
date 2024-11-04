// src/components/Skills.js
import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaGamepad, FaDatabase, FaChartLine } from 'react-icons/fa'; // Import icons
import SkillCard from './SkillCard';

function Skills() {
    return (
        <div className="h-auto py-16 bg-gray-100 text-gray-800">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-6">

                {/* Programming Languages */}
                <SkillCard
                    title="Programming Languages"
                    IconComponent={FaCode}
                    items={['C++', 'C#', 'Python', 'JavaScript', 'Java', 'Dart', 'GDScript']}
                    color="text-blue-600" // Custom color
                />

                {/* Android & Web Dev */}
                <SkillCard
                    title="Android & Web Dev"
                    IconComponent={FaMobileAlt}
                    items={['React.js', 'Node.js', 'Express.js', 'Flutter SDK', 'Android SDK']}
                    color="text-green-600" // Custom color
                />

                {/* Design Tools */}
                <SkillCard
                    title="Design Tools"
                    IconComponent={FaPaintBrush}
                    items={['Figma', 'Lucidchart', 'Photoshop']}
                    color="text-pink-600" // Custom color
                />

                {/* Game Development */}
                <SkillCard
                    title="Game Development"
                    IconComponent={FaGamepad}
                    items={['Unreal Engine', 'Unity', 'Godot']}
                    color="text-purple-600" // Custom color
                />

                {/* Database Management */}
                <SkillCard
                    title="Database Management"
                    IconComponent={FaDatabase}
                    items={['MongoDB', 'PostgreSQL']}
                    color="text-yellow-600" // Custom color
                />

                {/* Data Science */}
                <SkillCard
                    title="Data Science"
                    IconComponent={FaChartLine}
                    items={['NumPy', 'Pandas', 'TensorFlow', 'Scikit-learn']}
                    color="text-red-600" // Custom color
                />

            </div>
        </div>
    );
}

export default Skills;
