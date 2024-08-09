import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { loginAPI } from "../services/userService";
import { loginAction } from "../redux/slices/authSlice";
import AlertMessage from "./AlertMessage";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  // Mutation
  const mutation = useMutation({
    mutationFn: loginAPI,
    mutationKey: ["login"],
  });

  // Dispatch
  const dispatch = useDispatch();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "apple@xyz",
      password: "Apple!123",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Implementation of form submission
      mutation
        .mutateAsync(values)
        .then((data) => {
          console.log(data);

          // Dispatch action from Redux
          dispatch(loginAction(data));

          // Save the user in localStorage
          localStorage.setItem("userInfo", JSON.stringify(data));
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login to Your Account
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
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 text-sm font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                onBlur={formik.handleBlur}
                required
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

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
                autoComplete="current-password"
                onBlur={formik.handleBlur}
                required
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {formik.errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
