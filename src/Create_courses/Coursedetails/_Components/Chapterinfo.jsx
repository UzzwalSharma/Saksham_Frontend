import React from 'react';
import { FaClock } from 'react-icons/fa';

const Chapterinfo = ({ chapters }) => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-8">
      <h2 className="text-2xl font-black text-[#1ddbb2] mb-6">Chapters</h2>
      <ul className="space-y-6">
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter, index) => (
            <li
              key={chapter._id}
              className="flex items-center bg-white border border-gray-200 shadow-sm p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Numbering */}
              <div className="flex items-center justify-center bg-gradient-to-br from-[#1ddbb2] to-[#0bb389] text-white font-semibold text-lg h-14 w-14 rounded-full mr-6 shadow">
                {index + 1}
              </div>

              {/* Chapter Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-800">
                  {chapter['Chapter Name']}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{chapter.About}</p>
              </div>

              {/* Duration */}
              <div className="flex items-center text-sm text-gray-500 ml-6">
                <FaClock className="mr-2 text-[#1ddbb2]" />
                <span>{chapter.Duration}</span>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No chapters available</li>
        )}
      </ul>
    </div>
  );
};

export default Chapterinfo;
