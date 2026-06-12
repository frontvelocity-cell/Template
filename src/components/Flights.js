```javascript
import React, { useState } from 'react';
import BookingWidget from './BookingWidget';
import './Flights.css';

const Flights = () => {
  // Merged state management - combines static flight data with dynamic search functionality
  const [flights] = useState([
    {
      id: 1,
      airline: 'Skyways',
      flight: 'SW 401',
      from: 'NYC',
      to: 'LON',
      departure: '08:30',
      arrival: '20:15',
      duration: '7h 45m',
      price: '$680',
      stops: 'Non-stop'
    },
    {
      id: 2,
      airline: 'Skyways',
      flight: 'SW 203',
      from: 'NYC',
      to: 'PAR',
      departure: '14:20',
      arrival: '03:05+1',
      duration: '8h 45m',
      price: '$720',
      stops: 'Non-stop'
    },
    {
      id: 3,
      airline: 'Skyways',
      flight: 'SW 105',
      from: 'NYC',
      to: 'DXB',
      departure: '22:15',
      arrival: '18:45+1',
      duration: '12h 30m',
      price: '$850',
      stops: '1 Stop'
    }
  ]);

  // Dynamic search state for future search functionality
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Determine which flights to show - prioritize search results if available, fallback to static data
  const displayFlights = searchResults.length > 0 ? searchResults : flights;
  const showStaticContent = searchResults.length === 0 && !isLoading;

  return (
    <div className="flights-page">
      <div className="container">
        {/* Merged page header - combines both versions with better copy */}
        <div className="page-header">
          <h1 className="section-title">Find Your Perfect Flight</h1>
          <p className="section-subtitle">
            Search and compare flights from hundreds of airlines worldwide
          </p>
        </div>
        
        {/* Centralized booking widget with responsive layout */}
        <div className="booking-section">
          <div className="booking-widget-container" style={{maxWidth: '600px', margin: '0 auto 40px'}}>
            <BookingWidget />
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div style={{textAlign: 'center', padding: '40px'}}>
            <p>Searching for flights...</p>
          </div>
        )}

        {/* Empty search state */}
        {searchResults.length === 0 && !isLoading && flights.length === 0 && (
          <div style={{textAlign: 'center', padding: '40px'}}>
            <h3>Ready to search?</h3>
            <p className="text-secondary">Enter your travel details above to find available flights.</p>
          </div>
        )}

        {/* Flight results section - handles both static and dynamic content */}
        {(displayFlights.length > 0 || showStaticContent) && (
          <div className="flight-results-container">
            <h2>Available Flights</h2>
            <div className="flights-list">
              {displayFlights.map(flight => (
                <div key={flight.id} className="flight-card">
                  <div className="flight-details">
                    <div className="airline-info">
                      <span className="airline-name">{flight.airline}</span>
                      <span className="flight-number">{flight.flight}</span>
                      <span className="stops-badge">{flight.stops}</span>
                    </div>
                    <div className="route-info">
                      <div className="departure">
                        <div className="time">{flight.departure}</div>
                        <div className="airport">{flight.from}</div>
                      </div>
                      <div className="duration">
                        {flight.duration} →
                      </div>
                      <div className="arrival">
                        <div className="time">{flight.arrival}</div>
                        <div className="airport">{flight.to}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flight-pricing">
                    <div className="price">{flight.price}</div>
                    <button className="btn btn-primary">Select</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Popular routes section - shown when displaying static content */}
        {showStaticContent && (
          <div className="popular-routes">
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
        )}
      </div>
    </div>
  );
};

export default Flights;
```