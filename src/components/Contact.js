// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Implement form submission logic
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
                <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Get in Touch</h1>

                <div className="relative mb-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                </div>

                <div className="relative mb-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                </div>

                <div className="relative mb-6">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
