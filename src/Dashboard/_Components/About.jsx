import React from 'react';


function About() {
  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          {/* Left Side (Image) */}
          <div className="w-full md:w-1/2">
            <img
              src={"/IMG-20250113-WA0033[144].jpg"}
              alt="About Saksham"
              className="w-full h-auto object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Side (Text) */}
          <div className="w-full md:w-1/2 space-y-6 md:pl-10">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00]">
              About Saksham
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Saksham is an innovative platform that transforms how individuals learn. With AI-powered, personalized courses, we aim to make education more accessible, structured, and inclusive. 
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our platform bridges the gap between technology and education, providing courses in regional languages and ensuring that everyone, no matter their location or background, can access quality education. 
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At Saksham, we focus on making learning personalized, structured, and effective by curating courses that align with each learner's needs. Whether you're looking to upskill or explore new domains, Saksham has you covered.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Join us on our mission to make education accessible, affordable, and effective for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
