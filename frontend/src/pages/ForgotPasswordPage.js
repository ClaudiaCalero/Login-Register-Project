import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/forgot-password', { email });
      setMessage('Recovery email sent! Check your inbox.');
    } catch (error) {
      setMessage('Error sending email. Please try again.');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '450px', minHeight: 'auto', padding: '40px 0' }}>
      <form onSubmit={handleSubmit}>
        <h3>Recover Password</h3>
        <p style={{ margin: '10px 0 20px' }}>Enter your email and we'll send you a link to reset your password.</p>
        
        <div style={{ width: '100%', textAlign: 'left' }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
        </div>

        {message && <p style={{ fontSize: '13px', color: '#4bb6b7', margin: '10px 0' }}>{message}</p>}

        <button type="submit" style={{ width: '100%', maxWidth: '100%' }}>Send Link</button>
        
        <Link to="/login" style={{ marginTop: '20px', fontSize: '13px', color: '#4bb6b7' }}>
          ← Back to Login
        </Link>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
