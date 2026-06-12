```jsx
import React from 'react';
import './SpecialOffers.css';

// Merged offers data with all properties from both versions
const offers = [
  {
    id: 1,
    badge: 'LIMITED TIME',
    title: 'Summer Escape Deals',
    description: 'Up to 40% off premium destinations',
    cta: 'Book Now →',
    background: '#2E6BFF',
    className: 'offer-summer' // Updated to match second version naming
  },
  {
    id: 2,
    badge: 'EXCLUSIVE',
    title: 'Business Class Upgrade',
    description: 'From $199 upgrade fare',
    cta: 'Book Now →',
    background: '#2E6BFF',
    className: 'offer-business' // Updated to match second version naming
  },
  {
    id: 3,
    badge: 'WEEKEND',
    title: 'Weekend Getaways',
    description: 'Short trips, big memories',
    cta: 'Book Now →',
    background: '#2E6BFF',
    className: 'offer-weekend' // Updated to match second version naming
  }
];

const SpecialOffers = () => {
  return (
    <section className="section offers-section" style={{ background: '#f5f7ff' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Special Offers</h2>
          {/* Added subtitle from second version */}
          <p className="section-subtitle">
            Limited time deals and exclusive offers for our valued customers
          </p>
        </div>
        
        {/* Merged grid classes: kept 'grid' from second version, added 'grid-3' for specificity */}
        <div className="grid grid-3">
          {offers.map(offer => (
            <div 
              key={offer.id} 
              className={`offer-card ${offer.className}`}
              style={{ backgroundColor: offer.background }}
            >
              <div className="offer-content">
                {/* Updated badge class to match second version structure */}
                <div className="offer-badge">{offer.badge}</div>
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