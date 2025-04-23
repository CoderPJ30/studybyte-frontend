import React, { useState } from 'react';
import apiCall from '../api/api.js';
import { showSuccessToast, showErrorToast } from "../utils/toast.js";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      await apiCall("/contact", {
        method: "POST",
        body: { name, email, message },
      });

      showSuccessToast("Message sent successfully!");
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      showErrorToast(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900">
      <div className="bg-zinc-950 text-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-zinc-400 mb-6">We would love to hear from you! Fill out the form below.</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-md bg-zinc-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-4 py-2 rounded-md font-medium shadow-md"
            onClick={handleSendMessage}
            disabled={!name || !email || !message}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
