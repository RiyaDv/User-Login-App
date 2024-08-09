import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../services/userService";
import AlertMessage from "./AlertMessage";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Register = () => {
  // Mutation
  const mutation = useMutation({
    mutationFn: registerAPI,
    mutationKey: ["register"],
  });

  // Navigation
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Handle registration logic here
      mutation
        .mutateAsync(values)
        .then((data) => {
          // Redirect user to login page
          navigate("/login");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Create Your Account
        </h2>

        {/* Display error message */}
        {mutation.isPending && (
          <AlertMessage type="loading" message="Loading Please Wait..." />
        )}
        {mutation.isSuccess && (
          <AlertMessage type="success" message="Login Success" />
        )}
        {mutation.isError && (
          <AlertMessage
            type="error"
            message={mutation.error.response.data.message}
          />
        )}

        <form onSubmit={formik.handleSubmit}>
          {/* Username Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 text-sm font-semibold"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                {...formik.getFieldProps("username")}
                onBlur={formik.handleBlur}
                required
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 text-sm font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("email")}
                required
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 text-sm font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("password")}
                required
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-purple-500 hover:text-purple-600 transition-colors"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
