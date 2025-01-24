import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoast, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className="bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] text-white py-12 px-4"
      ref={footerRef}
    >
      <div className="container mx-auto text-center space-y-8">
        {/* Brand Name */}
        <motion.h3
          className="text-4xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SAKSHAM
        </motion.h3>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="https://github.com/UzzwalSharma" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-10 h-10 hover:text-gray-800 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://x.com/SharmaUjjw10149" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-10 h-10 hover:text-gray-800 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.youtube.com/@UjjwalSharma.861" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-10 h-10 hover:text-gray-800 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/ujjwal-sharma-3a1395279/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-10 h-10 hover:text-gray-800 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/ujjwalsharma.jsx/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-10 h-10 hover:text-gray-800 transition-transform transform hover:scale-110" />
          </a>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="text-base font-medium space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            href="#privacy-policy"
            className="hover:underline hover:text-gray-800 transition-transform transform hover:scale-105"
            to="/Policy"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms-conditions"
            className="hover:underline hover:text-gray-800 transition-transform transform hover:scale-105"
            to="/terms"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#contact"
            className="hover:underline hover:text-gray-800 transition-transform transform hover:scale-105"
              to="/getintouch"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Made with Love */}
        <motion.div
          className="text-sm mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="flex items-center justify-center space-x-3">
            <span className="text-lg">Made with ❤️</span>
            <span className="text-lg font-bold text-gray-900">For INDIA</span>
          </p>
        </motion.div>

        {/* Line Drawing Animation */}
        {inView && (
          <motion.div
            className="w-24 h-1 bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5 }}
          />
        )}
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-200 mt-8 text-xs">
        &copy; {new Date().getFullYear()} SAKSHAM. All rights reserved.
        <br />
        <p>
    Designed and developed by{" "}
    <span className="font-bold text-[#111514]">Ujjwal</span>.
  </p>
      </div>
    </footer>
  );
}

export default Footer;
