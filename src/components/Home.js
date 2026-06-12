```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BookingWidget from './BookingWidget';
import PopularDestinations from './PopularDestinations';
import SpecialOffers from './SpecialOffers';
import WhyChooseUs from './WhyChooseUs';
import MobileApp from './MobileApp';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="page-container">
      {/* Merged Hero Section - Combines VIP lounge service branding with travel booking interface */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            {/* Trust badge - unified from both versions */}
            <div className="trust-badge">
              ✈ Trusted by 12M+ travelers
            </div>
            
            {/* Merged headlines - VIP service focus with travel confidence messaging */}
            <h1 className="hero-headline main-heading" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D7B800' }}>
              WELCOME TO DXB VIP LOUNGE SERVICE
            </h1>
            <h2 className="hero-subtitle">
              Book Your Next Journey<br />
              <span className="text-primary">With Confidence</span>
            </h2>
            
            {/* Combined descriptions - VIP service details with travel benefits */}
            <p className="hero-description" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Experience luxury and comfort at Dubai International Airport with our premium VIP lounge services.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Seamless global travel with intelligent booking, flexible fares, premium comfort, and exclusive amenities before your flight.
            </p>
            
            {/* Merged call-to-action buttons - combined all unique actions */}
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/packages" className="btn btn-primary">
                View VIP Packages
              </Link>
              <Link to="/book-now" className="btn btn-primary">
                BOOK YOUR VIP EXPERIENCE
              </Link>
              <a href="#booking" className="btn btn-primary">
                Search Flights →
              </a>
              <a href="/destinations" className="btn btn-secondary">
                Explore Destinations
              </a>
            </div>
            
            {/* Unified trust indicators and ratings - merged stats from both versions */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="rating">⭐⭐⭐⭐⭐ 4.9/5</span>
              </div>
              <div className="hero-stat">
                <span className="review-count text-secondary">200K+ reviews</span>
              </div>
              <div className="hero-stat">
                <span className="alliance-badge text-secondary">Star Alliance</span>
              </div>
            </div>
          </div>
          
          {/* Booking widget positioned in hero - consistent across both versions */}
          <div id="booking" className="booking-widget">
            <BookingWidget />
          </div>
        </div>
        
        {/* Promotional overlay for special offers - preserved from first version */}
        <div className="promotion-overlay">
          <h2 className="promotion-title">Valentine's Day Sale ends soon</h2>
        </div>
      </section>

      {/* Consistent component sections - identical in both versions */}
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