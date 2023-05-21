import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

function HomePage() {
    const navigate = useNavigate();

    const [isRegisterActive, setIsRegisterActive] = useState(false);

    const handleRegisterClick = () => {
        setIsRegisterActive(true);
        navigate('/register'); // Redireccionar a la ruta '/register'
    };

    const handleLoginClick = () => {
        setIsRegisterActive(false);
        alert('Login successful!');
    };

    return (
        <div className="container" id="container">
            <div className={`slide-container ${isRegisterActive ? 'right-panel-active' : ''}`}>
                <div className="slide">
                    <div className="slide-panel slide-right">
                        <h3 className="title">Start yout journey now!</h3>
                        <p>if you don't have an account yet, join us so we can start our journey together!</p>
                        <button className="catch" id="register" onClick={handleRegisterClick}>
                            Register
                        </button>
                    </div>
                    <div className="slide-panel slide-left">
                        <button className="catch" id="login" onClick={handleLoginClick}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                {isRegisterActive ? <RegisterForm /> : <LoginForm />}
            </div>
        </div>
    );
}

export default HomePage;
