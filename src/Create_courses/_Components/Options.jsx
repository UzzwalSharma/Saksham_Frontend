import React, { useState, useEffect } from 'react'; 
import { Input } from '@/components/ui/input'; 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Select Components
import { useCourse } from '/src/Context/Coursecontext'; // Import the useCourse hook

function Options() {
  const { courseData, updateCourseData } = useCourse(); // Access context data and update function

  // Local state for the current option selections
  const [difficulty, setDifficulty] = useState(courseData.difficulty || ''); 
  const [duration, setDuration] = useState(courseData.duration || ''); 
  const [video, setVideo] = useState(courseData.video || ''); 
  const [chapters, setChapters] = useState(courseData.chapters || ''); 
  const [isFormComplete, setIsFormComplete] = useState(false);

  // Function to check if all fields are filled
  const checkIfFormComplete = () => {
    if (difficulty && duration && video && chapters) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  };

  // Handle difficulty change
  const handleDifficultyChange = (value) => {
    setDifficulty(value);
    updateCourseData('difficulty', value); // Update context with new difficulty level
    checkIfFormComplete(); // Check if all fields are filled
  };

  // Handle duration change (no conversion to number, keep as string)
  const handleDurationChange = (e) => {
    const value = e.target.value;
    setDuration(value); // Set the string value
    updateCourseData( 'duration', value); // Update the context with the string value
    checkIfFormComplete();
  };

  // Handle video selection change
  const handleVideoChange = (value) => {
    setVideo(value);
    updateCourseData('video', value); // Update context with video selection
    checkIfFormComplete(); // Check if all fields are filled
  };

  // Handle number of chapters change (no conversion to number, keep as string)
  const handleChaptersChange = (e) => {
    const value = e.target.value;
    setChapters(value); // Set the string value
    updateCourseData('chapters', value); // Update the context with the string value
    checkIfFormComplete();
  };

  // Effect to check form completion
  useEffect(() => {
    checkIfFormComplete();
  }, [difficulty, duration, video, chapters]);

  // Log form data on button click
  const handleFormSubmit = () => {
    if (isFormComplete) {
      console.log('Submitted data:', {
        category: courseData.category,
        topic: courseData.topic,
        description: courseData.description,
        difficulty,
        duration,
        video,
        chapters,
      });
    } else {
      console.error('Form is incomplete. Please fill all the fields.');
    }
  };

  return (
    <div className="p-8 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-[#1ddbb2] text-center mb-8">
          Course Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Difficulty Level Dropdown */}
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">
              🎯 Difficulty Level
            </label>
            <Select value={difficulty} onValueChange={handleDifficultyChange}>
              <SelectTrigger className="rounded-lg border-gray-300 focus:ring-[#1ddbb2] focus:border-[#1ddbb2]">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">🟢 Beginner</SelectItem>
                <SelectItem value="intermediate">🟡 Intermediate</SelectItem>
                <SelectItem value="advanced">🔴 Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Duration Input */}
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">
              ⏳ Course Duration (in hours)
            </label>
            <Input
              type="text" // Keeping as text to store string values
              value={duration}
              onChange={handleDurationChange}
              placeholder="Enter duration"
              className="p-3"
            />
          </div>

          {/* Add a Video Dropdown */}
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">
              📹 Add a Video?
            </label>
            <Select value={video} onValueChange={handleVideoChange}>
              <SelectTrigger className="rounded-lg border-gray-300 focus:ring-[#1ddbb2] focus:border-[#1ddbb2]">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">✅ Yes</SelectItem>
                <SelectItem value="no">❌ No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Number of Chapters Input */}
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold text-gray-700">
              📖 Number of Chapters
            </label>
            <Input
              type="text" // Keeping as text to store string values
              value={chapters}
              onChange={handleChaptersChange}
              placeholder="Enter number of chapters"
              className="border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Submit Button */}
        {/* <div className="mt-8 flex justify-center">
          <button
            onClick={handleFormSubmit}
            className="bg-[#1ddbb2] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#17a885] transition duration-200"
          >
            Submit
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Options;
