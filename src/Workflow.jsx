import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function HowItWorks() {
  return (
    <div id="how-it-works">
    <section className="flex items-center justify-between px-6 py-16 bg-[#f9f9f9]">
      {/* Left Side: Image */}
      <div className="w-1/2 relative flex justify-center items-center">
        {/* Shadow Effect */}
        <div className="absolute -z-10 w-full h-full rounded-lg bg-gradient-to-b from-black/20 to-transparent blur-2xl"></div>

        {/* Image with Motion */}
        <motion.img
          src="/rb_2150145319.png"
          alt="SAKSHAM App Interface"
          className="max-w-full rounded-lg transition-transform transform group-hover:scale-110 duration-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Right Side: Steps */}
      <div className="w-1/2 space-y-8">
        <h2 className="text-4xl font-extrabold text-[#1ddbb2] mb-8">How IT Works ?</h2>
        <p className="text-xl text-gray-600 mb-12">A step-by-step guide to personalize your learning journey.</p>

        {/* Animated Flow Steps */}
        <div className="space-y-10">
          {[
            "Enter Your Topic",
            "AI Curates Personalized Content",
            "Learning in Your Language",
            "Offline Learning",
            "Track Your Progress",
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="w-10 h-10 bg-[#1ddbb2] text-white flex items-center justify-center rounded-full">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1ddbb2]">{step}</h3>
                <p className="text-gray-700 mt-2">{`Brief explanation for ${step.toLowerCase()}.`}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default HowItWorks;
