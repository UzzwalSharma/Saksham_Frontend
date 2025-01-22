import React, { useState } from 'react';
import { UserButton, useAuth } from '@clerk/clerk-react';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Darkmode from './Darkmode';
import { useTheme } from './components/ui/theme-provider';  // Import the useTheme hook

function Header() {
  const { isSignedIn } = useAuth();
  const { theme } = useTheme();  // Get the current theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm cursor-pointer">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-4">
        <img
          src="/saksham logo-modified.png"
          alt="Saksham Logo"
          className="h-16 w-16 object-contain border-4 border-gradient-to-r from-[#1ddbb2] to-[#ffcc00] rounded-full"
        />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00]">
          SAKSHAM
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMobileMenu} className="text-3xl">
          {isMobileMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`md:flex space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link
          to="/"
          className={`px-6 py-2 text-lg rounded-lg transition-all ${theme === 'dark' ? 'text-gold-500 hover:text-gold-300' : 'text-black hover:bg-gray-200'}`}
        >
          Home
        </Link>
        <ScrollLink
          to="features"
          smooth={true}
          duration={500}
          className={`px-6 py-2 text-lg rounded-lg transition-all ${theme === 'dark' ? 'text-gold-500 hover:text-gold-300' : 'text-black hover:bg-gray-200'}`}
        >
          Features
        </ScrollLink>
        <ScrollLink
          to="how-it-works"
          smooth={true}
          duration={500}
          className={`px-6 py-2 text-lg rounded-lg transition-all ${theme === 'dark' ? 'text-gold-500 hover:text-gold-300' : 'text-black hover:bg-gray-200'}`}
        >
          How It Works
        </ScrollLink>
        <ScrollLink
          to="testimonials"
          smooth={true}
          duration={500}
          className={`px-6 py-2 text-lg rounded-lg transition-all ${theme === 'dark' ? 'text-gold-500 hover:text-gold-300' : 'text-black hover:bg-gray-200'}`}
        >
          FAQs
        </ScrollLink>
        <Link
          to="getintouch"
          className={`px-6 py-2 text-lg rounded-lg transition-all ${theme === 'dark' ? 'text-gold-500 hover:text-gold-300' : 'text-black hover:bg-gray-200'}`}
        >
          Contact Us
        </Link>
      </nav>

      {/* Login Button or User Icon */}
      <div className="flex items-center space-x-4">
        {isSignedIn ? (
          <UserButton
            afterSignOutUrl="/" // Redirect to sign-in page after sign-out
            className="h-40"
          />
        ) : (
          <Link to="/signin">
            <Button className="px-4 py-2 text-xl bg-gradient-to-r from-[#1ddbb2] to-[#ffcc00] text-white rounded-lg shadow-md hover:opacity-90">
              LOGIN
            </Button>
          </Link>
        )}
        <Darkmode />
      </div>
    </header>
  );
}

export default Header;
