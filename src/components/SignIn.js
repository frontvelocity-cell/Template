```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up:', { firstName, lastName, email, password });
      alert('Account created successfully! Welcome to Skyways.');
    } else {
      console.log('Sign in:', { email, password, rememberMe });
      alert('Signed in successfully!');
    }
  };

  return (
    <div className="signin-page">
      <div className="container" style={{ padding: '4rem 20px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p style={{ color: '#64748b' }}>
                {isSignUp ? 'Join Skyways and start earning miles' : 'Sign in to your account'}
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      fontSize: '0.875rem'
                    }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      fontSize: '0.875rem'
                    }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}
                      required
                    />
                  </div>
                </div>
              )}
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              
              {!isSignUp && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ accentColor: '#2e6bff' }}
                    />
                    <span style={{ fontSize: '0.875rem' }}>Remember me</span>
                  </label>
                  <Link to="/forgot-password" style={{ color: '#2e6bff', fontSize: '0.875rem', textDecoration: 'none' }}>
                    Forgot password?
                  </Link>
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.875rem', fontSize: '1rem', fontWeight: '600' }}
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2e6bff',
                    cursor: 'pointer',
                    marginLeft: '0.5rem',
                    textDecoration: 'underline'
                  }}
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <div style={{ 
                borderTop: '1px solid #e5e7eb', 
                padding: '1rem 0', 
                color: '#64748b', 
                fontSize: '0.875rem' 
              }}>
                Or continue with
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  className="btn btn-secondary"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <span>G</span> Google
                </button>
                <button 
                  className="btn btn-secondary"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <span>f</span> Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
```