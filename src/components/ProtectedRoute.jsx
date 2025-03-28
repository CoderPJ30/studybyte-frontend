import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } catch (error) {
    localStorage.removeItem("token");
    return false;
  }
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
