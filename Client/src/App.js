// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error/Error";
import { AuthProvider } from "./Pages/Auth/auth";
import Login from "./Pages/Auth/Login";
import RegisterForm from "./Pages/Auth/Register";
import PolicyDetails from "./Pages/PolicyDetails/policyDetails";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/PolicyDetails" element={<PolicyDetails/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;