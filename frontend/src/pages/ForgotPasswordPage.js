import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResetLink, setShowSuccessLink] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    setTimeout(() => {
      setIsLoading(false);
      setMessage('Recovery email simulated successfully! Check your inbox.');
      setShowSuccessLink(true); 
    }, 1500);
  };

  return (
    <div className="auth-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="container" style={{ maxWidth: '450px', minHeight: 'auto', padding: '40px 30px', borderRadius: '25px', backgroundColor: '#fff', boxShadow: '0 14px 28px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit} style={{ padding: '0' }}>
          <h3>Recover Password</h3>
          <p style={{ margin: '10px 0 20px', fontSize: '13px', color: '#666' }}>
            Enter your email and we'll simulate sending you a link to reset your password.
          </p>
          
          <div style={{ width: '100%', textAlign: 'left' }}>
            <label style={{ fontWeight: '600', fontSize: '14px' }}>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '10px', border: '1px solid #eee', backgroundColor: '#eee' }}
            />
          </div>

          {message && (
            <p style={{ fontSize: '13px', color: '#4bb6b7', margin: '15px 0 5px 0', fontWeight: '600' }}>
              {message}
            </p>
          )}

          {showResetLink && (
            <div style={{ marginTop: '10px', backgroundColor: '#e6f7f7', padding: '10px', borderRadius: '10px' }}>
              <Link to="/reset-password" style={{ fontSize: '13px', color: '#2e7d7e', textDecoration: 'underline', fontWeight: '700' }}>
                🔗 [Simulated Mail] Click here to go to Reset Password Page
              </Link>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            style={{ width: '100%', maxWidth: '100%', marginTop: '20px', padding: '12px 0', borderRadius: '20px', backgroundColor: '#4bb6b7', color: '#fff', border: 'none', fontWeight: '700', cursor: 'pointer' }}
          >
            {isLoading ? 'Sending...' : 'Send Link'}
          </button>
          
          <div style={{ marginTop: '20px' }}>
            <Link to="/login" style={{ fontSize: '13px', color: '#4bb6b7', textDecoration: 'none', fontWeight: '600' }}>
              ← Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
