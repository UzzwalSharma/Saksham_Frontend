import React from 'react';
import Darkmode from '@/Darkmode';

function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h2 className="text-3xl font-black text-center  text-yellow-300">
          Settings
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Preferences</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">Manage your settings here</p>
          
          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <h4 className="text-lg font-medium">Theme</h4>
            <Darkmode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
