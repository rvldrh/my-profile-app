import React from 'react';

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 text-white">
      <div className="text-center p-6 bg-opacity-70 bg-black rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Rivaldo</h1>
        <p className="text-xl md:text-2xl mb-6">
          Welcome to my personal website. Here, you'll find more about my projects, skills, and experiences.
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-3 bg-blue-700 rounded-lg text-white font-semibold transition duration-300 hover:bg-blue-800"
        >
          Learn More About Me
        </a>
      </div>
    </div>
  );
};