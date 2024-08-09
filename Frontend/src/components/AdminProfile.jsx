import React from "react";
import { FaUserShield } from "react-icons/fa";
import AlertMessage from "./AlertMessage";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { adminAPI } from "../services/userService";

const AdminProfile = () => {
  const adminData = JSON.parse(localStorage.getItem("userInfo"));

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["admin"],
    queryFn: () => adminAPI(adminData?.token),
  });

  if (data?.user?.role !== "admin") {
    return (
      <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg text-center">
        <AlertMessage
          type="error"
          message="You are not authorized to view this page. Admin Only."
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Display error message */}
      {isLoading && (
        <AlertMessage type="loading" message="Loading Please Wait..." />
      )}

      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}

      <div className="text-center mb-8">
        <FaUserShield className="text-6xl text-red-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800">
          {data?.user?.username}
        </h1>
        <p className="text-gray-600">{data?.user?.email}</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Admin Panel
        </h2>
        <p className="text-gray-600">
          Role:
          <span className="font-bold text-red-600">{data?.user?.role}</span>
        </p>
        Welcome to Admin Profile, {data?.user?.username}! 🛡️
      </div>
    </div>
  );
};

export default AdminProfile;
