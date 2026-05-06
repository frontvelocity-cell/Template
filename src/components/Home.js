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
        <h1 className="main-heading" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D7B800' }}>
          WELCOME TO DXB VIP LOUNGE SERVICE
        </h1>
        
        {/* Merged description content with improved styling */}
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Experience luxury and comfort at Dubai International Airport with our premium VIP lounge services.
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Enjoy exclusive amenities, personalized service, and a relaxing environment before your flight.
          </p>
        </div>

        {/* Navigation buttons - using Link components for better routing */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/packages" className="btn-primary">
            View Packages
          </Link>
          <Link to="/book-now" className="btn-primary">
            BOOK YOUR VIP EXPERIENCE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
```