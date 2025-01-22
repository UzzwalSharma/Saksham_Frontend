import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Features() {
    const [features, setFeatures] = useState([
        { 
          id: 1, 
          title: "Bridging Accessibility Gaps", 
          description: "AI-powered courses available in regional languages like Hindi, Tamil, Bengali, and more, ensuring that no learner is left behind."
        },
        { 
          id: 2, 
          title: "Affordable Education", 
          description: "Free or low-cost courses provide quality education to students who can’t afford expensive platforms like Udemy or Coursera."
        },
        { 
          id: 3, 
          title: "Structured Learning Paths", 
          description: "Unlike YouTube's unstructured content, our AI generates personalized, step-by-step courses, helping you learn efficiently and effectively."
        },
        { 
          id: 4, 
          title: "AI-Powered Content Curation", 
          description: "Get curated, job-ready learning materials from a variety of sources (videos, blogs, articles), unlike the random, unfiltered content on platforms like YouTube."
        },
        // { 
        //   id: 5, 
        //   title: "Offline Accessibility", 
        //   description: "Downloadable materials for low-connectivity areas, unlike streaming services that require constant internet access."
        // },
        { 
          id: 6, 
          title: "Relevant, Career-Focused Learning", 
          description: "Get courses tailored to your specific career goals and needs, rather than general or unrelated content found on YouTube."
        }
      ]);
      

  return (
    <section className="bg-[#f9f9f9] py-16 ">
      <div id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#1ddbb2] mb-8">Key Features</h2>
        <p className="text-xl text-[#4b4b4b] mb-12">Discover how SAKSHAM revolutionizes learning.</p>

        {/* Infinite Scroll + Motion Path */}
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] opacity-20"></div>

          <div className="flex space-x-8 justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="relative bg-white p-8 rounded-xl shadow-xl w-64"
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                  transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: index * 0.2, // Stagger the animations for each feature
                  },
                }}
                viewport={{ once: false, amount: "some" }} // Trigger animation when the feature enters the viewport
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] rounded-xl opacity-30"
                ></motion.div>
                <h3 className="text-xl font-black text-[#1ddbb2] mb-2">{feature.title}</h3>
                <p className="text-black font-bold">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Features;
