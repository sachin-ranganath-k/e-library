import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DummyComponent from "../components/users/pages/dummyComponent";
import UserRegister from "../components/users/pages/UserRegister";
import toast, { Toaster } from "react-hot-toast";
import alert from "../toaster/toaster";
import UserLogin from "../components/users/pages/UserLogin";
import UserDashboard from "../components/users/pages/userDashboard";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";
import UploadBooks from "../components/admin/UploadBooks";
import UserProfile from "../components/users/pages/UserProfile";
import Logout from "../components/users/pages/Logout";
import Favorites from "../components/users/pages/Favorites";

const RouteLinks = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<DummyComponent />} /> */}
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/UploadBooks" element={<UploadBooks />} />
        <Route path="/MyProfile" element={<UserProfile />} />
        <Route path="/MyFavorites" element={<Favorites />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
};

export default RouteLinks;
