// src/components/Skills.js
import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaGamepad, FaDatabase, FaChartLine } from 'react-icons/fa'; // Import icons

function Skills() {
    return (
        <div className="h-auto py-16 bg-gray-100 text-gray-800">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-6">

                {/* Programming Languages */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                    <FaCode className="text-3xl md:text-4xl text-blue-600 mb-4 mx-auto sm:mx-0" />
                    <h2 className="text-xl md:text-2xl font-semibold text-center sm:text-left mb-4">Programming Languages</h2>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li>C++</li>
                        <li>C#</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Dart</li>
                        <li>GDScript</li>
                    </ul>
                </div>

                {/* Android and Web Dev Frameworks */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                    <FaMobileAlt className="text-3xl md:text-4xl text-green-600 mb-4 mx-auto sm:mx-0" />
                    <h2 className="text-xl md:text-2xl font-semibold text-center sm:text-left mb-4">Android & Web Dev</h2>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Flutter SDK</li>
                        <li>Android SDK</li>
                    </ul>
                </div>

                {/* Design Tools */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                    <FaPaintBrush className="text-3xl md:text-4xl text-pink-600 mb-4 mx-auto sm:mx-0" />
                    <h2 className="text-xl md:text-2xl font-semibold text-center sm:text-left mb-4">Design Tools</h2>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li>Figma</li>
                        <li>Lucidchart</li>
                        <li>Photoshop</li>
                    </ul>
                </div>

                {/* Game Development */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                    <FaGamepad className="text-3xl md:text-4xl text-purple-600 mb-4 mx-auto sm:mx-0" />
                    <h2 className="text-xl md:text-2xl font-semibold text-center sm:text-left mb-4">Game Development</h2>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li>Unreal Engine</li>
                        <li>Unity</li>
                        <li>Godot</li>
                    </ul>
                </div>

                {/* Database Management */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                    <FaDatabase className="text-3xl md:text-4xl text-yellow-600 mb-4 mx-auto sm:mx-0" />
                    <h2 className="text-xl md:text-2xl font-semibold text-center sm:text-left mb-4">Database Management</h2>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>

                {/* Data Science */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                    <FaChartLine className="text-3xl md:text-4xl text-red-600 mb-4 mx-auto sm:mx-0" />
                    <h2 className="text-xl md:text-2xl font-semibold text-center sm:text-left mb-4">Data Science</h2>
                    <ul className="space-y-2 text-center sm:text-left">
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
