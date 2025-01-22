import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaClock } from "react-icons/fa";
import YouTube from "react-youtube";
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Start() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeChapter, setActiveChapter] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  // Fetch course details
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `https://saksham-backend-ul8k.onrender.com/api/createcourse/${courseId}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch course:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  // Fetch YouTube video for the active chapter
  useEffect(() => {
    const fetchYouTubeVideo = async () => {
      if (!activeChapter) return;
      setVideoLoading(true);

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              q: `${activeChapter.chapterName} ${activeChapter.duration}`,
              maxResults: 2,
              key: YOUTUBE_API_KEY,
            },
          }
        );

        const videos = response.data.items;
        if (videos && videos.length > 0) {
          setVideoId(videos[1]?.id?.videoId || null);
        } else {
          setVideoId(null);
        }
      } catch (error) {
        console.error("Failed to fetch YouTube video:", error.message);
        setVideoId(null);
      } finally {
        setVideoLoading(false);
      }
    };

    fetchYouTubeVideo();
  }, [activeChapter, YOUTUBE_API_KEY]);

  if (loading) {
    return <div className="text-center text-lg text-[#1ddbb2]">Loading...</div>;
  }

  if (!course) {
    return (
      <div className="text-center text-lg text-red-600">Course not found</div>
    );
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-80 h-screen bg-gradient-to-b from-[#e0f7fa] to-blue-100 border-r-2 shadow-lg sticky top-0">
        <h2 className="text-2xl font-black bg-gradient-to-r from-[#1ddbb2] to-[#0bb389] p-4 text-white text-center shadow-md">
          {course.courseName}
        </h2>
  
        <div className="flex-grow overflow-y-auto px-2 py-4">
          {course.chapters?.length > 0 ? (
            course.chapters.map((chapter, index) => (
              <div
                key={chapter._id}
                onClick={() => setActiveChapter(chapter)}
                className={`flex items-center rounded-lg p-4 cursor-pointer transition-all duration-200 shadow-md mb-2 ${
                  activeChapter?._id === chapter._id
                    ? "bg-gradient-to-r from-[#1ddbb2] to-[#0bb389] text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <div
                  className={`flex items-center justify-center font-semibold text-xl h-12 w-12 rounded-full mr-4 shadow-lg ${
                    activeChapter?._id === chapter._id
                      ? "bg-white text-[#1ddbb2]"
                      : "bg-gradient-to-br from-[#1ddbb2] to-[#0bb389] text-white"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <span
                    className={`text-md font-medium ${
                      activeChapter?._id === chapter._id
                        ? "text-white"
                        : "text-gray-800"
                    }`}
                  >
                    {chapter.chapterName}
                  </span>
                  <div
                    className={`text-sm flex items-center mt-1 ${
                      activeChapter?._id === chapter._id
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    <FaClock className="mr-2" />
                    {chapter.duration}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center font-bold mt-4">
              No chapters available
            </div>
          )}
        </div>
  
        <div className="p-4 text-sm text-gray-600 text-center border-t">
          <span>Last updated: {new Date().toLocaleDateString()} by Ujjwal</span>
        </div>
      </div>
  
      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
  {!activeChapter ? (
    <div className="welcome-section flex flex-col items-center justify-center h-full text-gray-500 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="z-10 text-center px-6 py-10 md:px-12 md:py-16">
        <h2 className="text-5xl font-extrabold text-[#1ddbb2] mb-6 leading-tight tracking-wide shadow-lg">
          Welcome to {course.courseName}!
        </h2>
        
        <p className="text-2xl text-white mb-8 font-medium leading-relaxed">
          Select a chapter from the sidebar to start learning and take your skills to the next level.
        </p>
      </div>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/7670836-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div>
      {/* Title and Description with Home Icon */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#1ddbb2]">{course.courseName}</h1>
          <p className="text-lg">{course.description}</p>
        </div>

        {/* Home Icon */}
        <Link
          to="/"
          className="text-5xl text-[#1ddbb2] hover:text-[#0bb389] transition-all duration-200 sticky"
        >
          <FaHome />
        </Link>
      </div>

      {/* Active Chapter Content */}
      <h2 className="text-2xl font-semibold mt-4">{activeChapter.chapterName}</h2>
      <p className="mt-2">{activeChapter.about}</p>

      {videoId ? (
        <div className="mt-6 flex justify-center">
          <YouTube
            videoId={videoId}
            opts={{
              height: "390",
              width: "640",
              playerVars: { autoplay: 0 },
            }}
          />
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">Video not available.</p>
      )}

      <div className="mt-6">
        {activeChapter.topics?.length > 0 ? (
          <div className="mb-3">
            {activeChapter.topics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-sky-50 mb-3 shadow-lg rounded-lg p-4 border border-gray-200"
              >
                <h4 className="text-lg font-bold text-black">{topic.title}</h4>
                <p className="text-gray-600 mt-2">{topic.description}</p>
                {topic.code && (
                  <pre className="bg-gray-100 p-2 mt-3 rounded overflow-x-auto">
                    <code className="text-sm">{topic.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No topics available for this chapter.</p>
        )}
      </div>
    </div>
  )}
</div>

    </div>
  );
  
}

export default Start;
