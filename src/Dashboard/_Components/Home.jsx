import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import CourseCard from '/src/Dashboard/_Components/CourseCard.jsx';
import { FaSpinner } from 'react-icons/fa';

const DashboardHome = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling
  const { user } = useUser(); // Access the logged-in user details

  // Fetching courses from the database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://saksham-backend-ul8k.onrender.com/api/createcourse/savedcourse');
        if (!response.ok) {
          throw new Error('Failed to fetch courses.');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message); // Handle fetch errors
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        {/* Left - Hello message */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800">
            Hello, <span className="text-[#1ddbb2]">{user?.firstName || 'User'}</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">Welcome back to your dashboard!</p>
        </div>

        {/* Right - Create Course Button */}
        <Link to="/createcourse">
          <button className="px-6 py-3 bg-[#1ddbb2] text-white rounded-lg hover:bg-[#17b39b] transition duration-300">
            Create New Course +
          </button>
        </Link>
      </div>

      {/* Courses Section */}
      <div className="mb-6">
        {/* Heading */}
        <h3 className="text-2xl font-semibold text-[#1ddbb2] mb-4"> Some Quick Featured Courses</h3>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center items-center">
              <FaSpinner className="animate-spin text-4xl text-[#1ddbb2]" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 col-span-full">
              {error}
            </div>
          ) : courses.length > 0 ? (
            courses.map((course) => <CourseCard key={course._id} course={course} />)
          ) : (
            <div className="text-center text-gray-500 col-span-full">
              No courses available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
