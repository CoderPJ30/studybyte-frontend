import React from "react"
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider.jsx';
import NavigationBar from "./components/common/NavigationBar.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
  const location = useLocation();

  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 items-center">
      <UserContextProvider >
        <Toaster position="top-right" />
        {!isAuthPage && <NavigationBar />}
        <Outlet />
        {!isAuthPage && <Footer />}
      </UserContextProvider>
    </div>
  )
}

export default App
