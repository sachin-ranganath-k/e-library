import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DummyComponent from "../components/users/pages/dummyComponent";
import UserRegister  from "../components/users/pages/UserRegister";
import toast, { Toaster } from 'react-hot-toast';
import alert from "../toaster/toaster";
import UserLogin from "../components/users/pages/UserLogin";
import UserDashboard from "../components/users/pages/userDashboard";

const RouteLinks = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DummyComponent />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="UserLogin" element={<UserLogin />} />
        <Route path="UserDashboard" element={<UserDashboard />} />
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
};

export default RouteLinks;
