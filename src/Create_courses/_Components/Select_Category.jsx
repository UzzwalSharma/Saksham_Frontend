import React, { useEffect, useState } from 'react';
import { useCourse } from '/src/Context/Coursecontext'; // Import the useCourse hook to access context
import { FaFlask, FaCalculator, FaLanguage, FaCode, FaPalette, FaBriefcase, FaHeartbeat, FaTools, FaGuitar, FaBook } from 'react-icons/fa';

function Select_Category() {
  const { courseData, updateCourseData } = useCourse(); // Access context data and update function

  const [selectedCategory, setSelectedCategory] = useState(courseData.category); // Initialize selected category with context data

  const categories = [
    { id: 1, name: "Science", icon: <FaFlask />, desc: "Explore the wonders of the natural and physical world." },
    { id: 2, name: "Mathematics", icon: <FaCalculator />, desc: "Build a strong foundation in mathematical concepts." },
    { id: 3, name: "Languages", icon: <FaLanguage />, desc: "Master languages for communication and literature." },
    { id: 4, name: "Technology & Engineering", icon: <FaCode />, desc: "Learn cutting-edge tech and engineering concepts." },
    { id: 5, name: "Arts & Humanities", icon: <FaPalette />, desc: "Explore creativity, culture, and human experiences." },
    { id: 6, name: "Business & Management", icon: <FaBriefcase />, desc: "Develop skills for the business world." },
    { id: 7, name: "Health & Wellness", icon: <FaHeartbeat />, desc: "Learn to take care of yourself and others." },
    { id: 8, name: "Skill Development", icon: <FaTools />, desc: "Develop essential skills for personal and professional growth." },
    { id: 9, name: "Hobbies & Interests", icon: <FaGuitar />, desc: "Pursue your passions and hobbies." },
    { id: 10, name: "Test Preparation", icon: <FaBook />, desc: "Prepare for exams with curated courses and resources." },
  ];

  const handleCategoryClick = (category) => {
    updateCourseData('category', category.name); // Update context with selected category
    setSelectedCategory(category.name); // Update local state to reflect the selected category
  };

  useEffect(() => {
    setSelectedCategory(courseData.category);
  }, [courseData.category]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-black text-center mb-6 text-[#1ddbb2]">
        Select a Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center bg-white shadow-lg border rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out transform ${
              selectedCategory === category.name
                ? 'border-[#1ddbb2] bg-[#acf9e2] scale-105 z-10' // Highlight selected category
                : 'hover:shadow-xl hover:border-[#1ddbb2] hover:bg-[#f1f1f1] hover:scale-105'
            }`}
            onClick={() => handleCategoryClick(category)} // Add onClick event handler
          >
            <div className="text-4xl text-[#1ddbb2] mb-3">{category.icon}</div>
            <h3 className="text-lg font-semibold text-center mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 text-center">{category.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select_Category;
