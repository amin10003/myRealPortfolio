import React from "react";
import { motion } from "framer-motion";


const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-500 py-5 shadow-lg">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
          <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Profile Image */}
      

        {/* Navigation */}
        <nav className="mb-6">
          <ul className="flex space-x-6 text-black font-semibold text-lg">
            {["Home", "myCV", "Projects", "Achievements", "Github"].map(
              (link, index) => (
               
                      <motion.li
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="https://github.com/amin10003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
           <motion.li
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <a
    href="https://github.com/amin10003"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-300 transition-colors duration-300"
  >
    {link}
  </a>
</motion.li>

          </a>
        </motion.li>

              )
            )}
          </ul>
        </nav>

        {/* Animated Heading */}
          <motion.img
          src="profile.png" // Replace with your profile picture
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      
        <motion.p
          className="text-xl text-gray-100 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3><b>Mohamed Ibrahim Yusuf</b></h3>
          Web developer specializing in modern web applications.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
