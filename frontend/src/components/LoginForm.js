import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email,
      password
    };
    axios.post('http://localhost:8080/login' + loginUser)
      .then(() => {
        console.log('Login successful');
      })
      .catch(error => {
        console.error('Login failed', error);
        setErrorMessage('Connection failed. Please try again.');
      });
  };

  return (
    <div className="form-container login-container">
      <form action="#" onSubmit={handleSubmit}>
        <h3 className="title">Welcome back to our page!</h3>
        <p>We have missed you!</p>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' autoComplete="current-email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' autoComplete="current-password"/>
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <button type="submit">Login</button>
        <span>or use your account</span>
        <div className="social-container">
          <a href="#" className="social">
            <svg width='26' height='26' viewBox='0 0 24 24' fill="none" xmlns='http://www.w3.org/2000/svg'>
              <g transform="matrix(0.77 0 0 0.77 12 12)" >
                <path transform=" translate(-13, -12.93)" d="M 13 0 C 5.82 0 0 5.82 0 13 C 0 19.518 4.801 24.899 11.057 25.839 L 11.057 16.445 L 7.84 16.445 L 7.84 13.028 L 11.057 13.028 L 11.057 10.754000000000001 C 11.057 6.989000000000001 12.891 5.3370000000000015 16.02 5.3370000000000015 C 17.518 5.3370000000000015 18.311 5.448000000000001 18.686 5.499000000000001 L 18.686 8.482000000000001 L 16.552 8.482000000000001 C 15.224 8.482000000000001 14.76 9.741000000000001 14.76 11.161000000000001 L 14.76 13.029000000000002 L 18.653 13.029000000000002 L 18.125 16.446 L 14.76 16.446 L 14.76 25.868000000000002 C 21.105 25.006 26 19.581 26 13 C 26 5.82 20.18 0 13 0 z" fill="#2E3A59" strokeLinecap="round" />
              </g>
            </svg></a>
          <a href="#" className="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.956 10.356V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C9.06851 17.2202 6.74862 14.8682 6.74862 11.9805C6.74862 9.09275 9.06851 6.74072 11.956 6.70098C13.1562 6.69954 14.3194 7.11605 15.246 7.87898L17.846 5.27898C14.8636 2.65705 10.508 2.31981 7.15752 4.45142C3.80707 6.58303 2.26698 10.6712 3.37821 14.4836C4.48943 18.296 7.98491 20.9164 11.956 20.914C16.423 20.914 20.485 17.665 20.485 11.98C20.4781 11.4326 20.411 10.8877 20.285 10.355L11.956 10.356Z" fill="#2E3A59" />
            </svg>
          </a>
          <a href="#" className="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#2E3A59" />
            </svg></a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
