import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"; // Cool typing effect
import aiImage from "../assets/aiImage.jpg"; // Your image path
import { FaPython, FaBrain, FaRobot } from "react-icons/fa"; // Tech icons
import { SiPytorch, SiTensorflow, SiHuggingface, SiOpenai, SiFlask, SiDjango } from "react-icons/si"; // AI & Backend Libraries

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-6 md:px-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aiImage}
            alt="AI Developer"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Section - Text */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Typing Effect Heading */}
          <h1 className="text-4xl md:text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["AI Innovator.", "Tech Visionary.", "Problem Solver."],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>

          {/* Bio Section */}
          <p className="text-lg text-gray-300 leading-relaxed">
            Hey! I'm a passionate <b className="text-blue-600">AI Engineer</b> with expertise in 
            <b className="text-blue-600"> Generative AI, Computer Vision, and Deep Learning</b>. 
            I specialize in building AI-driven solutions for 
            <b className="text-blue-600"> self-driving technology, virtual assistants, and predictive analytics.</b>
          </p>

          {/* Semi-Transparent Card */}
          <div className="p-6 border border-gray-500 bg-opacity-0 rounded-xl shadow-lg hover:backdrop-blur-lg transition-all duration-300">
            <p className="text-gray-200 italic">
              "AI isn’t just about automation—it's about <b className="text-blue-600">creating intelligent systems</b> that 
              push the boundaries of what's possible."
            </p>
          </div>

          {/* Skills Section with Hover Effects */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500">My Expertise:</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: <FaPython className="text-blue-400" />, label: "Python & AI" },
                { icon: <FaBrain className="text-yellow-400" />, label: "Machine Learning" },
                { icon: <FaRobot className="text-green-400" />, label: "Deep Learning" },
                { icon: <SiPytorch className="text-red-400" />, label: "PyTorch" },
                { icon: <SiTensorflow className="text-orange-400" />, label: "TensorFlow" },
                { icon: <SiHuggingface className="text-yellow-300" />, label: "Hugging Face" },
                { icon: <SiOpenai className="text-blue-500" />, label: "GANs & LLMs" },
                { icon: <SiFlask className="text-gray-400" />, label: "Flask" },
                { icon: <SiDjango className="text-green-400" />, label: "Django" },
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded-lg transition-all duration-300"
                  whileHover={{
                    scale: 1.1, // Scale effect on hover
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)", // Soft glow effect
                  }}
                >
                  {skill.icon} <span>{skill.label}</span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div>
            <Link
              to="/contact"
              className="mt-4 inline-block px-5 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-lg transition-all duration-150 transform hover:scale-105"
            >
              Connect with Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
