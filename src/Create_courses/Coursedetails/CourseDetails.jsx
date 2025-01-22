import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Basic_information from "./_Components/Basic_information";
import Chapterinfo from "./_Components/Chapterinfo";
import Finish from "./_Components/Finish";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { Generate_Coursecontent_ai } from "/Configs/Aimodel";
import Loader from "../_Components/Loader";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";



const CourseDetails = () => {
  const { courseid } = useParams(); // Access dynamic course ID from URL
  const [course, setCourse] = useState(null); // State to store course details
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  // const [generatedChapters, setGeneratedChapters] = useState([]);
  const navigate = useNavigate(); // Hook for navigation
 

  const Generatecoursecontent = async () => {
    setLoading(true); // Start loading
    const chapters = course.Chapters; // Get the chapters from the course
    
    try {
      // Loop through each chapter and process asynchronously
      for (const chapter of chapters) {
        const PROMPT = `Explain the concept in detail for the course: ${course["Course Name"]}, chapter: ${chapter.name}, with a detailed description. Include a list of topics with their titles, descriptions, and code examples only if it is programming related if not then give normal examples`;
  
        console.log("Generated Prompt:", PROMPT);
  
        const result = await Generate_Coursecontent_ai.sendMessage(PROMPT); // Wait for AI response
        const responseText = await result.response.text(); // Wait for text conversion
        console.log("AI Response:", responseText);
  
        // Check if the response is valid JSON
        let generatedContent;
        try {
          generatedContent = JSON.parse(responseText); // Parse the AI response into JSON
        } catch (error) {
          console.error("Error parsing AI response:", error);
          return; // Exit if the response is not valid JSON
        }
  
        // Ensure required fields are set for each chapter
        chapter.details = {}; // Initialize details as an empty object
  
        // Set chapter fields from the AI response
        if (generatedContent) {
          chapter.details.description = generatedContent.description || "No description provided.";
  
          chapter.topics = generatedContent.topics && Array.isArray(generatedContent.topics) 
          ? generatedContent.topics.map((topic, topicIndex) => ({
              topic_id: topic.topic_id || `topic-${Date.now()}-${topicIndex}`,
              title: topic.title || "Untitled Topic",
              description: topic.description || "No description available.",
              code: topic.code || null,
            }))
          : [];  // Ensure an empty array if no topics are found
        
       
        } else {
          console.warn("No details found in AI response for chapter:", chapter.name); // Changed chapter.title to chapter.name
          chapter.details.description = "No description available.";
          chapter.topics = []; // No topics if not available
        }
  
        // Set a unique chapter_id if not already set
        if (!chapter.chapter_id) {
          chapter.chapter_id = `chapter-${Date.now()}`; // Generate a unique ID for the chapter
        }
  
        // Special logic for specific chapters
        if (chapter.name === "Specific Chapter") { // Changed chapter.title to chapter.name
          chapter.details.special_field = "Special handling for this chapter";
        }
      }
  
      // Ensure course topic is set
      if (!course.topic) {
        course.topic = "General Topic"; // Set default topic if missing
      }
  
      // Prepare course data to be saved in backend
      const courseData = {
        courseName: course["Course Name"], // Make sure this is correct
        description: course["Description"] || "No description available",
        duration: course["Duration"] || "Not specified",
        level: course["Level"] || "beginner",
        chapters: chapters.map((chapter) => ({
          chapterName: chapter["Chapter Name"] || "Untitled Chapter", // Make sure this is set correctly
          about: chapter["About"] || "No description provided for the chapter",
          duration: chapter["Duration"] || "Not specified",
          topics: chapter.topics || [], // Ensure topics are included
        })),
      };
      
  
      console.log("Course Data to Save:", courseData);
  
      // Sending the structured data to the backend
      const saveResponse = await fetch('https://saksham-backend-ul8k.onrender.com/api/createcourse/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });
  
      const data = await saveResponse.json();
      console.log("Backend Response:", data);
  
      if (data.message === 'Course content saved successfully') {
        navigate(`/createcourse/finish/${data.courseId}`);
      } else {
        console.error('Failed to save course content:', data.message);
      }
    } catch (error) {
      console.error("Error generating course content:", error);
    } finally {
      setLoading(false); // Stop loading after processing
    }
  };
  
  

  
  
  
  

  // Fetch course details on component mount
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://saksham-backend-ul8k.onrender.com/api/course/${courseid}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        setCourse(data); // Set course details in state
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Stop loading when the fetch is done
      }
    };

    fetchCourseDetails();
  }, [courseid]);

  // Show loader if loading is true
  if (loading) {
    return <Loader loading={loading} />; // Ensure your Loader component handles this properly
  }

  // Show error message if fetch fails
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Ensure course data exists before rendering
  if (!course) {
    return <div className="text-center text-red-500">Course not found</div>;
  }

  // Display course details
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Title */}
      <h2 className="text-3xl font-black text-center mt-6 text-[#1ddbb2]">
        Course Layout
      </h2>

      {/* loader */}

      <Loader loading={loading} />

      {/* Basic Information */}
      <div className="mt-8">
        <Basic_information course={course} />
      </div>

      {/* Chapter Details */}
      <div className="mb-8">
        <Chapterinfo chapters={course.Chapters} />

        {/* Button Container */}
        <div className="flex justify-end mt-8 px-4">
          <AlertDialog>
            <AlertDialogTrigger className="bg-[#1ddbb2] text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg hover:bg-[#17a894] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#1ddbb2] focus:ring-opacity-50 active:bg-[#17a894] flex items-center space-x-2">
              {/* Icon */}
              <CpuChipIcon className="h-5 w-5" />
              <button>Generate Course content</button>
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-[#f0fdfa] text-black border-2 rounded-lg p-8 max-w-lg mx-auto">
              <AlertDialogHeader>
                {/* Exclamation Icon with Text */}
                <div className="flex items-center space-x-2">
                  <ExclamationCircleIcon className="h-6 w-6 text-[#1ddbb2]" />
                  <AlertDialogTitle className="text-black font-bold text-xl">
                    Are you absolutely sure?
                  </AlertDialogTitle>
                </div>
                <AlertDialogDescription className="text-gray-800 mt-2">
                  This action will generate the complete course and cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="space-x-4">
                <AlertDialogCancel className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
  className="bg-[#1ddbb2] text-white px-6 py-2 rounded-md hover:bg-[#17a894] transition duration-300 flex items-center space-x-2"
  onClick={Generatecoursecontent}
>
  {/* Checkmark Icon */}
  <CheckCircleIcon className="h-5 w-5" />
  <span>Continue</span>
</AlertDialogAction>

              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    
    </div>
  );
};

export default CourseDetails;
