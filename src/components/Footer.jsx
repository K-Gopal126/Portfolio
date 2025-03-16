import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Branding & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Gopal Koladiya</h2>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="transition duration-300"
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[
            { icon: <FaGithub />, link: "https://github.com/K-Gopal126/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gaurav-koladiya-7a0339300/" },
            { icon: <FaXTwitter />, link: "https://x.com/" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
