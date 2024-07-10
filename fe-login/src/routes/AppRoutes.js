import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import ResetPassword from '../components/Login/ResetPassword';
import SignUp from '../components/Login/SignUp';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
