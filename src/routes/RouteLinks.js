import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DummyComponent from "../components/dummyComponent";
import UserRegister  from "../components/UserRegister";
import toast, { Toaster } from 'react-hot-toast';
import alert from "../toaster/toaster";

const RouteLinks = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DummyComponent />} />
        <Route path="/UserRegister" element={<UserRegister />} />
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
};

export default RouteLinks;
