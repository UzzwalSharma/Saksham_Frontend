import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import ReactConfetti from "react-confetti";
import { PlayIcon, CopyIcon } from "lucide-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const Finish = () => {
  const { courseId } = useParams(); // Get courseId from the URL params
  const [courseData, setCourseData] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [copyMessage, setCopyMessage] = useState("");

  // Handle window resizing for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show confetti after a slight delay
  useEffect(() => {
    const timeoutId = setTimeout(() => setConfetti(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  // Fetch course data using the courseId
  useEffect(() => {
    fetch(`https://saksham-backend-ul8k.onrender.com/api/createcourse/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        setCourseData(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, [courseId]);

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/createcourse/finish/${courseId}`;
    const message = `🚀 Check out this amazing course I Just created on Saksham: Your personalized AI course platform! Explore it here: ${shareUrl}`;
    
    navigator.clipboard
      .writeText(message)
      .then(() => {
        setCopyMessage("🚀 Message copied! Spread the word about Saksham!");
        setTimeout(() => setCopyMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        console.error("Failed to copy message:", error);
        setCopyMessage("Failed to copy message");
      });
  };
  

  if (!courseData) {
    return (
      <div>
        <h1>Fetching data from backend...</h1>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/course/${courseId}`;
  const shareTitle = `Check out this amazing course: ${courseData.courseName}`;

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-6">
      {confetti && <ReactConfetti width={windowWidth} height={window.innerHeight} />}

      <div className="max-w-5xl bg-white border-4 border-gray-300 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Course Thumbnail */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={courseData.thumbnail || "/10631818.jpg"}
            alt="Course Thumbnail"
            className="rounded-2xl shadow-lg border-4 border-gray-200 max-w-full h-auto"
          />
        </div>

        {/* Course Details */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <CheckCircleIcon className="h-16 w-16 text-[#1ddbb2] mx-auto" />
            <h1 className="text-4xl font-bold text-black">Congratulations!</h1>
            <p className="text-lg text-gray-600">
              Your course <span className="font-black">{courseData.courseName}</span> is ready!{" "}
              <span className="font-semibold text-black">"Keep studying and exploring Saksham!"</span>
            </p>
          </div>

          {/* Course Summary */}
          <div className="border-2 border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Course Summary</h2>
            <p className="text-gray-600 mb-4">{courseData.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full">
                <UserIcon className="h-5 w-5 mr-2" />
                Level: {courseData.level}
              </span>
              <span className="flex items-center px-4 py-2">
                <ClockIcon className="h-5 w-5 mr-2" />
                Duration: {courseData.duration}
              </span>
              <span className="flex items-center px-4 py-2">
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Chapters: {courseData.chapters.length}
              </span>
            </div>
          </div>

          {/* Share with Friends */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black">Share with Friends</h2>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <FacebookShareButton url={shareUrl} quote={shareTitle}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={shareTitle}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl} title={shareTitle} summary={courseData.description}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl} title={shareTitle}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
              <button onClick={handleCopyLink} className="flex items-center gap-2 px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                <CopyIcon className="h-5 w-5" />
                <span>Copy URL</span>
              </button>
            </div>
            {copyMessage && <p className="text-sm text-green-600">{copyMessage}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={`/createcourse/start/${courseId}`}>
              <span
                className="bg-[#1ddbb2] text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-[#17a894] transition duration-300"
              >
                <PlayIcon className="h-5 w-5" />
                <span>Start Course</span>
              </span>
            </Link>
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-[#1ddbb2] to-[#17a894] text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 hover:from-[#17a894] hover:to-[#1ddbb2] transition duration-300"
            >
              <ArrowRightIcon className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
