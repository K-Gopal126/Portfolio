import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 md:py-6 shadow-lg fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Logo/Brand - Clicking it goes to Home */}
        <Link to="/" className="text-3xl font-bold tracking-wide flex items-center space-x-2">
          <motion.span
            className="text-blue-600"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            AI
          </motion.span>
          <span>Developer</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex space-x-8 items-center transition-all duration-300 bg-black bg-opacity-80`}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-600 transition-all duration-300"
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-600 transition-all duration-300"
            >
              About
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-blue-600 transition-all duration-300"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-600 transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-black transition-all duration-300 ease-in-out z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        style={{
          width: '250px',
        }}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div className="flex flex-col items-center space-y-6 pt-8">
          <Link
            to="/"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
