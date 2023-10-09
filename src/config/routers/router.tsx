import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./protected";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import SMSignUp from "../../pages/Layouts/SMSignup";
import SMLogin from "../../pages/Layouts/SMLogin";
import SMDashboard from "../../pages/Layouts/SMDashboard";



export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="*" element={<NotFound/>} />
           <Route path="signup" element={<SMSignUp/>} />
           <Route path="login" element={<SMLogin/>} />
           <Route path="dashboard/*" element={<Protected Screen={SMDashboard} />} />
        </Routes>
      </Router>
    </>
  );
}
