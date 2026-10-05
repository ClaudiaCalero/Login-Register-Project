import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  /* real route
  const handleSubmit = (e) => {
     e.preventDefault();
 
     const registerUser = {
       username,
       email,
       password
     };
 
     axios.post('http://localhost:8080/register', registerUser)
       .then(() => {
         console.log('Successful registration');
       })
       .catch(error => {
         console.error('Registration failed', error);
         setErrorMessage('Registration failed. Please try again.');
       });
   };*/

  // simulation
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSuccess(false); 
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      setUsername('');
      setEmail('');
      setPassword('');
      
      setIsSuccess(true);
      setErrorMessage('Account created successfully! Welcome to the community.');
      console.log("Registro exitoso simulado.");
    }, 1200);
  };

  const googleLogin = () => {
    const url = "https://google.com";
    window.open(url, "Google Auth", "width=500,height=600");
  };

  const githubLogin = () => {
    const url = "https://github.com";
    window.open(url, "GitHub Auth", "width=500,height=600");
  };

  const linkedinLogin = () => {
    const url = "https://linkedin.com";
    window.open(url, "LinkedIn Auth", "width=500,height=600");
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <h3>Join us today!</h3>
      <p>We are excited to have you!</p>

      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" required />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
      </div>

      {errorMessage && (
        <div className={`error ${isSuccess ? 'success' : ''}`}>
          {errorMessage}
        </div>
      )}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Register'}
      </button>
      
      <span>or use your social account</span>

      <div className="social-container">
        <button type="button" className="social" onClick={githubLogin}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.0 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#2E3A59" />
          </svg>
        </button>
        <button type="button" className="social" onClick={googleLogin}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
            <path d="M11.956 10.356V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C9.06851 17.2202 6.74862 14.8682 6.74862 11.9805C6.74862 9.09275 9.06851 6.74072 11.956 6.70098C13.1562 6.69954 14.3194 7.11605 15.246 7.87898L17.846 5.27898C14.8636 2.65705 10.508 2.31981 7.15752 4.45142C3.80707 6.58303 2.26698 10.6712 3.37821 14.4836C4.48943 18.296 7.98491 20.9164 11.956 20.914C16.423 20.914 20.485 17.665 20.485 11.98C20.4781 11.4326 20.411 10.8877 20.285 10.355L11.956 10.356Z" fill="#2E3A59" />
          </svg>
        </button>
        <button type="button" className="social" onClick={linkedinLogin}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
            <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.5 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#2E3A59" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
