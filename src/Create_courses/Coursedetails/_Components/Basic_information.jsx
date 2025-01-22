// src/components/_Components/Basic_information.js
import React from 'react';
import { ClockIcon, StarIcon , BookOpenIcon} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
const Basic_information = ({ course }) => {
  const generateCourseAlert = () => {
    // Trigger the alert over the button when it's clicked
    toast.error('Generate the course content First');
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
    {/* Outer container with border and rounded corners */}
    <div className="border-4 border-gray-300 rounded-xl p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Course Information Section */}
        <div className="md:w-1/2 p-6 rounded-2xl space-y-6">
          <h1 className="text-3xl font-bold text-black mb-4">{course['Course Name']}</h1>
          <p className="text-lg text-gray-600">{course.Description}</p>
          <div className="course-meta flex flex-wrap items-center space-x-6 text-gray-500 text-sm">
            {/* Level */}
            <span className="flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full">
              <StarIcon className="h-5 w-5 mr-2" />
              {course.Level}
            </span>
  
            {/* Duration */}
            <span className="flex items-center px-4 py-2">
              <ClockIcon className="h-5 w-5 mr-2" />
              {course.Duration}
            </span>
             {/* Number of Chapters */}
          <span className="flex items-center px-4 py-2">
            <BookOpenIcon className="h-5 w-5 mr-2" />
            {course.Chapters?.length || 0} Chapters
          </span>
          </div>
          
          {/* Full-Width Button */}
          <div className="flex justify-center mt-6 w-full">
            <Button 
            onClick={generateCourseAlert} // Trigger the alert on button click
          className="bg-[#1ddbb2] text-white font-extrabold px-6 py-3 rounded-lg shadow-md flex items-center space-x-2 hover:bg-[#17a894] transition duration-300 w-full"
            
            >
        
              <span>Start</span>
            </Button>
          </div>
        </div>
  
        {/* Course Thumbnail Section */}
        <div className="md:w-1/2 flex justify-center p-6">
          <img
            src={course.Thumbnail || '/10631816.jpg'}
            alt={course['Course Name']}
            className="rounded-2xl shadow-lg border-4 border-gray-200 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  );
};

export default Basic_information;
