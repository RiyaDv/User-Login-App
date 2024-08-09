import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const PublicNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-semibold flex items-center space-x-2"
        >
          <FaHome />
          <span>Home</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/login"
            className="text-white flex items-center space-x-2 hover:text-gray-400"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <Link
            to="/register"
            className="text-white flex items-center space-x-2 hover:text-gray-400"
          >
            <FaUserPlus />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
