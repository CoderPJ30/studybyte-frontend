import React from "react"
import { Toaster } from "react-hot-toast";
import { Outlet } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider.jsx';

function App() {
  return (
    <>
      <UserContextProvider >
        <Toaster position="top-right" />
        <Outlet />
      </UserContextProvider>
    </>
  )
}

export default App
