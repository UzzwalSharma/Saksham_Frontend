import React, { useState } from 'react';
import Header from '/src/Create_courses/Header.jsx';
import Select_Category from '/src/Create_courses/_Components/Select_Category.jsx';
import { FaList, FaBookOpen, FaTools } from 'react-icons/fa';
import Topic_description from './_Components/Topic_description';
import Options from './_Components/Options';
import { useCourse } from '/src/Context/Coursecontext'; // Import the context
import { Generate_Courselayout_ai } from '/Configs/Aimodel';
import Loader from './_Components/Loader';
import { useNavigate } from 'react-router-dom'; 

function Createcourse() {
  const navigate = useNavigate();
  const Stepperoptions = [
    { id: 1, name: 'Category', icon: <FaList /> },
    { id: 2, name: 'Topic and Description', icon: <FaBookOpen /> },
    { id: 3, name: 'Options', icon: <FaTools /> },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const { courseData } = useCourse(); // Access the context data
const [loading , setLoading] = useState(false)
  const handleNext = () => {
    if (currentStep < Stepperoptions.length) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // const handleGenerateCourse = () => {
  //   console.log('Generated Course Data:', courseData); // Log the course data
  // };

  // i need to make some cleanliness here

  
  const generatecourse_Layout = async () => {
    try {
      setLoading(true);
  
      const prompt = `Generate a course tutorial with the following details in the exact format required by the backend:
      The response should be a JSON object with the following structure:
      {
        "Course Name": "Course Name Here",
        "Description": "Course Description Here",
        "Category": "Category Here",
        "Topic": "Topic Here",
        "Level": "Level Here",
        "Duration": "Duration Here",
        "Number of Chapters": Number of chapters,
        "Chapters": [
          {
            "Chapter Name": "Chapter Name Here",
            "About": "Chapter Description Here",
            "Duration": "Chapter Duration Here"
          }
        ]
      }
    
      The following values should be used in the course layout:
      Category: ${courseData.category || "Not provided"}
      Topic: ${courseData.topic || "Not provided"}
      Description: ${courseData.description || "Not provided"}
      Level: ${courseData.difficulty || "Not provided"}
      Duration: ${courseData.duration || "Not provided"} hours
      Number of Chapters: ${courseData.chapters || "Not provided"}
    `;
    
  
      console.log("Generated Prompt:", prompt);
  
      const result = await Generate_Courselayout_ai.sendMessage(prompt);
  
      if (!result || !result.response || !result.response.text) {
        alert("The AI model response is empty or invalid. Please try again.");
        setLoading(false);
        return;
      }
  
      const rawResponse = result.response.text(); // Keep it raw
      console.log("Generated Course Layout:", rawResponse);
  
      const response = await fetch('https://saksham-backend-ul8k.onrender.com/api/course/save-course-layout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: rawResponse, // Send raw JSON string
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Generated Course ID:', data.courseId); // Log the correct courseId
        navigate(`https://saksham-backend-ul8k.onrender.com/createcourse/${data.courseId}`); // Navigate to the dynamic route
      } else {
        alert(`Failed to save course layout: ${data.error}`);
      }
  
      setLoading(false);
    } catch (error) {
      console.error("Error generating or saving course layout:", error);
      alert("An error occurred while generating or saving the course layout.");
      setLoading(false);
    }
  };
  
  
  

  
  
  

  
  
  
  // in the above function
  
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-12">
        <h2 className="text-3xl font-bold text-center text-[#1ddbb2] mb-8">
          Create New Course
        </h2>
      </div>
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center space-x-28 relative">
          {Stepperoptions.map((step, index) => (
            <div key={step.id} className="relative flex items-center">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full border-2 shadow-md z-10 ${
                  index + 1 <= currentStep
                    ? 'border-[#1ddbb2] bg-[#1ddbb2] text-white'
                    : 'border-gray-300 bg-gray-200 text-gray-500'
                } transition duration-300 ease-in-out`}
              >
                {React.cloneElement(step.icon, {
                  className: 'text-2xl',
                })}
              </div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2">
                <span
                  className={`text-sm font-semibold ${
                    index + 1 <= currentStep ? 'text-[#1ddbb2]' : 'text-gray-500'
                  } transition duration-300`}
                >
                  {step.name}
                </span>
              </div>
              {index < Stepperoptions.length - 1 && (
                <div
                  className={`absolute top-1/2 -translate-y-1/2 left-[calc(100%-1rem)] w-32 h-1 ${
                    index + 1 < currentStep ? 'bg-[#1ddbb2]' : 'bg-gray-300'
                  } transition duration-300`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-6 font-black">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded-md ${
            currentStep > 1
              ? 'bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-300'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            className={`relative px-8 py-3 text-lg font-black rounded-lg shadow-md ${
              currentStep < Stepperoptions.length
                ? 'bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] text-white hover:shadow-lg transform hover:scale-105 transition duration-300'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-inner'
            }`}
            disabled={currentStep === Stepperoptions.length}
          >
            <span className="absolute inset-0 w-full h-full bg-opacity-20 bg-white rounded-lg"></span>
            Next
          </button>
        ) : (
          <button
          onClick={() => {
            console.log('Generating Course Layout');
            generatecourse_Layout();
          }}
          className="px-8 py-3 text-lg font-black rounded-lg shadow-md bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] text-white hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          Generate Course
        </button>
        
        )}
      </div>
      <div className="mt-8 p-6 border border-gray-200 rounded-lg">
        {currentStep === 1 && <Select_Category />}
        {currentStep === 2 && <Topic_description />}
        {currentStep === 3 && <Options />}
      </div>
      <Loader loading={loading}/>
    </div>
  );
}

export default Createcourse;
