import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Icons

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-6 md:px-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section - Contact Info */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you have a project idea, want to collaborate, or just say hi—I'd love to hear from you!
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {[
              { icon: <FaEnvelope className="text-blue-400" />, label: "Email", value: "gopalkoladiya205@gmail.com" },
              { icon: <FaPhone className="text-green-400" />, label: "Phone", value: "+123 456 7890" },
              { icon: <FaMapMarkerAlt className="text-red-400" />, label: "Location", value: "Surat, Gujarat, India" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 border border-gray-600 rounded-lg transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)" }}
              >
                {contact.icon}
                <div>
                  <h3 className="text-lg font-semibold">{contact.label}</h3>
                  <p className="text-gray-400">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Send a Message</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring focus:ring-blue-500 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-lg transition-all duration-200 ease-in-out"
              whileHover={{ scale: 1.03 }} // Subtle hover effect
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
