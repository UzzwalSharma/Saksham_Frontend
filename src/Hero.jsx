import React from 'react';
import { Button } from './components/ui/button';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-white space-y-8 md:space-y-0">
      {/* Left Side - Text and CTA */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left ml-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1ddbb2] leading-tight">
          Empower Your Learning Journey with <span className="text-[#ffcc00]">SAKSHAM</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Discover personalized courses and track your progress with ease, powered by cutting-edge AI.
        </p>

        <Link to={"/dashboard"}
        className="relative top-4 right-4">
       
        <Button className="relative px-8 py-6 bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] text-white rounded-full shadow-md hover:opacity-90 overflow-hidden text-2xl">
          <span className="absolute w-[100px] h-[150px] bg-white top-0 left-0 rotate-45 opacity-30 animate-streak"></span>
          Get Started  <FiArrowRight />
        </Button> 
        </Link>
        <p className="text-gray-600 bold mt-4">
          "BE SAKSHAM"
        </p>
      </div>

   {/* Right Side - App Mockup or Image */}
<div className="w-full md:w-1/2 flex justify-center relative">
  {/* Spreaded Shadow */}
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0">
    <div className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] bg-[#1ddbb2] blur-3xl opacity-30 rounded-lg"></div>
  </div>

  {/* Floating Image */}
  <motion.img
    src="/rb_7513.png"
    alt="SAKSHAM App Preview"
    className="max-w-full md:max-w-lg rounded-lg relative z-10"
    animate={{
      y: [0, -10, 0], // Float up and down
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
</div>

    </section>
  );
}

export default Hero;
