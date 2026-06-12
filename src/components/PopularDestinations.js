```javascript
import React from 'react';
import './PopularDestinations.css';

// Merged destinations data combining properties from both versions
const destinations = [
  {
    id: 1,
    name: 'Tokyo', // Standardized property name from 'city' to 'name'
    country: 'Japan',
    emoji: '🗼',
    duration: '14h 20m',
    weather: '28°C Sunny', // Added from first version
    price: 'From $1,240',
    image: '#E3E8F0' // Added from first version for background styling
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    emoji: '🗼',
    duration: '8h 45m',
    weather: '22°C Cloudy', // Added from first version
    price: 'From $680',
    image: '#E3E8F0'
  },
  {
    id: 3,
    name: 'Dubai',
    country: 'UAE',
    emoji: '🌆',
    duration: '7h 30m',
    weather: '35°C Hot', // Added from first version
    price: 'From $850',
    image: '#E3E8F0'
  },
  {
    id: 4,
    name: 'Singapore',
    country: 'Singapore',
    emoji: '🏙',
    duration: '6h 30m',
    weather: '30°C Humid', // Added from first version
    price: 'From $920',
    image: '#E3E8F0'
  },
  {
    id: 5,
    name: 'New York',
    country: 'USA',
    emoji: '🗽',
    duration: '9h 15m',
    weather: '18°C Cool', // Added from first version
    price: 'From $580',
    image: '#E3E8F0'
  },
  {
    id: 6,
    name: 'Zurich', // Retained from first version (missing in second version)
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
    <section className="destinations-section"> {/* Used more specific class name from first version */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Destinations</h2> {/* Added class from second version */}
          <p className="section-subtitle"> {/* Added subtitle from second version */}
            Discover amazing places around the world with our best flight deals
          </p>
          <button className="view-all-btn">View all →</button> {/* Retained button from first version */}
        </div>
        
        <div className="destinations-grid grid-4"> {/* Merged class names from both versions */}
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card card"> {/* Merged class names */}
              <div 
                className="destination-image"
                style={{ backgroundColor: destination.image }} {/* Retained background styling from first version */}
              >
                <div className="destination-overlay"> {/* Retained overlay structure from first version */}
                  <span className="destination-emoji">
                    {destination.emoji} {destination.name}
                  </span>
                </div>
              </div>
              
              <div className="destination-info">
                <div className="destination-header">
                  <h3 className="destination-name">{destination.name}</h3> {/* Added class from second version */}
                  <p className="destination-country country">{destination.country}</p> {/* Merged class names */}
                </div>
                
                <div className="destination-details">
                  <span className="destination-duration duration">🕐 {destination.duration}</span> {/* Merged class names and added clock emoji */}
                  {destination.weather && ( {/* Conditional rendering for weather data */}
                    <span className="weather">{destination.weather}</span>
                  )}
                  <span className="destination-price price text-primary">{destination.price}</span> {/* Merged class names */}
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
```