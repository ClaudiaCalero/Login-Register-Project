import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

function HomePage() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  return (
    <div className={`container ${isRegisterActive ? 'right-panel-active' : ''}`} id="container">  
      <div className="form-container register-container">
        <RegisterForm />
      </div>
      <div className="form-container login-container">
        <LoginForm />
      </div>
      <div className="slide-container">
        <div className="slide">
          <div className="slide-panel slide-left">
            <h1 className="title">Hello <br /> friends</h1>
            <p>If you have an account, login here and have fun!</p>
            <button className="ghost" id="login" onClick={handleLoginClick}>Login</button>
          </div>
          <div className="slide-panel slide-right">
            <h1 className="title">Start your <br /> journey now</h1>
            <p>If you don't have an account yet, join us and start your journey.</p>
            <button className="ghost" id="register" onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

