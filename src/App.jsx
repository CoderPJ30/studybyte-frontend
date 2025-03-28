import React, { useState, useEffect } from "react"
import { Toaster } from "react-hot-toast";
import { Outlet } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider.jsx';
import NavigationBar from "./components/common/NavigationBar.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-zinc-900">Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 items-center">
      <UserContextProvider >
        <Toaster position="top-right" />
        {user && <NavigationBar />}
        <Outlet />
        {user && <Footer />}
      </UserContextProvider>
    </div>
  )
}

export default App
