import axios from "axios";
import { useNavigate } from "react-router-dom";

// Login (Returns promise in login.jsx)
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post("http://localhost:8085/api/users/login", {
    email,
    password,
  });

  // Return a Promise
  return response.data;
};

// Register (Returns promise in login.jsx)
export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(
    "http://localhost:8085/api/users/register",
    {
      email,
      password,
      username,
    }
  );

  // Return a Promise
  return response.data;
};

// Profile (Returns promise in login.jsx)
export const profileAPI = async (token) => {
  const response = await axios.get("http://localhost:8085/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Return a Promise
  return response.data;
};

// Admin (Returns promise in login.jsx)
export const adminAPI = async (token) => {
  const response = await axios.get("http://localhost:8085/api/users/admin", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Return a Promise
  return response.data;
};
