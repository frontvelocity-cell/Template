import React from 'react';
import './PopularDestinations.css';

const destinations = [
  {
    id: 1,
    name: 'Tokyo',
    country: 'Japan',
    emoji: '🗼',
    duration: '14h 20m',
    weather: '28°C Sunny',
    price: 'From $1,240',
    image: '#E3E8F0'
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    emoji: '🗼',
    duration: '8h 45m',
    weather: '22°C Cloudy',
    price: 'From $680',
    image: '#E3E8F0'
  },
  {
    id: 3,
    name: 'Dubai',
    country: 'UAE',
    emoji: '🌆',
    duration: '7h 30m',
    weather: '35°C Hot',
    price: 'From $850',
    image: '#E3E8F0'
  },
  {
    id: 4,
    name: 'Singapore',
    country: 'Singapore',
    emoji: '🏙',
    duration: '6h 30m',
    weather: '30°C Humid',
    price: 'From $920',
    image: '#E3E8F0'
  },
  {
    id: 5,
    name: 'New York',
    country: 'USA',
    emoji: '🗽',
    duration: '9h 15m',
    weather: '18°C Cool',
    price: 'From $580',
    image: '#E3E8F0'
  },
  {
    id: 6,
    name: 'Zurich',
    country: 'Switzerland',
    emoji: '🏔',
    duration: '8h 20m',
    weather: '15°C Crisp',
    price: 'From $720',
    image: '#E3E8F0'
  }
];

function PopularDestinations() {
  return (
    <section className="destinations-section">
      <div className="container">
        <div className="section-header">
          <h2>Popular Destinations</h2>
          <button className="view-all-btn">View all →</button>
        </div>
        
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <div 
                className="destination-image"
                style={{ backgroundColor: destination.image }}
              >
                <div className="destination-overlay">
                  <span className="destination-emoji">
                    {destination.emoji} {destination.name}
                  </span>
                </div>
              </div>
              
              <div className="destination-info">
                <div className="destination-header">
                  <h3>{destination.name}</h3>
                  <p className="country">{destination.country}</p>
                </div>
                
                <div className="destination-details">
                  <span className="duration">🕐 {destination.duration}</span>
                  <span className="weather">{destination.weather}</span>
                  <span className="price">{destination.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;