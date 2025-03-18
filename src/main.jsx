import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate
} from 'react-router-dom';
import { ErrorPage, SignUpPage, LoginPage, HomePage } from './components/index.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Public Route Component (Prevents logged-in users from accessing login/signup)
const PublicRoute = ({ element }) => {
  return !!localStorage.getItem("token") ? <Navigate to="/home" replace /> : element;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="/signup" element={<PublicRoute element={<SignUpPage />} />} />
      <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
      <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
