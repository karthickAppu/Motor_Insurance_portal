// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error/Error";
import { AuthProvider } from "./Pages/Auth/auth";
import Login from "./Pages/Auth/Login";
import RegisterForm from "./Pages/Auth/Register";
import PolicyDetails from "./Pages/PolicyDetails/policyDetails";
import Renewal from "./Pages/PolicyDetails/renewal";
import Claim from "./Pages/PolicyDetails/claim";
import ViewPolicy from "./Pages/PolicyDetails/viewPolicy";


import Home from "./Pages/Home/home.js";
import Contact from "./Pages/Home/contact.js";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/PolicyDetails" element={<PolicyDetails/>} />
          <Route path="/Renewal" element={<Renewal/>} />
          <Route path="/Claim" element={<Claim/>} />
          <Route path="/ViewPolicy" element={<ViewPolicy/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Error />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;