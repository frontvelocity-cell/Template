```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import BookingWidget from './BookingWidget';
import PopularDestinations from './PopularDestinations';
import SpecialOffers from './SpecialOffers';
import WhyChooseUs from './WhyChooseUs';
import MobileApp from './MobileApp';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section - Merged Valentine's Day promotion with Hero component */}
      <div className="hero-section">
        <Hero />
        <div className="promotion-overlay">
          <h2 className="promotion-title">Valentine's Day Sale ends soon</h2>
        </div>
      </div>

      {/* Main Content Section - VIP Lounge Service */}
      <div className="container">
        <h1 className="main-heading" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D7B800' }}>
          WELCOME TO DXB VIP LOUNGE SERVICE
        </h1>
        
        {/* Service description with improved styling */}
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Experience luxury and comfort at Dubai International Airport with our premium VIP lounge services.
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Enjoy exclusive amenities, personalized service, and a relaxing environment before your flight.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link to="/packages" className="btn-primary">
            View Packages
          </Link>
          <Link to="/book-now" className="btn-primary">
            BOOK YOUR VIP EXPERIENCE
          </Link>
        </div>
      </div>

      {/* Additional sections from component-based version */}
      <BookingWidget />
      <PopularDestinations />
      <SpecialOffers />
      <WhyChooseUs />
      <MobileApp />
      <Testimonials />
    </div>
  );
};

export default Home;
```