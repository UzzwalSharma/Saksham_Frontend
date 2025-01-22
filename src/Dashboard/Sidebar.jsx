import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome,FaTh, FaSearch, FaUserAlt, FaCog, FaInfoCircle } from 'react-icons/fa'; // Updated icons

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="fixed h-full md:w-1/5 p-5 bg-white shadow-xl">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center space-y-4 mb-8">
  <img
    src="/saksham logo-modified.png"
    alt="Saksham Logo"
    className="h-16 w-16 object-contain border-4 border-gradient-to-r from-[#1ddbb2] to-[#ffcc00] rounded-full"
  />
  <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00]">
    SAKSHAM
  </h1>
  <p className="text-lg font-semibold text-gray-800 mt-2">
    "BE SAKSHAM"
  </p>
  <hr className="w-3/4 my-4 border-t-2 border-gray" />
</div>

      {/* Sidebar Links */}
      <div className="space-y-6">
        <Link
          to="/"
          className={`flex items-center space-x-4 text-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
            location.pathname === '/dashboard/home'
              ? 'bg-[#1ddbb2] text-white shadow-lg transform scale-105'
              : 'text-black hover:bg-[#f0f0f0] hover:scale-105'
          }`}
        >
          <FaHome className="text-2xl text-gray-500" />
          <span>Home</span>
        </Link>
        <Link
          to="/dashboard"
          className={`flex items-center space-x-4 text-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
            location.pathname === '/dashboard'
              ? 'bg-[#1ddbb2] text-white shadow-lg transform scale-105'
              : 'text-black hover:bg-[#f0f0f0] hover:scale-105'
          }`}
        >
           <FaTh className="text-2xl text-gray-500" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/dashboard/explore"
          className={`flex items-center space-x-4 text-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
            location.pathname === '/dashboard/explore'
              ? 'bg-[#1ddbb2] text-white shadow-lg transform scale-105'
              : 'text-black hover:bg-[#f0f0f0] hover:scale-105'
          }`}
        >
          <FaSearch className="text-2xl text-gray-500" />
          <span>Explore</span>
        </Link>

        <Link
          to="/dashboard/profile"
          className={`flex items-center space-x-4 text-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
            location.pathname === '/dashboard/profile'
              ? 'bg-[#1ddbb2] text-white shadow-lg transform scale-105'
              : 'text-black hover:bg-[#f0f0f0] hover:scale-105'
          }`}
        >
          <FaUserAlt className="text-2xl text-gray-500" />
          <span>Profile</span>
        </Link>

        <Link
          to="/dashboard/settings"
          className={`flex items-center space-x-4 text-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
            location.pathname === '/dashboard/settings'
              ? 'bg-[#1ddbb2] text-white shadow-lg transform scale-105'
              : 'text-black hover:bg-[#f0f0f0] hover:scale-105'
          }`}
        >
          <FaCog className="text-2xl text-gray-500" />
          <span>Settings</span>
        </Link>

        <Link
          to="/dashboard/about"
          className={`flex items-center space-x-4 text-lg py-3 px-4 rounded-lg transition duration-300 ease-in-out ${
            location.pathname === '/dashboard/about'
              ? 'bg-[#1ddbb2] text-white shadow-lg transform scale-105'
              : 'text-black hover:bg-[#f0f0f0] hover:scale-105'
          }`}
        >
          <FaInfoCircle className="text-2xl text-gray-500" />
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
