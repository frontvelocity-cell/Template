```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        {/* Error illustration with plane icon and 404 code */}
        <div className="error-illustration">
          <div className="plane-icon">✈️</div>
          <div className="not-found-code">404</div>
        </div>
        
        {/* Main error content */}
        <div className="error-text">
          <h1 className="not-found-title">Oops! This flight has been cancelled</h1>
          <p className="not-found-text">
            The page you're looking for seems to have taken off without us. 
            It might have been moved, deleted, or you entered the wrong URL.
            Don't worry, we'll help you get back on track.
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
          <Link to="/flights" className="btn btn-secondary">
            Search Flights
          </Link>
          <Link to="/help" className="btn btn-secondary">
            Get Help
          </Link>
        </div>
        
        {/* Popular pages section - merged from inline version */}
        <div className="popular-pages">
          <h3>Popular Pages</h3>
          <div className="popular-links">
            <Link to="/destinations" className="popular-link">
              Destinations
            </Link>
            <Link to="/deals" className="popular-link">
              Special Deals
            </Link>
            <Link to="/check-in" className="popular-link">
              Check-in
            </Link>
            <Link to="/manage-booking" className="popular-link">
              Manage Booking
            </Link>
            <Link to="/loyalty" className="popular-link">
              Loyalty Program
            </Link>
          </div>
        </div>
        
        {/* Help section - enhanced with customer service info */}
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

/* Main container - centered layout with full viewport height */
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff; /* Changed to light background for better accessibility */
}

/* Content wrapper with max width constraint */
.not-found-content {
  text-align: center;
  max-width: 600px;
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
  font-weight: 900; /* Increased from bold for better impact */
  color: #e5e7eb; /* Changed to light gray for better contrast */
  margin-bottom: 0.5rem;
  line-height: 1;
}

/* Error text content */
.error-text {
  margin-bottom: 2rem;
}

.not-found-title {
  font-size: 2.5rem;
  font-weight: 700; /* Increased from 600 for consistency */
  color: #0f1729; /* Changed to dark color for light background */
  margin-bottom: 1rem;
}

.not-found-text {
  font-size: 1.125rem; /* Slightly increased from 1.1rem */
  color: #64748b; /* Changed to better contrast color */
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
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 140px;
}

.btn-primary {
  background-color: #2e6bff; /* Updated to match inline version color */
  color: white;
  border: 2px solid #2e6bff;
}

.btn-primary:hover {
  background-color: #1e5bef; /* Darker shade for hover */
  border-color: #1e5bef;
  text-decoration: none;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #2e6bff; /* Updated to match primary color */
  border: 2px solid #2e6bff;
}

.btn-secondary:hover {
  background-color: #2e6bff;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

/* Popular pages section - new addition from inline version */
.popular-pages {
  margin-bottom: 3rem;
}

.popular-pages h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f1729;
  margin-bottom: 1rem;
}

.popular-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.popular-link {
  color: #2e6bff;
  text-decoration: none;
  font-size: 0.875rem;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.popular-link:hover {
  color: #1e5bef;
  background-color: rgba(46, 107, 255, 0.1);
  text-decoration: none;
}

/* Help section - enhanced with customer service info */
.help-section {
  background: #f5f7ff; /* Light blue background */
  border-radius: 12px;
  padding: 2rem;
  border-top: none; /* Removed border-top in favor of background */
}

.help-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.help-section h3 {
  color: #0f1729;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600; /* Increased from 500 */
}

.help-description {
  color: #64748b;
  font-size: 0.875rem;
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
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.help-link:hover {
  color: #2e6bff;
  background-color: rgba(46, 107, 255, 0.1);
  text-decoration: none;
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
  
  .popular-links {
    flex-direction: column;
    gap: 1rem;
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
  
  .popular-pages {
    margin-bottom: 2rem;
  }
}
```