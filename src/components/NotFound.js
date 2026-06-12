```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  // Merged helpful links data structure from second version
  const helpfulLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/flights', label: 'Search Flights', icon: '✈️' },
    { to: '/destinations', label: 'Destinations', icon: '🌍' },
    { to: '/deals', label: 'Special Deals', icon: '🎯' },
    { to: '/help', label: 'Help Center', icon: '❓' },
    { to: '/check-in', label: 'Check-in', icon: '📱' },
    { to: '/manage-booking', label: 'Manage Booking', icon: '📋' },
    { to: '/loyalty', label: 'Loyalty Program', icon: '⭐' }
  ];

  // Enhanced common issues from second version
  const commonIssues = [
    {
      title: 'Looking for your booking?',
      description: 'Manage your existing reservations and check flight status.',
      action: 'Manage Booking',
      link: '/manage-booking'
    },
    {
      title: 'Need to check in?',
      description: 'Get your boarding pass and select seats online.',
      action: 'Check In',
      link: '/check-in'
    },
    {
      title: 'Flight information?',
      description: 'Search for flights and compare prices.',
      action: 'Search Flights',
      link: '/flights'
    }
  ];

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        {/* Merged error illustration with enhanced visual design */}
        <div className="error-illustration">
          <div className="plane-icon">✈️</div>
          <div className="not-found-code">404</div>
        </div>
        
        {/* Enhanced error text content */}
        <div className="error-text">
          <h1 className="not-found-title">Oops! This flight has been cancelled</h1>
          <p className="not-found-text">
            The page you're looking for seems to have taken off without us. 
            It might have been moved, deleted, or you entered the wrong URL.
            Don't worry, we'll help you get back on track.
          </p>
        </div>
        
        {/* Primary action buttons */}
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            Take Me Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary"
          >
            Go Back
          </button>
          <Link to="/help" className="btn btn-secondary">
            Get Help
          </Link>
        </div>
        
        {/* Enhanced helpful links section with icons */}
        <div className="helpful-links-section">
          <h2>Where would you like to go?</h2>
          <div className="helpful-links">
            {helpfulLinks.map((link, index) => (
              <Link key={index} to={link.to} className="helpful-link">
                <span className="link-icon">{link.icon}</span>
                <span className="link-label">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Common issues section from second version */}
        <div className="common-issues">
          <h2>Maybe you were looking for...</h2>
          <div className="issues-grid">
            {commonIssues.map((issue, index) => (
              <div key={index} className="issue-card">
                <h3 className="issue-title">{issue.title}</h3>
                <p className="issue-description">{issue.description}</p>
                <Link to={issue.link} className="btn btn-secondary issue-action">
                  {issue.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced help section with multiple contact options */}
        <div className="help-section">
          <div className="help-icon">✈️</div>
          <h3>Need assistance?</h3>
          <p className="help-description">
            Our 24/7 customer service team is here to help.
            <br />
            Call us at <strong className="phone-number">1-800-SKYWAYS</strong> or visit our help center.
          </p>
          <div className="help-options">
            <Link to="/help" className="help-link">
              📞 Contact Support
            </Link>
            <Link to="/help" className="help-link">
              💬 Live Chat
            </Link>
            <Link to="/help" className="help-link">
              📧 Email Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
```

```css
/* NotFound.css - Merged and optimized styles for 404 page */
/* Consolidated all duplicate styles and enhanced with new features */

/* Main container - centered layout with full viewport height */
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
}

/* Content wrapper with max width constraint */
.not-found-content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

/* Error illustration section with plane icon and 404 code */
.error-illustration {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.plane-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

.not-found-code {
  font-size: 8rem;
  font-weight: 700;
  color: #2e6bff;
  margin-bottom: 0.5rem;
  line-height: 1;
}

/* Error text content */
.error-text {
  margin-bottom: 2rem;
}

.not-found-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
}

.not-found-text {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Action buttons section */
.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

/* Button styles - merged and optimized from both versions */
.btn {
  display: inline-block;
  padding: 14px 28px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 140px;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background-color: #2e6bff;
  color: white;
  border-color: #2e6bff;
}

.btn-primary:hover {
  background-color: #1e5bef;
  border-color: #1e5bef;
  text-decoration: none;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #2e6bff;
  border-color: #2e6bff;
}

.btn-secondary:hover {
  background-color: #2e6bff;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

/* Enhanced helpful links section */
.helpful-links-section {
  margin-bottom: 3rem;
}

.helpful-links-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1.5rem;
}

.helpful-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.helpful-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f8faff;
  border-radius: 8px;
  text-decoration: none;
  color: #0f172a;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.helpful-link:hover {
  background: #e0edff;
  border-color: #2e6bff;
  text-decoration: none;
  transform: translateY(-2px);
}

.link-icon {
  font-size: 1.5rem;
}

.link-label {
  font-weight: 500;
}

/* Common issues section */
.common-issues {
  margin-bottom: 3rem;
}

.common-issues h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1.5rem;
}

.issues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.issue-card {
  background: #f8faff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.issue-card:hover {
  border-color: #2e6bff;
  transform: translateY(-2px);
}

.issue-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.issue-description {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.issue-action {
  font-size: 0.9rem;
  padding: 8px 16px;
  min-width: auto;
}

/* Enhanced help section */
.help-section {
  background: #f8faff;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
}

.help-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.help-section h3 {
  color: #0f172a;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.help-description {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.phone-number {
  color: #2e6bff;
  font-weight: 600;
}

.help-options {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.help-link {
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 10px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
}

.help-link:hover {
  color: #2e6bff;
  background-color: rgba(46, 107, 255, 0.1);
  text-decoration: none;
  transform: translateY(-1px);
}

/* Floating animation for plane icon */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive design - merged and optimized media queries */
@media (max-width: 768px) {
  .not-found-code {
    font-size: 6rem;
  }
  
  .not-found-title {
    font-size: 2rem;
  }
  
  .not-found-text {
    font-size: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
  }
  
  .helpful-links {
    grid-template-columns: 1fr;
  }
  
  .issues-grid {
    grid-template-columns: 1fr;
  }
  
  .help-options {
    flex-direction: column;
    gap: 1rem;
  }
  
  .plane-icon {
    font-size: 3rem;
  }
  
  .help-section {
    padding: 1.5rem;
  }
  
  .helpful-links-section h2,
  .common-issues h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .not-found-container {
    padding: 15px;
  }
  
  .not-found-code {
    font-size: 4.5rem;
  }
  
  .not-found-title {
    font-size: 1.5rem;
  }
  
  .help-section {
    padding: 1rem;
    margin-top: 2rem;
  }
  
  .helpful-links-section,
  .common-issues {
    margin-bottom: 2rem;
  }
  
  .issue-card,
  .helpful-link {
    padding: 1rem;
  }
  
  .helpful-links-section h2,
  .common-issues h2 {
    font-size: 1.2rem;
  }
}
```