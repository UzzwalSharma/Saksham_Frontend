import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCourse } from '/src/Context/Coursecontext'; // Import the useCourse hook to access context

function Topic_description() {
  const { courseData, updateCourseData } = useCourse(); // Access context data and update function

  // Initialize the state with the values from context
  const [topic, setTopic] = useState(courseData.topic || '');
  const [description, setDescription] = useState(courseData.description || '');

  // Update context when topic changes
  const handleTopicChange = (e) => {
    const newTopic = e.target.value;
    setTopic(newTopic);  // Update local state
    updateCourseData('topic', newTopic);  // Update context with the new topic

   
  };

  // Update context when description changes
  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);  // Update local state
    updateCourseData('description', newDescription);  // Update context with the new description

   
  };

  // Ensure values are always updated if context data changes
  useEffect(() => {
    setTopic(courseData.topic || '');
    setDescription(courseData.description || '');
  }, [courseData]);

  return (
    <div className="p-6 space-y-6 flex flex-col">
      {/* Topic Input */}
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-semibold text-gray-700">
          💡 What's the topic you want to dive into?
        </label>
        <Input 
          value={topic}  // Set the value from state
          onChange={handleTopicChange}  // Update state and context on change
          placeholder="Enter your topic, e.g., 'Introduction to AI'"
          className="w-96 h-16"
        
        />
      </div>

      {/* Course Description */}
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-semibold text-gray-700">
          📝 Tell us more about the course you're interested to study{' '}
          <span className="font-bold">(optional)</span>
        </label>
        <Textarea 
          value={description}  // Set the value from state
          onChange={handleDescriptionChange}  // Update state and context on change
          placeholder="Provide a brief description, e.g., 'A beginner-friendly course covering the basics of AI, including practical examples and real-world applications.'"
          className="w-2/3 h-16"
        />
      </div>
    </div>
  );
}

export default Topic_description;
