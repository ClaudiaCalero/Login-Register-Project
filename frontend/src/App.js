import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from './pages/HomePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PageNotFound from './pages/PageNotFound';
import '../src/App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="TU_GOOGLE_CLIENT_ID_MOCK">      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
