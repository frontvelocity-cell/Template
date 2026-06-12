```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BookingWidget from './BookingWidget';
import './Home.css';

const Home = () => {
  // Merged data arrays from both versions
  const destinations = [
    { name: 'Tokyo', country: 'Japan', duration: '14h 20m', price: 'From $1,240', emoji: '🗼' },
    { name: 'Paris', country: 'France', duration: '8h 45m', price: 'From $680', emoji: '🗼' },
    { name: 'Dubai', country: 'UAE', duration: '7h 30m', price: 'From $850', emoji: '🌆' },
    { name: 'Singapore', country: 'Singapore', duration: '6h 30m', price: 'From $920', emoji: '🏙' },
    { name: 'New York', country: 'USA', duration: '9h 15m', price: 'From $580', emoji: '🗽' }
  ];

  const offers = [
    {
      title: 'Summer Escape Deals',
      description: 'Up to 40% off premium destinations',
      badge: 'LIMITED TIME',
      className: 'offer-summer'
    },
    {
      title: 'Business Class Upgrade',
      description: 'From $199 upgrade fare',
      badge: 'EXCLUSIVE',
      className: 'offer-business'
    },
    {
      title: 'Weekend Getaways',
      description: 'Short trips, big memories',
      badge: 'WEEKEND',
      className: 'offer-weekend'
    }
  ];

  const features = [
    {
      icon: '✈',
      title: 'Flexible Booking',
      description: 'Change or cancel up to 24h before departure.'
    },
    {
      icon: '🕐',
      title: 'Real-Time Updates',
      description: 'Live gate, delay, and weather alerts.'
    },
    {
      icon: '🌍',
      title: '24/7 Global Support',
      description: 'Multilingual support in 40+ countries.'
    },
    {
      icon: '🌱',
      title: 'Sustainable Flying',
      description: 'Carbon-offset every flight automatically.'
    },
    {
      icon: '☕',
      title: 'Premium Lounges',
      description: 'Access 1,300+ lounges worldwide.'
    },
    {
      icon: '⚡',
      title: 'Fast Check-in',
      description: 'Skip the line with mobile boarding.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Frequent Flyer',
      rating: 5,
      review: 'Excellent service and smooth booking. The lounge access alone is worth it.',
      initials: 'SJ'
    },
    {
      name: 'Michael Chen',
      title: 'Business Traveler',
      rating: 5,
      review: 'Always on time and the app makes everything effortless. Highly recommend.',
      initials: 'MC'
    },
    {
      name: 'Emma Wilson',
      title: 'Family Traveler',
      rating: 5,
      review: 'Travelling with kids was actually relaxing. Staff went above and beyond.',
      initials: 'EW'
    }
  ];

  return (
    <div className="page-container home">
      {/* Merged Hero Section - Combines VIP lounge service branding with travel booking interface */}
      <section className="hero-section hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              {/* Trust badge - unified from both versions */}
              <div className="trust-badge">
                ✈ Trusted by 12M+ travelers
              </div>
              
              {/* Merged headlines - VIP service focus with travel confidence messaging */}
              <h1 className="hero-headline hero-title main-heading" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D7B800' }}>
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
              <div className="hero-buttons hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link to="/packages" className="btn btn-primary">
                  View VIP Packages
                </Link>
                <Link to="/book-now" className="btn btn-primary">
                  BOOK YOUR VIP EXPERIENCE
                </Link>
                <Link to="/flights" className="btn btn-primary">
                  Search Flights →
                </Link>
                <Link to="/destinations" className="btn btn-secondary">
                  Explore Destinations
                </Link>
              </div>
              
              {/* Unified trust indicators and ratings - merged stats from both versions */}
              <div className="hero-stats trust-indicators">
                <div className="hero-stat rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span>4.9/5</span>
                </div>
                <div className="hero-stat reviews">
                  <span className="review-count text-secondary">200K+ reviews</span>
                </div>
                <div className="hero-stat alliance">
                  <span className="alliance-badge text-secondary">Star Alliance</span>
                </div>
              </div>
            </div>
            
            {/* Booking widget positioned in hero - consistent across both versions */}
            <div id="booking" className="booking-widget">
              <BookingWidget />
            </div>
          </div>
        </div>
        
        {/* Promotional overlay for special offers - preserved from first version */}
        <div className="promotion-overlay">
          <h2 className="promotion-title">Valentine's Day Sale ends soon</h2>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="grid grid-5">
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card card">
                <div className="destination-image">
                  <span className="destination-emoji">{destination.emoji} {destination.name}</span>
                </div>
                <div className="destination-info">
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="destination-country">{destination.country}</p>
                  <div className="destination-details">
                    <span className="duration">{destination.duration}</span>
                    <span className="price">{destination.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <div className="grid grid-3">
            {offers.map((offer, index) => (
              <div key={index} className={`offer-card card ${offer.className}`}>
                <div className="offer-badge">{offer.badge}</div>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <Link to="/deals" className="offer-cta">Book Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="features-header">
            <div className="features-badge">WHY CHOOSE US</div>
            <h2 className="section-title">Travel with confidence</h2>
            <p className="features-description">
              Every detail engineered for a calmer, smarter journey.
            </p>
          </div>
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="section section-dark">
        <div className="container">
          <div className="app-content">
            <div className="app-text">
              <div className="app-badge">MOBILE APP</div>
              <h2 className="app-title">Your boarding pass, in your pocket.</h2>
              <p className="app-description">
                Manage bookings, get real-time updates, and check in from anywhere.
              </p>
              <ul className="app-features">
                <li>✓ Mobile boarding pass</li>
                <li>✓ Instant flight notifications</li>
                <li>✓ Offline itinerary access</li>
                <li>✓ Loyalty miles tracking</li>
              </ul>
              <div className="app-buttons">
                <button className="btn btn-secondary">📱 App Store</button>
                <button className="btn btn-secondary">▶ Google Play</button>
              </div>
            </div>
            <div className="app-mockup">
              <div className="phone-mockup">
                <div className="phone-content">
                  <h4>Skyways</h4>
                  <div className="flight-card">
                    <p>NYC → LON</p>
                  </div>
                  <div className="qr-code"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">What our travelers say</h2>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-rating">
                  {Array(testimonial.rating).fill('⭐').join('')}
                </div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initials}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
```