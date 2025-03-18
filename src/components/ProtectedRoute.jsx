import React from "react";
import { Navigate } from "react-router-dom";

// Function to check if the user is authenticated
const isAuthenticated = () => !!localStorage.getItem("token");

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;