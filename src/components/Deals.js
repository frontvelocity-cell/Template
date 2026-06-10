import React from 'react';
import './Deals.css';

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

function Deals() {
  return (
    <div className="deals-page">
      <div className="container">
        <div className="page-header">
          <h1>Special Deals & Offers</h1>
          <p>Don't miss out on these limited-time offers and save on your next trip</p>
        </div>
        
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
    </div>
  );
}

export default Deals;