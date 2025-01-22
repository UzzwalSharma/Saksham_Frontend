// src/components/ProtectedRoute.js
import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    toast.error('You need to sign in or sign up to access this page.');
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
