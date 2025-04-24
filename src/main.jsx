import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate
} from 'react-router-dom';
import {
  ErrorPage, SignUpPage, LoginPage, HomePage, BookDetailsPage, BookReader, MyBooks,
  Contact, Books, Cart, Checkout, SearchPage
} from './components/index.js';
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
      <Route path="/book/:bookId" element={<ProtectedRoute element={<BookDetailsPage />} />} />
      <Route path="/book/:bookId/read" element={<ProtectedRoute element={<BookReader />} />} />
      <Route path="/books" element={<ProtectedRoute element={<Books />} />} />
      <Route path="/my-books" element={<ProtectedRoute element={<MyBooks />} />} />
      <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
      <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
      <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
      <Route path="/search" element={<ProtectedRoute element={<SearchPage />} />} />
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
