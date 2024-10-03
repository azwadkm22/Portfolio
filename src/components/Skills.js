// src/components/Skills.js
import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaGamepad, FaDatabase, FaChartLine } from 'react-icons/fa'; // Import icons

function Skills() {
    return (
        <div className="h-auto py-16 bg-gray-100 text-gray-800">
            <h1 className="text-5xl font-bold text-center mb-12">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                {/* Programming Languages */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <FaCode className="text-4xl text-blue-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
                    <ul className="space-y-2">
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Dart</li>
                        <li>GDScript</li>
                    </ul>
                </div>

                {/* Android and Web Dev Frameworks */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <FaMobileAlt className="text-4xl text-green-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Android & Web Dev</h2>
                    <ul className="space-y-2">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Flutter</li>
                    </ul>
                </div>

                {/* Design Tools */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <FaPaintBrush className="text-4xl text-pink-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Design Tools</h2>
                    <ul className="space-y-2">
                        <li>Figma</li>
                        <li>Lucidchart</li>
                        <li>Photoshop</li>
                    </ul>
                </div>

                {/* Game Development */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <FaGamepad className="text-4xl text-purple-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Game Development</h2>
                    <ul className="space-y-2">
                        <li>Unreal Engine</li>
                        <li>Unity</li>
                        <li>Godot</li>
                    </ul>
                </div>

                {/* Database Management */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <FaDatabase className="text-4xl text-yellow-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Database Management</h2>
                    <ul className="space-y-2">
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>

                {/* Data Science */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <FaChartLine className="text-4xl text-red-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Data Science</h2>
                    <ul className="space-y-2">
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>TensorFlow</li>
                        <li>Scikit-learn</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Skills;
