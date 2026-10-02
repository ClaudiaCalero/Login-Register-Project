import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    try {
      await axios.post('http://localhost:8080/reset-password', { password });
      setMessage('Password updated successfully!');
      setTimeout(() => navigate('/login'), 2000); 
    } catch (error) {
      setMessage('Failed to reset password. Link might be expired.');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '450px', minHeight: 'auto', padding: '40px 0' }}>
      <form onSubmit={handleSubmit}>
        <h3>Reset Password</h3>
        <p style={{ margin: '10px 0 20px' }}>Please enter your new password below.</p>
        
        <div style={{ width: '100%', textAlign: 'left' }}>
          <label>New Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="New password" 
            required 
          />
        </div>

        <div style={{ width: '100%', textAlign: 'left', marginTop: '10px' }}>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm new password" 
            required 
          />
        </div>

        {message && <p style={{ fontSize: '13px', color: '#ff4b2b', margin: '10px 0' }}>{message}</p>}

        <button type="submit" style={{ width: '100%', maxWidth: '100%' }}>Update Password</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
