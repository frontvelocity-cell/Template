```javascript
import React from 'react';
import './Destinations.css';

// Comprehensive destinations data with detailed information
const destinations = [
  {
    id: 1,
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    region: 'Asia',
    description: 'Experience the perfect blend of traditional culture and cutting-edge technology.',
    price: 'From $1,240',
    duration: '14h 20m',
    weather: '28°C',
    attractions: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing'],
    highlights: ['Shibuya Crossing', 'Mount Fuji', 'Traditional Temples', 'Modern Skyscrapers'],
    bestTime: 'March - May, September - November'
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    region: 'Europe',
    description: 'The City of Light offers unparalleled art, cuisine, and romance.',
    price: 'From $680',
    duration: '8h 45m',
    weather: '22°C',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'],
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Seine River Cruises'],
    bestTime: 'April - June, September - October'
  },
  {
    id: 3,
    name: 'Dubai',
    country: 'UAE',
    continent: 'Middle East',
    region: 'Middle East & Africa',
    description: 'A modern metropolis where luxury meets innovation in the desert.',
    price: 'From $850',
    duration: '7h 30m',
    weather: '35°C',
    attractions: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall'],
    highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Luxury Resorts'],
    bestTime: 'November - March'
  },
  {
    id: 4,
    name: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    region: 'Asia',
    description: 'A garden city-state with incredible food and stunning architecture.',
    price: 'From $920',
    duration: '6h 30m',
    weather: '30°C',
    attractions: ['Gardens by the Bay', 'Marina Bay Sands', 'Sentosa Island'],
    highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Hawker Centers', 'Sentosa Island'],
    bestTime: 'February - April'
  },
  {
    id: 5,
    name: 'New York',
    country: 'USA',
    continent: 'North America',
    region: 'Americas',
    description: 'The city that never sleeps, full of iconic landmarks and endless energy.',
    price: 'From $580',
    duration: '9h 15m',
    weather: '18°C',
    attractions: ['Statue of Liberty', 'Central Park', 'Times Square'],
    highlights: ['Statue of Liberty', 'Central Park', 'Broadway Shows', 'Times Square'],
    bestTime: 'April - June, September - November'
  },
  {
    id: 6,
    name: 'Zurich',
    country: 'Switzerland',
    continent: 'Europe',
    region: 'Europe',
    description: 'Pristine Alpine beauty meets world-class banking and chocolate.',
    price: 'From $720',
    duration: '8h 20m',
    weather: '15°C',
    attractions: ['Lake Zurich', 'Old Town', 'Swiss Alps'],
    highlights: ['Lake Zurich', 'Old Town', 'Swiss Alps', 'Chocolate Tours'],
    bestTime: 'May - September'
  },
  {
    id: 7,
    name: 'London',
    country: 'UK',
    continent: 'Europe',
    region: 'Europe',
    description: 'Historic capital with royal heritage and modern attractions.',
    price: 'From $650',
    duration: '8h 00m',
    weather: '16°C',
    attractions: ['Big Ben', 'Tower Bridge', 'British Museum'],
    highlights: ['Big Ben', 'Buckingham Palace', 'British Museum', 'Tower Bridge'],
    bestTime: 'May - September'
  },
  {
    id: 8,
    name: 'Bangkok',
    country: 'Thailand',
    continent: 'Asia',
    region: 'Asia',
    description: 'Vibrant street life, ornate shrines and bustling markets.',
    price: 'From $780',
    duration: '12h 30m',
    weather: '32°C',
    attractions: ['Grand Palace', 'Wat Pho', 'Chatuchak Market'],
    highlights: ['Grand Palace', 'Wat Pho', 'Chatuchak Market', 'Street Food'],
    bestTime: 'November - March'
  },
  {
    id: 9,
    name: 'Los Angeles',
    country: 'USA',
    continent: 'North America',
    region: 'Americas',
    description: 'Entertainment capital with beaches and Hollywood glamour.',
    price: 'From $520',
    duration: '11h 45m',
    weather: '24°C',
    attractions: ['Hollywood Sign', 'Santa Monica Pier', 'Getty Center'],
    highlights: ['Hollywood Sign', 'Santa Monica Pier', 'Getty Center', 'Beverly Hills'],
    bestTime: 'March - May, September - November'
  },
  {
    id: 10,
    name: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    region: 'Middle East & Africa',
    description: 'Stunning natural beauty with Table Mountain and wine regions.',
    price: 'From $890',
    duration: '16h 20m',
    weather: '20°C',
    attractions: ['Table Mountain', 'V&A Waterfront', 'Robben Island'],
    highlights: ['Table Mountain', 'V&A Waterfront', 'Robben Island', 'Wine Regions'],
    bestTime: 'September - March'
  }
];

// Merged regional data with enhanced descriptions and counts
const regions = [
  {
    name: 'Europe',
    description: 'Discover historic cities, stunning architecture, and rich culture across Europe.',
    destinations: ['London', 'Paris', 'Rome', 'Amsterdam', 'Barcelona', 'Zurich'],
    count: '45+ destinations',
    popular: 'Paris, London, Rome'
  },
  {
    name: 'Asia',
    description: 'Experience vibrant cultures, ancient traditions, and modern metropolises.',
    destinations: ['Tokyo', 'Singapore', 'Bangkok', 'Seoul', 'Hong Kong', 'Mumbai'],
    count: '30+ destinations',
    popular: 'Tokyo, Singapore, Bangkok'
  },
  {
    name: 'Americas',
    description: 'From bustling cities to natural wonders, explore the diverse Americas.',
    destinations: ['New York', 'Los Angeles', 'Toronto', 'Mexico City', 'São Paulo'],
    count: '25+ destinations',
    popular: 'New York, Los Angeles, Toronto'
  },
  {
    name: 'Middle East & Africa',
    description: 'Discover luxury destinations and incredible wildlife experiences.',
    destinations: ['Dubai', 'Doha', 'Cape Town', 'Cairo', 'Johannesburg', 'Marrakech', 'Tel Aviv'],
    count: '15+ destinations',
    popular: 'Dubai, Doha, Istanbul'
  }
];

// Unified destination card component with merged properties
const DestinationCard = ({ destination }) => (
  <div className="destination-detail-card destination-card card">
    <div className="destination-image-placeholder"></div>
    
    <div className="destination-content">
      <div className="destination-header">
        <h3 className="destination-name">{destination.name}</h3>
        <span className="continent destination-country">{destination.country}</span>
      </div>
      
      <p className="destination-description">
        {destination.description}
      </p>
      
      {/* Display highlights if available */}
      {destination.highlights && (
        <div className="destination-highlights">
          <h4>Highlights</h4>
          <ul>
            {destination.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="destination-stats destination-details">
        <div className="stat detail-item">
          <span className="label detail-label">Duration</span>
          <span className="value detail-value">{destination.duration}</span>
        </div>
        <div className="stat detail-item">
          <span className="label detail-label">Weather</span>
          <span className="value detail-value">{destination.weather}</span>
        </div>
        {destination.bestTime && (
          <div className="stat detail-item">
            <span className="label detail-label">Best Time</span>
            <span className="value detail-value">{destination.bestTime}</span>
          </div>
        )}
        <div className="stat detail-item">
          <span className="label detail-label">Price</span>
          <span className="value price detail-price">{destination.price}</span>
        </div>
      </div>
      
      {destination.attractions && (
        <div className="attractions">
          <h4>Top Attractions</h4>
          <ul>
            {destination.attractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button className="btn btn-primary destination-cta">Book Flight</button>
    </div>
  </div>
);

// Popular Destinations Component
const PopularDestinations = () => {
  const popularDestinations = destinations.slice(0, 6);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Discover our most sought-after travel destinations
          </p>
        </div>
        <div className="destinations-grid">
          {popularDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Destinations Component
function Destinations() {
  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <div className="hero-section page-header" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title page-title" style={{ fontSize: '3rem', fontWeight: '700' }}>
              Explore the World
            </h1>
            <p className="section-subtitle page-description" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              Discover amazing destinations around the globe with Skyways Airlines
            </p>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <PopularDestinations />

      {/* Regional Destinations Section */}
      <section className="section regions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse by Region</h2>
            <p className="section-subtitle">
              Find your perfect destination by exploring different continents
            </p>
          </div>
          
          <div className="grid grid-2 regions-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            {regions.map((region, index) => (
              <div key={index} className="card region-card" style={{ padding: '2rem' }}>
                <h3 className="region-name" style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#0f172a' }}>
                  {region.name}
                </h3>
                <p className="region-count" style={{ color: '#64748b', marginBottom: '0.5rem', fontWeight: '600' }}>
                  {region.count}
                </p>
                <p style={{ color: '#64748b', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {region.description}
                </p>
                <p className="region-popular" style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                  Popular: {region.popular}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {region.destinations.map((dest, i) => (
                    <span 
                      key={i}
                      style={{
                        background: '#f0f4ff',
                        color: '#2e6bff',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {dest}
                    </span>
                  ))}
                </div>
                <button className="btn btn-secondary">Explore {region.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Destinations</h2>
            <p className="section-subtitle">
              Browse our complete collection of travel destinations
            </p>
          </div>
          <div className="destinations-grid">
            {destinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
```