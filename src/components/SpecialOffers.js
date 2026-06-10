```jsx
import React from 'react';
import './SpecialOffers.css';

const offers = [
  {
    id: 1,
    badge: 'LIMITED TIME',
    title: 'Summer Escape Deals',
    description: 'Up to 40% off premium destinations',
    cta: 'Book Now →',
    background: '#2E6BFF',
    className: 'summer-offer'
  },
  {
    id: 2,
    badge: 'EXCLUSIVE',
    title: 'Business Class Upgrade',
    description: 'From $199 upgrade fare',
    cta: 'Book Now →',
    background: '#2E6BFF',
    className: 'business-offer'
  },
  {
    id: 3,
    badge: 'WEEKEND',
    title: 'Weekend Getaways',
    description: 'Short trips, big memories',
    cta: 'Book Now →',
    background: '#2E6BFF',
    className: 'weekend-offer'
  }
];

const SpecialOffers = () => {
  return (
    <section className="offers-section" style={{ background: '#f5f7ff' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Special Offers</h2>
        </div>
        
        <div className="offers-grid grid-3">
          {offers.map(offer => (
            <div 
              key={offer.id} 
              className={`offer-card ${offer.className}`}
              style={{ backgroundColor: offer.background }}
            >
              <div className="offer-content">
                <span className="offer-badge">{offer.badge}</span>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <a href="/deals" className="offer-cta">{offer.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
```