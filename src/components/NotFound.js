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
          <div className="plane-icon">✈</div>
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
        </div>
        
        {/* Help section */}
        <div className="help-links">
          <h3>Need assistance?</h3>
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
  background-color: #1a1a1a;
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
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
  line-height: 1;
}

/* Error text content */
.error-text {
  margin-bottom: 2rem;
}

.not-found-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.not-found-text {
  font-size: 1.1rem;
  color: #cccccc;
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

/* Button styles - merged from both versions */
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
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
  text-decoration: none;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-secondary:hover {
  background-color: #007bff;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

/* Help section */
.help-links {
  border-top: 1px solid #333;
  padding-top: 2rem;
}

.help-links h3 {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.help-options {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.help-link {
  color: #cccccc;
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
  color: #007bff;
  background-color: rgba(0, 123, 255, 0.1);
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

/* Responsive design - merged media queries */
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
  
  .help-options {
    flex-direction: column;
    gap: 1rem;
  }
  
  .plane-icon {
    font-size: 3rem;
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
  
  .help-links {
    padding-top: 1.5rem;
  }
}
```