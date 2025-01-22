// src/components/AuthNotifier.js
import React, { useEffect, useRef } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';

const AuthNotifier = () => {
  const { isSignedIn } = useAuth();
  const prevSignedInState = useRef(null);

  useEffect(() => {
    if (prevSignedInState.current === null) {
      // Initial mount: set previous state to current state
      prevSignedInState.current = isSignedIn;
      return;
    }

    if (isSignedIn && !prevSignedInState.current) {
      // User signed in
      toast.success('Successfully signed in!');
    } else if (!isSignedIn && prevSignedInState.current) {
      // User signed out
      toast.success('Successfully signed out!');
    }

    // Update the previous state to current state
    prevSignedInState.current = isSignedIn;
  }, [isSignedIn]);

  return null; // No visible UI
};

export default AuthNotifier;
