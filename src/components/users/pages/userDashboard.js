import React from "react";
import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const location = useLocation();
  return <div>Welcome {location.state.emails}</div>;
};

export default UserDashboard;
