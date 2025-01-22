import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'; // To render nested routes

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Persistent across routes) */}
      <div className="w-full md:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6">
        <Outlet /> {/* Render the current route's content */}
      </div>
    </div>
  );
};

export default DashboardLayout;
