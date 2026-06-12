```jsx
import React from 'react';
import './LoyaltyProgram.css';

const LoyaltyProgram = () => {
  // Merged and standardized tier data with consistent mile ranges and comprehensive benefits
  const tiers = [
    {
      name: 'Silver',
      color: '#94A3B8',
      miles: '0 - 25,000 miles', // Standardized to higher threshold for better progression
      benefits: [
        'Priority check-in',
        '1 free checked bag', // Merged from "Extra baggage allowance"
        '25% bonus miles', // Updated to higher value from second version
        'Free seat selection', // Enhanced benefit
      ]
    },
    {
      name: 'Gold',
      color: '#F59E0B', // Standardized to warmer gold color
      miles: '25,001 - 75,000 miles', // Expanded range for better tier spacing
      benefits: [
        'All Silver benefits',
        'Priority boarding',
        '2 free checked bags', // Specific benefit count
        '50% bonus miles', // Increased bonus percentage
        'Lounge access', // Simplified from specific visit counts
        'Free upgrades (subject to availability)', // Added from second version
      ]
    },
    {
      name: 'Platinum',
      color: '#8B5CF6',
      miles: '75,001+ miles', // Higher threshold for premium tier
      benefits: [
        'All Gold benefits',
        'Complimentary upgrades', // Enhanced from "Guaranteed upgrades"
        '3 free checked bags',
        '100% bonus miles', // Maximum bonus percentage
        'Unlimited lounge access', // Enhanced from "Worldwide lounge access"
        'Priority customer service', // Merged from "Dedicated phone line"
        'Free companion tickets', // Added premium benefit
      ]
    }
  ];

  // Enhanced partners data combining both versions with specific earning rates
  const partners = [
    { name: 'Hotels & Resorts', points: '2 miles per $1' },
    { name: 'Car Rentals', points: '1-3 miles per $1' }, // Range for different partners
    { name: 'Credit Cards', points: 'Up to 5 miles per $1' },
    { name: 'Shopping Portal', points: '1-10 miles per $1' },
    { name: 'Dining Partners', points: '2 miles per $1' },
    { name: 'Online Services', points: '1-5 miles per $1' }
  ];

  // Partner categories for detailed display
  const partnerCategories = [
    {
      category: 'Hotels',
      partners: ['Marriott', 'Hilton', 'Hyatt', 'IHG']
    },
    {
      category: 'Car Rental',
      partners: ['Hertz', 'Avis', 'Enterprise', 'Budget']
    },
    {
      category: 'Dining',
      partners: ['OpenTable', 'Uber Eats', 'Local Restaurants']
    },
    {
      category: 'Shopping',
      partners: ['Amazon', 'Target', 'Best Buy', 'Macy\'s']
    }
  ];

  return (
    <div className="loyalty-page">
      <div className="container">
        {/* Enhanced hero section with welcome bonus */}
        <div className="hero-section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 className="section-title" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
              Skyways Loyalty Program
            </h1>
            <p className="section-subtitle" style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Earn miles with every flight and unlock exclusive benefits
            </p>
          </div>
          
          {/* Welcome bonus section */}
          <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h2 style={{ color: '#0f172a', marginBottom: '20px' }}>Join Today & Get</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '30px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#2e6bff' }}>5,000</div>
                  <div style={{ color: '#64748b' }}>Welcome Bonus Miles</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#2e6bff' }}>2x</div>
                  <div style={{ color: '#64748b' }}>Miles on First Flight</div>
                </div>
              </div>
              <button className="btn btn-primary" style={{ padding: '14px 30px' }}>
                Join Free Today
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced tiers section with improved styling */}
        <section className="tiers-section section">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Membership Tiers</h2>
            <p className="section-subtitle">The more you fly, the more you earn</p>
          </div>
          
          <div className="tiers-grid grid grid-3">
            {tiers.map((tier, index) => (
              <div key={index} className="tier-card card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div 
                  className="tier-header"
                  style={{
                    backgroundColor: tier.color,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: '700'
                  }}
                >
                  {tier.name[0]}
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>
                  {tier.name}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '2rem', fontWeight: '500', fontSize: '0.9rem' }}>
                  {tier.miles}
                </p>
                
                <div className="tier-benefits">
                  <ul style={{ listStyle: 'none', textAlign: 'left', lineHeight: '1.8', color: '#64748b' }}>
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '8px' }}>
                        <span style={{ color: '#10b981' }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Enhanced earning section with comprehensive methods */}
        <section className="earning-section section bg-light" style={{ background: '#f5f7ff', padding: '4rem 0' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">How to Earn Miles</h2>
          </div>
          
          <div className="earning-grid grid grid-2" style={{ marginBottom: '3rem' }}>
            {/* Primary earning method */}
            <div className="earning-card card" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>✈ Flying with Skyways</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>
                Earn miles based on distance flown and fare class, plus bonus miles based on your tier status.
              </p>
              <ul style={{ color: '#64748b', paddingLeft: '20px' }}>
                <li>Economy: 1 mile per mile flown</li>
                <li>Business: 1.5 miles per mile flown</li>
                <li>First Class: 2 miles per mile flown</li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>💳 Credit Cards</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>
                Get our co-branded credit card and earn miles on everyday purchases.
              </p>
              <ul style={{ color: '#64748b', paddingLeft: '20px' }}>
                <li>3x miles on Skyways purchases</li>
                <li>2x miles on travel and dining</li>
                <li>1x mile on everything else</li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>🏨 Partners</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>
                Earn miles with our hotel, car rental, and shopping partners.
              </p>
              <ul style={{ color: '#64748b', paddingLeft: '20px' }}>
                <li>Hotels: 2 miles per $1 spent</li>
                <li>Car rentals: 1 mile per $1 spent</li>
                <li>Shopping: 1-5 miles per $1 spent</li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>🎯 Promotions</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>
                Take advantage of special promotions and bonus mile opportunities.
              </p>
              <ul style={{ color: '#64748b', paddingLeft: '20px' }}>
                <li>Double mile promotions</li>
                <li>Route-specific bonuses</li>
                <li>Partner bonus campaigns</li>
              </ul>
            </div>
          </div>
          
          {/* Partners overview grid */}
          <div className="partners-grid grid grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {partners.map((partner, index) => (
              <div key={index} className="partner-card card" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: '#0f172a', marginBottom: '8px' }}>{partner.name}</h4>
                <p style={{ color: '#2e6bff', fontWeight: '600' }}>{partner.points}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed partner categories */}
        <section className="section" style={{ padding: '4rem 0' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Earning Partners</h2>
          </div>
          
          <div className="grid grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {partnerCategories.map((category, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#0f172a' }}>
                  {category.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.partners.map((partner, i) => (
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
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Redemption section */}
        <section className="redemption-section section bg-light" style={{ background: '#f8fafc', padding: '4rem 0' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Redeem Your Miles</h2>
          </div>
          
          <div className="redemption-grid grid grid-3">
            <div className="redemption-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎫</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>Award Flights</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Use miles for free flights worldwide</p>
              <div className="redemption-examples" style={{ color: '#64748b', fontSize: '0.9rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>Domestic: From 12,500 miles</div>
                <div>International: From 30,000 miles</div>
              </div>
            </div>
            
            <div className="redemption-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⬆</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>Upgrades</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Upgrade to Business or First Class</p>
              <div className="redemption-examples" style={{ color: '#64748b', fontSize: '0.9rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>Business: From 15,000 miles</div>
                <div>First: From 25,000 miles</div>
              </div>
            </div>
            
            <div className="redemption-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>Shopping</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Redeem miles for products and services</p>
              <div className="redemption-examples" style={{ color: '#64748b', fontSize: '0.9rem' }}>
                <div>Gift cards, electronics, travel gear</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced CTA section */}
        <section className="cta-section section" style={{ background: '#2e6bff', color: 'white', padding: '4rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="cta-card">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Ready to Start Earning?
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.9' }}>
                Join millions of travelers who trust Skyways for their journey
              </p>
              <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ background: 'white', color: '#2e6bff', padding: '14px 30px' }}>
                  Sign Up Now
                </button>
                <button className="btn btn-secondary" style={{ background: 'transparent', color: 'white', border: '2px solid white', padding: '14px 30px' }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
```