import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PublicNavbar from "./components/PublicNavbar";
import PrivateNavbar from "./components/PrivateNavbar";
import UserProfile from "./components/UserProfile";
import AdminProfile from "./components/AdminProfile";

function App() {
  const userData = useSelector((state) => state?.auth?.user);

  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        {userData ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
