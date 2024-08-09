import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaCogs } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/slices/authSlice";

const PrivateNavbar = () => {
  // Dispatch
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Logout Handler
  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate("/");
  };

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
            to="/profile"
            className="text-white flex items-center space-x-2 hover:text-gray-400"
          >
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link
            to="/admin"
            className="text-white flex items-center space-x-2 hover:text-gray-400"
          >
            <FaUser />
            <span>Admin</span>
          </Link>

          <button
            onClick={logoutHandler}
            className="text-white flex items-center space-x-2 hover:text-gray-400"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
