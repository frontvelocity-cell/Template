import React from 'react';
import './LoyaltyProgram.css';

const tiers = [
  {
    name: 'Silver',
    color: '#94A3B8',
    miles: '0 - 25,000 miles',
    benefits: [
      'Priority check-in',
      '1 free checked bag',
      '10% bonus miles',
      'Seat selection 24h early'
    ]
  },
  {
    name: 'Gold',
    color: '#F59E0B',
    miles: '25,001 - 75,000 miles',
    benefits: [
      'All Silver benefits',
      'Lounge access',
      '2 free checked bags',
      '25% bonus miles',
      'Priority boarding'
    ]
  },
  {
    name: 'Platinum',
    color: '#8B5CF6',
    miles: '75,001+ miles',
    benefits: [
      'All Gold benefits',
      'Unlimited lounge access',
      '3 free checked bags',
      '50% bonus miles',
      'Complimentary upgrades'
    ]
  }
];

const partners = [
  { name: 'Hotels & Resorts', points: '2 miles per $1' },
  { name: 'Car Rentals', points: '3 miles per $1' },
  { name: 'Credit Cards', points: 'Up to 5 miles per $1' },
  { name: 'Shopping Portal', points: '1-10 miles per $1' },
  { name: 'Dining Partners', points: '2 miles per $1' },
  { name: 'Online Services', points: '1-5 miles per $1' }
];

function LoyaltyProgram() {
  return (
    <div className="loyalty-page">
      <div className="container">
        <div className="page-header">
          <h1>Skyways Loyalty Program</h1>
          <p>Earn miles with every flight and unlock exclusive benefits</p>
        </div>
        
        <div className="program-overview">
          <div className="overview-card">
            <h2>Join the Skyways Family</h2>
            <p>
              Our loyalty program rewards frequent flyers with exclusive perks, 
              priority services, and the ability to earn miles for free flights.
            </p>
            <button className="btn btn-primary">Join Now - It's Free</button>
          </div>
        </div>
        
        <div className="tiers-section">
          <h2>Membership Tiers</h2>
          <div className="tiers-grid">
            {tiers.map((tier, index) => (
              <div key={index} className="tier-card">
                <div className="tier-header" style={{ backgroundColor: tier.color }}>
                  <h3>{tier.name}</h3>
                  <p>{tier.miles}</p>
                </div>
                
                <div className="tier-benefits">
                  <h4>Benefits Include:</h4>
                  <ul>
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="earning-section">
          <h2>Ways to Earn Miles</h2>
          <div className="earning-grid">
            <div className="earning-card primary">
              <h3>✈ Flying with Skyways</h3>
              <p>Earn miles based on distance flown and fare class</p>
              <div className="earning-rates">
                <span>Economy: 1 mile per mile flown</span>
                <span>Business: 1.5 miles per mile flown</span>
                <span>First: 2 miles per mile flown</span>
              </div>
            </div>
            
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <h4>{partner.name}</h4>
                  <p>{partner.points}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="redemption-section">
          <h2>Redeem Your Miles</h2>
          <div className="redemption-grid">
            <div className="redemption-card">
              <h3>🎫 Award Flights</h3>
              <p>Use miles for free flights worldwide</p>
              <div className="redemption-examples">
                <span>Domestic: From 12,500 miles</span>
                <span>International: From 30,000 miles</span>
              </div>
            </div>
            
            <div className="redemption-card">
              <h3>⬆ Upgrades</h3>
              <p>Upgrade to Business or First Class</p>
              <div className="redemption-examples">
                <span>Business: From 15,000 miles</span>
                <span>First: From 25,000 miles</span>
              </div>
            </div>
            
            <div className="redemption-card">
              <h3>🛍 Shopping</h3>
              <p>Redeem miles for products and services</p>
              <div className="redemption-examples">
                <span>Gift cards, electronics, travel gear</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <div className="cta-card">
            <h2>Ready to Start Earning?</h2>
            <p>Join millions of travelers who trust Skyways for their journey</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Sign Up Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyProgram;