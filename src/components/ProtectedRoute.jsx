import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // 🔐 If no token found, redirect to login
    return <Navigate to="/login" replace />;
  }

  // ✅ If token exists, allow access
  return children;
};

export default ProtectedRoute;
