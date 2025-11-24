import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Reusable NavItem component for navigation links
 * @param {string} label - Display text for the link
 * @param {string} path - Route path
 * @param {function} onClick - Optional click handler (for mobile menu close)
 * @param {string} variant - Style variant: 'desktop' | 'mobile'
 */
const NavItem = ({ label, path, onClick, variant = "desktop" }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const baseClasses = "transition-all duration-200 font-semibold";
  
  const desktopClasses = `px-4 py-2.5 rounded-lg text-base ${
    isActive
      ? "text-blue-700 bg-blue-100 border border-blue-200"
      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
  }`;

  const mobileClasses = `block px-4 py-3 text-base font-medium rounded-lg ${
    isActive
      ? "bg-blue-100 text-blue-700 border border-blue-200"
      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
  }`;

  const classes = `${baseClasses} ${variant === "desktop" ? desktopClasses : mobileClasses}`;

  return (
    <Link to={path} onClick={onClick} className={classes}>
      {label}
    </Link>
  );
};

export default NavItem;

