import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { profileAPI } from "../services/userService";
import AlertMessage from "./AlertMessage";

const UserProfile = () => {
  // Get user token from store
  const userData = useSelector((state) => state?.auth?.user);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profileAPI(userData?.token),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      {/* Display error message */}
      {isLoading && (
        <AlertMessage type="loading" message="Loading Please Wait..." />
      )}

      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}

      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="text-center mb-6">
          <FaUserCircle className="text-6xl text-gray-800 mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-800">
            {data?.user?.username}
          </h1>
          <p className="text-gray-600">{data?.user?.email}</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            User Information
          </h2>
          <p className="text-gray-600 mb-4">
            Role: <span className="font-bold">{data?.user?.role}</span>
          </p>
          <p className="text-gray-600">
            Welcome to User Profile, {data?.user?.username}! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
