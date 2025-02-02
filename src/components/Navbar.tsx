import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/landing', label: 'Home' },
    { path: '/image-picker', label: 'Photo to Palette' },
    { path: '/palette-generator', label: 'Color Palettes' },
    { path: '/explore', label: 'Hue Wheel' },
    { path: '/color-picker', label: 'Pixel Grabber' },
    { path: '/pattern-maker', label: 'Pattern Creator' },
  ];

  return (
    <nav className="sticky top-0 bg-gray-200/95 dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800 shadow-lg backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo section - Modified for mobile */}
          <div className="flex-shrink-0 md:mr-2 flex items-center w-full md:w-auto justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-0">
              <span className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-rose-500 to-blue-800 hover:from-rose-400 hover:to-blue-700 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300">
                AXESCOLOR
              </span>
            </Link>
          </div>

          {/* Mobile menu button - Moved to absolute position */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-white transform rotate-0 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-white transform rotate-0 transition-transform duration-200" />
              )}
            </button>
          </div>

          {/* Desktop menu with adjusted dark mode colors */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="flex space-x-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                    ${location.pathname === link.path 
                      ? 'bg-gradient-to-r from-rose-50/90 to-blue-50/90 dark:from-rose-900/30 dark:to-blue-900/30' 
                      : 'hover:bg-gradient-to-r hover:from-rose-50/60 hover:to-blue-50/60 dark:hover:from-rose-900/20 dark:hover:to-blue-900/20'
                    }
                    group
                  `}
                >
                  <span className={`
                    ${location.pathname === link.path 
                      ? 'bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent' 
                      : 'text-gray-700 dark:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-blue-800 dark:group-hover:from-rose-300 dark:group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent'
                    } transition-all duration-200 font-bold
                  `}>
                    {link.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                    ${location.pathname === link.path ? 'scale-x-100' : ''}`} 
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side controls with adjusted dark mode colors */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle with adjusted colors */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gradient-to-r from-rose-50 to-blue-50 
                dark:from-rose-900/30 dark:to-blue-900/30 
                text-gray-800 dark:text-gray-200 
                hover:from-rose-100 hover:to-blue-100 
                dark:hover:from-rose-900/40 dark:hover:to-blue-900/40 
                transition-all duration-200 transform hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu - Fixed and Enhanced */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Navigation Links */}
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                  ${location.pathname === link.path
                    ? 'bg-gradient-to-r from-rose-50 to-blue-50 dark:from-rose-900/30 dark:to-blue-900/30' 
                    : 'hover:bg-gradient-to-r hover:from-rose-50/50 hover:to-blue-50/50 dark:hover:from-rose-900/20 dark:hover:to-blue-900/20'
                  }
                `}
              >
                <span className={`
                  ${location.pathname === link.path
                    ? 'bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400 bg-clip-text text-transparent' 
                    : 'text-gray-800 dark:text-gray-200'
                  } font-bold
                `}>
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <span className="ml-auto">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-blue-800 dark:from-rose-300 dark:to-blue-400" />
                  </span>
                )}
              </Link>
            ))}
            
            {/* Mobile Dark Mode Toggle - Simplified */}
            <button
              onClick={() => {
                toggleDarkMode();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium 
                text-gray-700 dark:text-gray-200
                hover:text-indigo-600 dark:hover:text-indigo-400
                transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;