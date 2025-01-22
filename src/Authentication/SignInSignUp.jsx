import React, { useEffect } from 'react';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';

const SignInSignUp = ({ isSignUp = false }) => {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      toast.success('Successfully signed in!');
    }
  }, [isSignedIn]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side with Image */}
      <div 
        className="w-1/2 bg-cover bg-center relative" 
        style={{ backgroundImage: "url('/Login.jpg')" }}>
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Right Side with Sign In/Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-gray-800">Welcome to SAKSHAM</h2>
            <p className="text-gray-600 mt-2">Please {isSignUp ? 'sign up' : 'sign in'} to continue</p>
          </div>
          <div className=" rounded-lg  p-6 space-y-4 transform transition-all duration-500 ease-in-out hover:scale-105">
            {isSignUp ? <SignUp /> : <SignIn />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
