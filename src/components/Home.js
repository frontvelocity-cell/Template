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
      {/* Merged Hero Section - Combines Hero component with travel booking interface */}
      <section className="hero-section">
        <div className="hero-content">
          {/* VIP Lounge Service branding integrated with travel hero */}
          <div className="hero-text">
            <div className="trust-badge">
              ✈ Trusted by 12M+ travelers
            </div>
            <h1 className="hero-headline main-heading" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D7B800' }}>
              WELCOME TO DXB VIP LOUNGE SERVICE
            </h1>
            <p className="hero-description" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Experience luxury and comfort at Dubai International Airport with our premium VIP lounge services.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Enjoy exclusive amenities, personalized service, and a relaxing environment before your flight.
            </p>
            
            {/* Merged call-to-action buttons */}
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/packages" className="btn btn-primary">
                View VIP Packages
              </Link>
              <Link to="/book-now" className="btn btn-primary">
                BOOK YOUR VIP EXPERIENCE
              </Link>
              <a href="/flights" className="btn btn-secondary">
                Search Flights →
              </a>
              <a href="/destinations" className="btn btn-secondary">
                Explore Destinations
              </a>
            </div>
            
            {/* Trust indicators and ratings */}
            <div className="hero-stats">
              <div className="rating">
                ⭐⭐⭐⭐⭐ 4.9/5
              </div>
              <span className="review-count">200K+ reviews</span>
              <span className="alliance-badge">Star Alliance</span>
            </div>
          </div>
          
          {/* Booking widget positioned in hero */}
          <div className="booking-widget">
            <BookingWidget />
          </div>
        </div>
        
        {/* Promotional overlay for special offers */}
        <div className="promotion-overlay">
          <h2 className="promotion-title">Valentine's Day Sale ends soon</h2>
        </div>
      </section>

      {/* Consistent component sections */}
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