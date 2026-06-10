import React from 'react';
import BookingWidget from './BookingWidget';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="trust-badge">
              ✈ Trusted by 12M+ travelers
            </div>
            
            <h1 className="hero-title">
              <span className="title-line-1">Book Your Next Journey</span>
              <span className="title-line-2">With Confidence</span>
            </h1>
            
            <p className="hero-subtitle">
              Seamless global travel with intelligent booking, flexible fares, and premium comfort.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary">Search Flights →</button>
              <button className="btn btn-secondary">Explore Destinations</button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="rating">⭐⭐⭐⭐⭐ 4.9/5</span>
                <span className="reviews">200K+ reviews</span>
                <span className="alliance">Star Alliance</span>
              </div>
            </div>
          </div>
          
          <div className="hero-booking">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;