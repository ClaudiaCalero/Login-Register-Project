import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    // Validación visual previa en el Frontend
    if (password !== confirmPassword) {
      setIsSuccess(false);
      setMessage("Passwords don't match!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setMessage('Password updated successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="auth-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="container" style={{ maxWidth: '450px', minHeight: 'auto', padding: '40px 30px', borderRadius: '25px', backgroundColor: '#fff', boxShadow: '0 14px 28px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit} style={{ padding: '0' }}>
          <h3>Reset Password</h3>
          <p style={{ margin: '10px 0 20px', fontSize: '13px', color: '#666' }}>
            Please enter and confirm your new password below.
          </p>

          <div style={{ width: '100%', textAlign: 'left' }}>
            <label style={{ fontWeight: '600', fontSize: '14px' }}>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              required
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '10px', border: '1px solid #eee', backgroundColor: '#eee' }}
            />
          </div>

          <div style={{ width: '100%', textAlign: 'left', marginTop: '15px' }}>
            <label style={{ fontWeight: '600', fontSize: '14px' }}>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '10px', border: '1px solid #eee', backgroundColor: '#eee' }}
            />
          </div>

          {message && (
            <p style={{
              fontSize: '13px',
              color: isSuccess ? '#4bb6b7' : '#ff4b2b',
              margin: '15px 0 5px 0',
              fontWeight: '600'
            }}>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{ width: '100%', maxWidth: '100%', marginTop: '20px', padding: '12px 0', borderRadius: '20px', backgroundColor: '#4bb6b7', color: '#fff', border: 'none', fontWeight: '700', cursor: 'pointer' }}
          >
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
