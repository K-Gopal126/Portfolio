import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.png'; // Background image

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-6 md:px-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Background Image */}
        <div className="relative w-full h-full flex justify-center">
          <img
            src={img1}
            alt="AI Background"
            className="w-full max-w-lg md:max-w-xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Section - Content */}
        <div className="flex flex-col space-y-6 text-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unleashing the Power of AI for Tomorrow
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Dive into the world of <b className="text-blue-600">cutting-edge AI solutions</b>. From self-driving tech to advanced computer vision, explore how AI is <b className="text-blue-600">shaping the future</b>.
          </p>

          {/* Explore Projects Button */}
          <Link
            to="/projects"
            className="self-end bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
