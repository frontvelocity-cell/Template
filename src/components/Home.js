```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section - Valentine's Day Promotion */}
      <div className="hero-section">
        <h1 className="hero-title">Valentine's Day Sale ends soon</h1>
        <div className="hero-image">
          Hero Image Placeholder
        </div>
      </div>

      {/* Main Content Section - VIP Lounge Service */}
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D7B800' }}>
          Welcome to DXB VIP Lounge Service
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Experience premium airport services with our exclusive VIP lounge access and personalized assistance.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/packages" className="btn-primary">
            View Packages
          </Link>
          <Link to="/book-now" className="btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
```