import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseList = () => {
  const { courseId } = useParams(); // Extract the dynamic route parameter
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://saksham-backend-ul8k.onrender.com/api/course/${courseId}`);
        const data = await response.json();

        if (response.ok) {
          setCourse(data);
        } else {
          console.error('Error fetching course:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{course.courseName}</h1>
      <p className="text-lg mb-6">{course.description}</p>
      <div>
        {course.chapters.map((chapter, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{chapter.chapterName}</h2>
            <p>{chapter.about}</p>
            <ul className="list-disc ml-8">
              {chapter.topics.map((topic, idx) => (
                <li key={idx}>
                  <strong>{topic.title}:</strong> {topic.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
