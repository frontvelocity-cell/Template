import React from 'react';
import './SpecialOffers.css';

const offers = [
  {
    id: 1,
    badge: 'LIMITED TIME',
    title: 'Summer Escape Deals',
    description: 'Up to 40% off premium destinations',
    cta: 'Book Now →',
    background: '#2E6BFF'
  },
  {
    id: 2,
    badge: 'EXCLUSIVE',
    title: 'Business Class Upgrade',
    description: 'From $199 upgrade fare',
    cta: 'Book Now →',
    background: '#2E6BFF'
  },
  {
    id: 3,
    badge: 'WEEKEND',
    title: 'Weekend Getaways',
    description: 'Short trips, big memories',
    cta: 'Book Now →',
    background: '#2E6BFF'
  }
];

function SpecialOffers() {
  return (
    <section className="offers-section">
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ backgroundColor: offer.background }}>
              <div className="offer-content">
                <span className="offer-badge">{offer.badge}</span>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <button className="offer-cta">{offer.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;