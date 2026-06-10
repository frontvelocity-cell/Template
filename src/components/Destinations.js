import React from 'react';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    description: 'Experience the perfect blend of traditional culture and cutting-edge technology.',
    price: 'From $1,240',
    duration: '14h 20m',
    weather: '28°C',
    attractions: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing']
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    description: 'The City of Light offers unparalleled art, cuisine, and romance.',
    price: 'From $680',
    duration: '8h 45m',
    weather: '22°C',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame']
  },
  {
    id: 3,
    name: 'Dubai',
    country: 'UAE',
    continent: 'Middle East',
    description: 'A modern metropolis where luxury meets innovation in the desert.',
    price: 'From $850',
    duration: '7h 30m',
    weather: '35°C',
    attractions: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall']
  },
  {
    id: 4,
    name: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    description: 'A garden city-state with incredible food and stunning architecture.',
    price: 'From $920',
    duration: '6h 30m',
    weather: '30°C',
    attractions: ['Gardens by the Bay', 'Marina Bay Sands', 'Sentosa Island']
  },
  {
    id: 5,
    name: 'New York',
    country: 'USA',
    continent: 'North America',
    description: 'The city that never sleeps, full of iconic landmarks and endless energy.',
    price: 'From $580',
    duration: '9h 15m',
    weather: '18°C',
    attractions: ['Statue of Liberty', 'Central Park', 'Times Square']
  },
  {
    id: 6,
    name: 'Zurich',
    country: 'Switzerland',
    continent: 'Europe',
    description: 'Pristine Alpine beauty meets world-class banking and chocolate.',
    price: 'From $720',
    duration: '8h 20m',
    weather: '15°C',
    attractions: ['Lake Zurich', 'Old Town', 'Swiss Alps']
  }
];

function Destinations() {
  return (
    <div className="destinations-page">
      <div className="container">
        <div className="page-header">
          <h1>Explore Destinations</h1>
          <p>Discover amazing places around the world with Skyways</p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-detail-card">
              <div className="destination-image-placeholder"></div>
              
              <div className="destination-content">
                <div className="destination-header">
                  <h3>{destination.name}</h3>
                  <span className="continent">{destination.continent}</span>
                </div>
                
                <p className="destination-description">
                  {destination.description}
                </p>
                
                <div className="destination-stats">
                  <div className="stat">
                    <span className="label">Duration</span>
                    <span className="value">{destination.duration}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Weather</span>
                    <span className="value">{destination.weather}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Price</span>
                    <span className="value price">{destination.price}</span>
                  </div>
                </div>
                
                <div className="attractions">
                  <h4>Top Attractions</h4>
                  <ul>
                    {destination.attractions.map((attraction, index) => (
                      <li key={index}>{attraction}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn btn-primary">Book Flight</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;