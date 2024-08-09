import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  // Initial State
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },

  // Reducers
  reducers: {
    // Login
    loginAction: (state, action) => {
      state.user = action.payload;
    },

    // Logout
    logoutAction: (state, action) => {
      // Remove user from the localStorage
      localStorage.removeItem("userInfo");
      state.user = null;
    },
  },
});

// Generate the Actions
export const { loginAction, logoutAction } = authSlice.actions;

// Generate Reducers
const authReducer = authSlice.reducer;

export default authReducer;
