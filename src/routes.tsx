import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Courses from "./views/courses";
import SignIn from "./views/sign-in";
import SignUp from "./views/sign-up";
//import PrivateRoutes from "./private.routes";
import Dashboard from "./views/dashboard";

const Rotas: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
