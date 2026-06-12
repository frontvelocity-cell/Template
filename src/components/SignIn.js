```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  const [rememberMe, setRememberMe] = useState(false);

  // Unified form data handler - handles both individual state and formData object
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'rememberMe') {
      setRememberMe(checked);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Merged submit handler with enhanced validation and feedback
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Sign up validation
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign up:', formData);
      alert('Account created successfully! Welcome to Skyways.');
    } else {
      // Sign in validation
      console.log('Sign in:', { 
        email: formData.email, 
        password: formData.password, 
        rememberMe 
      });
      alert('Signed in successfully!');
    }
  };

  // Benefits data for sign-up page enhancement
  const benefits = [
    {
      icon: '✈️',
      title: 'Faster Booking',
      description: 'Save your preferences and book flights in seconds'
    },
    {
      icon: '🎯',
      title: 'Personalized Deals',
      description: 'Get exclusive offers tailored to your travel patterns'
    },
    {
      icon: '📱',
      title: 'Mobile Boarding',
      description: 'Access mobile boarding passes and real-time updates'
    },
    {
      icon: '🏆',
      title: 'Loyalty Rewards',
      description: 'Earn miles and unlock premium benefits'
    }
  ];

  return (
    <div className="signin-page">
      <div className="container">
        <div className="signin-content">
          <div className="signin-form-section">
            <div className="signin-form-card card">
              <div className="form-header">
                <h1 className="form-title">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h1>
                <p className="form-subtitle">
                  {isSignUp 
                    ? 'Join Skyways and unlock exclusive travel benefits'
                    : 'Sign in to your Skyways account'
                  }
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="signin-form">
                {/* Name fields for sign up */}
                {isSignUp && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name*</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name*</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}
                
                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Phone number for sign up */}
                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                )}
                
                {/* Password field */}
                <div className="form-group">
                  <label htmlFor="password">Password*</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Confirm password for sign up */}
                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password*</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
                
                {/* Remember me and forgot password for sign in */}
                {!isSignUp && (
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      Remember me
                    </label>
                    <Link to="/forgot-password" className="forgot-password">
                      Forgot password?
                    </Link>
                  </div>
                )}
                
                <button type="submit" className="btn btn-primary submit-btn">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </button>
              </form>
              
              {/* Social sign in section */}
              <div className="form-divider">
                <span>or</span>
              </div>
              
              <div className="social-signin">
                <button className="btn social-btn google-btn">
                  <span className="social-icon">G</span>
                  Continue with Google
                </button>
                <button className="btn social-btn facebook-btn">
                  <span className="social-icon">f</span>
                  Continue with Facebook
                </button>
              </div>
              
              {/* Form toggle */}
              <div className="form-footer">
                <p>
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <button 
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="toggle-form-btn"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>
              
              {/* Terms and conditions for sign up */}
              {isSignUp && (
                <div className="terms-notice">
                  <p>
                    By creating an account, you agree to our 
                    <a href="#">Terms of Service</a> and 
                    <a href="#">Privacy Policy</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Benefits section - only show on larger screens or when signing up */}
          <div className="signin-benefits">
            <div className="benefits-content">
              <h2>Why Join Skyways?</h2>
              <p>Unlock a world of travel benefits and make every journey extraordinary.</p>
              
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="testimonial">
                <blockquote>
                  "Skyways has transformed how I travel. The seamless booking and loyalty rewards make every trip a pleasure."
                </blockquote>
                <cite>— Sarah Johnson, Frequent Traveler</cite>
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