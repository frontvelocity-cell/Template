import React from 'react';
import './Deals.css';
import SpecialOffers from './SpecialOffers';

// Merged deals data combining both versions
const deals = [
  {
    id: 1,
    title: 'Summer Escape Deals',
    description: 'Up to 40% off premium destinations across Europe and Asia',
    discount: '40% OFF',
    validUntil: 'Valid until July 31, 2026',
    destinations: ['Paris', 'Tokyo', 'Singapore'],
    code: 'SUMMER40',
    originalPrice: '$1,200',
    salePrice: '$720'
  },
  {
    id: 2,
    title: 'Business Class Upgrade',
    description: 'Upgrade to Business Class for just $199 on selected routes',
    discount: 'FROM $199',
    validUntil: 'Valid until June 15, 2026',
    destinations: ['New York', 'London', 'Dubai'],
    code: 'BIZCLASS',
    originalPrice: '$599',
    salePrice: '$199'
  },
  {
    id: 3,
    title: 'Weekend Getaways',
    description: 'Short trips, big memories. Perfect for quick escapes',
    discount: '25% OFF',
    validUntil: 'Valid for weekend departures',
    destinations: ['Miami', 'Las Vegas', 'Barcelona'],
    code: 'WEEKEND25',
    originalPrice: '$400',
    salePrice: '$300'
  },
  {
    id: 4,
    title: 'Early Bird Special',
    description: 'Book 3 months in advance and save big on international flights',
    discount: '30% OFF',
    validUntil: 'Valid for bookings 90+ days ahead',
    destinations: ['Sydney', 'Rome', 'Cairo'],
    code: 'EARLY30',
    originalPrice: '$800',
    salePrice: '$560'
  },
  {
    id: 5,
    title: 'Family Travel Package',
    description: 'Special rates for families traveling together',
    discount: 'KIDS FLY FREE',
    validUntil: 'Valid for children under 12',
    destinations: ['Orlando', 'Cancun', 'Hawaii'],
    code: 'FAMILY',
    originalPrice: '$1,600',
    salePrice: '$800'
  },
  {
    id: 6,
    title: 'Last Minute Deals',
    description: 'Spontaneous travel at unbeatable prices',
    discount: '50% OFF',
    validUntil: 'Departing within 7 days',
    destinations: ['Available routes vary'],
    code: 'LASTMIN',
    originalPrice: '$600',
    salePrice: '$300'
  }
];

// Additional deal categories from second version
const dealCategories = [
  {
    title: 'Last Minute Deals',
    description: 'Save up to 50% on flights departing within 7 days',
    deals: [
      { route: 'NYC → Miami', price: '$180', original: '$360', savings: '50%' },
      { route: 'LAX → Vegas', price: '$120', original: '$240', savings: '50%' },
      { route: 'CHI → Boston', price: '$150', original: '$300', savings: '50%' }
    ]
  },
  {
    title: 'International Deals',
    description: 'Explore the world with discounted international flights',
    deals: [
      { route: 'NYC → London', price: '$580', original: '$780', savings: '26%' },
      { route: 'LAX → Tokyo', price: '$850', original: '$1,200', savings: '29%' },
      { route: 'MIA → Paris', price: '$650', original: '$900', savings: '28%' }
    ]
  },
  {
    title: 'Weekend Getaways',
    description: 'Perfect for short trips and quick escapes',
    deals: [
      { route: 'NYC → DC', price: '$95', original: '$150', savings: '37%' },
      { route: 'LAX → SF', price: '$110', original: '$180', savings: '39%' },
      { route: 'CHI → Nashville', price: '$125', original: '$200', savings: '38%' }
    ]
  }
];

function Deals() {
  return (
    <div className="deals-page">
      {/* Hero section with enhanced styling */}
      <div className="hero-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="page-header text-center">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
              Amazing Flight Deals
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Don't miss out on these limited-time offers and save on your next trip
            </p>
          </div>
        </div>
      </div>

      {/* Special Offers component */}
      <SpecialOffers />
      
      {/* Main deals grid from first version */}
      <section className="section">
        <div className="container">
          <div className="deals-grid">
            {deals.map(deal => (
              <div key={deal.id} className="deal-card">
                <div className="deal-badge">{deal.discount}</div>
                
                <div className="deal-content">
                  <h3 className="deal-title">{deal.title}</h3>
                  <p className="deal-description">{deal.description}</p>
                  
                  <div className="deal-destinations">
                    <span className="destinations-label">Destinations:</span>
                    <div className="destinations-list">
                      {deal.destinations.map((dest, index) => (
                        <span key={index} className="destination-tag">{dest}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="deal-pricing">
                    <span className="original-price">{deal.originalPrice}</span>
                    <span className="sale-price">{deal.salePrice}</span>
                  </div>
                  
                  <div className="deal-code">
                    <span>Use code: <strong>{deal.code}</strong></span>
                  </div>
                  
                  <div className="deal-validity">
                    {deal.validUntil}
                  </div>
                  
                  <button className="btn btn-primary deal-btn">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal categories from second version */}
      <section className="section">
        <div className="container">
          {dealCategories.map((category, index) => (
            <div key={index} style={{ marginBottom: '4rem' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  {category.title}
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-3">
                {category.deals.map((deal, i) => (
                  <div key={i} className="card" style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ 
                        background: '#ef4444', 
                        color: 'white', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        marginBottom: '1rem'
                      }}>
                        Save {deal.savings}
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                        {deal.route}
                      </h3>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2e6bff' }}>
                          {deal.price}
                        </span>
                        <span style={{ 
                          textDecoration: 'line-through', 
                          color: '#64748b',
                          fontSize: '1rem'
                        }}>
                          {deal.original}
                        </span>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Deals;