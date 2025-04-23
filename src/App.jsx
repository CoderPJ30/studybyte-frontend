import React from "react"
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider.jsx';
import NavigationBar from "./components/common/NavigationBar.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
  const location = useLocation();

  const isLayoutExcludedRoute =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    (location.pathname.startsWith('/book/') && location.pathname.endsWith('/read')) ||
    location.pathname === '/profile';

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 items-center">
      <UserContextProvider >
        <Toaster position="top-right" />
        {!isLayoutExcludedRoute && <NavigationBar />}
        <Outlet />
        {!isLayoutExcludedRoute && <Footer />}
      </UserContextProvider>
    </div>
  )
}

export default App
