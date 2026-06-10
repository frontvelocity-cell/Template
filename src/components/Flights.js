import React from 'react';
import BookingWidget from './BookingWidget';
import './Flights.css';

const Flights = () => {
  return (
    <div className="flights-page">
      <div className="container">
        <div className="page-header">
          <h1>Find Your Perfect Flight</h1>
          <p>Search and compare flights from hundreds of airlines worldwide</p>
        </div>
        
        <div className="booking-section">
          <BookingWidget />
        </div>
        
        <div className="search-results">
          <h2>Popular Routes</h2>
          <div className="routes-grid">
            <div className="route-card">
              <div className="route-info">
                <h3>New York → London</h3>
                <p>Multiple airlines • 8h 45m</p>
              </div>
              <div className="route-price">From $680</div>
            </div>
            <div className="route-card">
              <div className="route-info">
                <h3>Los Angeles → Tokyo</h3>
                <p>Multiple airlines • 11h 30m</p>
              </div>
              <div className="route-price">From $1,240</div>
            </div>
            <div className="route-card">
              <div className="route-info">
                <h3>Miami → Dubai</h3>
                <p>Multiple airlines • 7h 30m</p>
              </div>
              <div className="route-price">From $850</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;