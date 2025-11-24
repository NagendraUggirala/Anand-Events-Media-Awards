import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../config/navLinks";
import NavItem from "./NavItem";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 
      bg-white border-b 
      ${isScrolled ? "shadow-md border-gray-200" : "border-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        {/* Row */}
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo - Improved Mobile Alignment */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="./images/image.png"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/Anandhlogo.png"
                  alt="Anand Logo"
                  className="w-8 h-10 md:w-10 md:h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg md:text-xl font-bold text-blue-800">
                    <span className="text-orange-500">ANAND </span>EVENTS, MEDIA, AWARDS
                  </h1>
                  <p className="text-xs text-gray-600 italic mt-1">
                    "Dharmo Rakshati Rakshitah"
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Increased Size */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navLinks.map((item) => (
              <NavItem
                key={item.path}
                label={item.label}
                path={item.path}
                variant="desktop"
              />
            ))}
          </nav>

          {/* Mobile menu button - Improved Size */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 md:p-3 text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Improved Alignment */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="space-y-2 pt-3">
              {navLinks.map((item) => (
                <NavItem
                  key={item.path}
                  label={item.label}
                  path={item.path}
                  onClick={handleNavClick}
                  variant="mobile"
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;