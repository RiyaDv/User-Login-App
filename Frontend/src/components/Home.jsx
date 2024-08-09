import React from "react";
import { Link } from "react-router-dom";
import { FaUserLock, FaUserPlus, FaRocket } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to User Login App</h1>
        <p className="text-2xl mb-10 mx-auto max-w-4xl">
          Sign up or log in to access exclusive content and features!
        </p>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-white text-blue-500 px-10 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors flex items-center space-x-2">
              <FaUserLock className="text-blue-500" />
              <span>Login</span>
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-white text-green-500 px-10 py-4 rounded-lg font-semibold hover:bg-green-100 transition-colors flex items-center space-x-2">
              <FaUserPlus className="text-green-500" />
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-bold mb-16">Why Join Us?</h2>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {/* Feature 1 */}
            <div className="text-center max-w-xs">
              <FaUserLock className="text-blue-600 mx-auto text-8xl mb-5" />
              <h3 className="text-2xl font-bold mb-2">Secure Login</h3>
              <p>Protect your data with our secure authentication system.</p>
            </div>
            {/* Feature 2 */}
            <div className="text-center max-w-xs">
              <FaUserPlus className="text-green-600 mx-auto text-8xl mb-5" />
              <h3 className="text-2xl font-bold mb-2">Easy Sign Up</h3>
              <p>Join our community with a simple and quick sign-up process.</p>
            </div>
            {/* Feature 3 */}
            <div className="text-center max-w-xs">
              <FaRocket className="text-red-600 mx-auto text-8xl mb-5" />
              <h3 className="text-2xl font-bold mb-2">Exclusive Content</h3>
              <p>Access content and features exclusive to our members.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
