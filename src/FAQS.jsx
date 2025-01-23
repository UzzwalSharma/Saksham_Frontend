import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div >
      <div className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full text-left text-lg font-medium text-emerald-600 py-4 flex items-center justify-between hover:bg-emerald-100 rounded-lg transition-all"
              >
                <span>What is SAKSHAM and how can it help me?</span>
                <span className="ml-4">
                  {open === 0 ? (
                    <FaChevronUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-emerald-600" />
                  )}
                </span>
              </button>
              {open === 0 && (
                <div className="px-6 py-4 text-gray-700">
                SAKSHAM is an AI-powered platform that generates personalized and structured courses based on your input, helping learners access quality education in a format that suits their learning needs. It addresses challenges like unstructured learning resources, language barriers, and the lack of accessibility to quality content, especially in rural India.
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full text-left text-lg font-medium text-emerald-600 py-4 flex items-center justify-between hover:bg-emerald-100 rounded-lg transition-all"
              >
                <span>How does SAKSHAM generate courses?</span>
                <span className="ml-4">
                  {open === 1 ? (
                    <FaChevronUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-emerald-600" />
                  )}
                </span>
              </button>
              {open === 1 && (
                <div className="px-6 py-4 text-gray-700">
                  SAKSHAM uses AI to analyze your input and generates a course outline with relevant resources like videos, articles, and quizzes...
                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full text-left text-lg font-medium text-emerald-600 py-4 flex items-center justify-between hover:bg-emerald-100 rounded-lg transition-all"
              >
                <span>What kind of impact can SAKSHAM have on education in rural India?</span>
                <span className="ml-4">
                  {open === 1 ? (
                    <FaChevronUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-emerald-600" />
                  )}
                </span>
              </button>
              {open === 2 && (
                <div className="px-6 py-4 text-gray-700">
                  SAKSHAM has the potential to revolutionize education in rural India by providing accessible, personalized learning content in regional languages, available offline. It can bridge the education gap, empowering individuals in remote areas with the knowledge and skills they need to succeed in today’s digital economy.
                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full text-left text-lg font-medium text-emerald-600 py-4 flex items-center justify-between hover:bg-emerald-100 rounded-lg transition-all"
              >
                <span>Can SAKSHAM be used for skill development and certification?</span>
                <span className="ml-4">
                  {open === 1 ? (
                    <FaChevronUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-emerald-600" />
                  )}
                </span>
              </button>
              {open === 3 && (
                <div className="px-6 py-4 text-gray-700">
               Yes, SAKSHAM can be used for skill development in various domains such as programming, data science, and more. The platform offers quizzes and self-assessment tools to track progress, and users can earn certifications after completing courses, helping them boost their careers.

                </div>
              )}
            </div>
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full text-left text-lg font-medium text-emerald-600 py-4 flex items-center justify-between hover:bg-emerald-100 rounded-lg transition-all"
              >
                <span>How does SAKSHAM ensure quality and relevance in the courses it generates?</span>
                <span className="ml-4">
                  {open === 1 ? (
                    <FaChevronUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-emerald-600" />
                  )}
                </span>
              </button>
              {open === 4 && (
                <div className="px-6 py-4 text-gray-700">
               SAKSHAM uses AI algorithms to curate and generate course outlines based on user input and preferences. The platform pulls relevant content, such as videos, articles, and quizzes, from verified educational sources, ensuring that the content is up-to-date and accurate.

                </div>
              )}
            </div>

              {/* Final FAQ question: Get in Touch */}
              <div className="border-b border-gray-200">
              <button
                className="w-full text-left text-lg font-medium text-emerald-600 py-4 flex items-center justify-between hover:bg-emerald-100 rounded-lg transition-all"
              >
                <span>Have more questions? Feel free to reach out to us!</span>
                <Link to="/getintouch">
                  <button className="ml-4 flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-all">
                    <FaEnvelope className="mr-2" />
                    Get in Touch
                  </button>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
