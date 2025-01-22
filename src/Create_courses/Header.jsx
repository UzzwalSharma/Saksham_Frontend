import React from 'react';
import { UserButton, useAuth } from '@clerk/clerk-react';
import Darkmode from '/src/Darkmode.jsx';
const Header = () => {
  return (
    <header className="w-full shadow-sm px-8 py-2 flex items-center justify-between  dark:bg-gray-800 border-b-2 rounded-sm">
      {/* Logo Section */}
      <div
        className="flex items-center cursor-pointer group"
        onClick={() => navigate('/')}
      >
        <div className="p-2 border-4 border-gradient-to-r from-[#1ddbb2] to-[#ffcc00] rounded-full shadow-lg">
          <img
            src="/saksham logo-modified.png"
            alt="Saksham Logo"
            className="h-14 w-14 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 className="ml-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] group-hover:scale-105 transition-transform duration-300">
          SAKSHAM
        </h1>
      </div>

      {/* User Button */}
      <div className="flex items-center space-x-6">
  <UserButton
    afterSignOutUrl="/" // Redirect to sign-in page after sign-out
    className="text-lg py-2 px-4 rounded-lg shadow-md hover:bg-[#1ddbb2] hover:text-white transition-colors duration-300"
  />
   <Darkmode />
</div>


    </header>
  );
};

export default Header;
