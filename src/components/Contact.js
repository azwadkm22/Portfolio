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
        <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
            <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-gray-700 rounded-lg">
                <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 bg-gray-600 text-white border-none rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 bg-gray-600 text-white border-none rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 bg-gray-600 text-white border-none rounded"
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className="w-full bg-blue-500 p-2 rounded text-white">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
