import React from 'react';
import { useUser } from '@clerk/clerk-react';

function Profile() {
  const { user } = useUser(); // Get the signed-in user details

  if (!user) {
    return <p>Loading user data...</p>; // Display loading message while fetching user data
  }

  // If profile image URL is not available, use a fallback or default image
  const profileImageUrl = user.profileImageUrl || user.externalAccounts[0]?.imageUrl || '/default-profile.png';

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Profile Details</h2>
      <div className="flex items-center space-x-4">
        <img
          src={profileImageUrl}
          alt={user.firstName || "User"}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-lg">{user.firstName} {user.lastName}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.username || 'No username set'}</p>
        </div>
      </div>

      {/* Additional user details */}
      <div className="mt-4">
        <p className="text-gray-800 font-medium">Account Created:</p>
        <p className="text-gray-600">{new Date(user.createdAt).toLocaleString()}</p>
      </div>
      <div>
        <p className="text-gray-800 font-medium">Last Updated:</p>
        <p className="text-gray-600">{new Date(user.updatedAt).toLocaleString()}</p>
      </div>

      {/* If user has multiple emails */}
      {user.primaryEmailAddress ? (
        <div className="mt-4">
          <p className="text-gray-800 font-medium">Primary Email:</p>
          <p className="text-gray-600">{user.primaryEmailAddress.emailAddress}</p>
        </div>
      ) : (
        <p className="text-gray-600">No primary email set</p>
      )}
    </div>
  );
}

export default Profile;
