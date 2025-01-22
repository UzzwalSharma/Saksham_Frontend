import React from "react";
import toast, { Toaster } from "react-hot-toast";

// Freepik Images (replace URLs with actual links)
const features = [
  {
    id: 1,
    title: "Progress Reports and Insights",
    description:
      "Track your learning journey with detailed analytics. See your strengths, areas to improve, and achievements.",
    image: "/11552509.jpg",
  },
  {
    id: 2,
    title: "Offline Mode",
    description:
      "Access your courses and study materials anytime, anywhere, even without the internet.",
    image: "/8202574.jpg",
  },
  {
    id: 3,
    title: "Live Quizzes and Competitions",
    description:
      "Test your knowledge in real-time with live quizzes and challenges. Compete with learners globally!",
    image: "/7605110.jpg",
  },
  {
    id: 4,
    title: "MCQs",
    description:
      "Practice multiple-choice questions tailored to your course topics. Perfect for quick revisions.",
    image: "/34654418_8196385.jpg",
  },
  {
    id: 5,
    title: "Assignments",
    description:
      "Enhance your understanding with practical assignments designed for each topic.",
    image: "/263656505_11159075.jpg",
  },
];

const notify = (feature) => {
  toast.success(`You’ll be notified about ${feature}! when they got released`, {
    style: {
      border: "1px solid #2ecc71",
      padding: "16px",
      color: "#2ecc71",
    },
    iconTheme: {
      primary: "#2ecc71",
      secondary: "#FFFAEE",
    },
  });
};

const UpcomingFeatures = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-green-100 via-white to-yellow-50">
      <Toaster />
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        Upcoming Features to Empower Your Learning!
      </h2>
      <p className="text-center text-gray-600 mb-10">
        We’re working on these exciting features to make your experience even
        better. Stay tuned!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button
                onClick={() => notify(feature.title)} 
                className="bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] px-4 py-2 rounded hover:bg-green-600"
              >
                Notify Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingFeatures;
