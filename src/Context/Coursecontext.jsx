import React, { createContext, useContext, useState } from 'react';

// Create Context
const CourseContext = createContext();

// Custom Hook to use the context
export const useCourse = () => useContext(CourseContext);

// Provider Component
export const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState({
    category: '',
    topic: '',
    description: '',
    options: {
      difficulty: '',
      duration: '',
      addVideo: '',
      chapters: '',
    },
  });

  const updateCourseData = (field, value) => {
    setCourseData((prev) => ({ ...prev, [field]: value }));
  };

  const updateOptions = (field, value) => {
    setCourseData((prev) => ({
      ...prev,
      options: { ...prev.options, [field]: value },
    }));
  };

  return (
    <CourseContext.Provider value={{ courseData, updateCourseData, updateOptions }}>
      {children}
    </CourseContext.Provider>
  );
};
