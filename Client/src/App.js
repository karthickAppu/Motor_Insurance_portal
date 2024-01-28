// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error/Error";
import { AuthProvider } from "./Pages/Auth/auth";
import Login from "./Pages/Auth/Login";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFCF9]">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;