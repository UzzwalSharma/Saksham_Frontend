import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-6 hover:shadow-xl transition-all duration-300 group">
      {/* Thumbnail Image */}
      <div className="w-full h-48 overflow-hidden mb-4">
        <img 
          src="/8202589.jpg" 
          alt="Course Thumbnail" 
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Course Name */}
      <h3 className="text-2xl font-semibold text-[#1ddbb2] group-hover:text-[#0bb389] transition-colors duration-300">
        {course.courseName}
      </h3>

      {/* Course Description */}
      <p className="text-gray-600 mt-2 line-clamp-3">
        {course.description}
      </p>

      {/* Tags Section */}
      <div className="flex flex-wrap mt-4 gap-2">
        {course.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-sm text-white bg-[#ffcc00] px-2 py-1 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <div className="mt-6 text-center">
        <Link
          to={`/createcourse/finish/${course._id}`}
          className="bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] text-white py-2 px-4 rounded-lg hover:from-[#0bb389] hover:to-[#e6b800] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group-hover:scale-105"
        >
          View Details <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
