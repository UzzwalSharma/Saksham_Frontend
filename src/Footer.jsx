import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        // Check if the footer is in the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the footer is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#1ddbb2] text-white py-8" ref={footerRef}>
      <div className="container mx-auto text-center">
        {/* Brand Name */}
        <motion.h3
          className="text-3xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SAKSHAM
        </motion.h3>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
           {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-10 h-10 hover:text-[#ffcc00] transition-transform transform hover:scale-110" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-10 h-10 hover:text-[#ffcc00] transition-transform transform hover:scale-110" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-10 h-10 hover:text-[#ffcc00] transition-transform transform hover:scale-110" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-10 h-10 hover:text-[#ffcc00] transition-transform transform hover:scale-110" />
          </a>
        </motion.div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="text-sm space-y-3 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Links */}
          <a
            href="#privacy-policy"
            className="hover:underline text-lg font-medium text-white transition-all duration-300 hover:text-[#ffcc00] transform hover:scale-105"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-conditions"
            className="hover:underline text-lg font-medium text-white transition-all duration-300 hover:text-[#ffcc00] transform hover:scale-105"
          >
            Terms & Conditions
          </a>
          <a
            href="#contact"
            className="hover:underline text-lg font-medium text-white transition-all duration-300 hover:text-[#ffcc00] transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Made with Heart */}
        <motion.div
          className="text-xs text-gray-200 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="flex items-center justify-center space-x-2">
            <span className="text-lg font-semibold text-white">Made with ❤️</span>
            <strong className="text-xl font-bold text-[#ffcc00]">For INDIA</strong>
          </p>

          {/* Line Drawing Animation */}
          {inView && (
            <motion.div
              className="w-16 h-1 bg-[#ffcc00] mt-2 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 1.5 }}
            />
          )}
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
