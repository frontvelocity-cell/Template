```jsx
import React from 'react';
import './LoyaltyProgram.css';

const LoyaltyProgram = () => {
  // Merged and standardized tier data with consistent mile ranges and comprehensive benefits
  const tiers = [
    {
      name: 'Silver',
      color: '#94A3B8',
      miles: '0 - 25,000 miles',
      benefits: [
        'Priority check-in',
        '1 free checked bag',
        '25% bonus miles', // Updated from 10% to match second version
        'Free seat selection', // Enhanced from "24h early" to "free"
      ]
    },
    {
      name: 'Gold',
      color: '#F59E0B',
      miles: '25,001 - 75,000 miles', // Kept broader range from first version
      benefits: [
        'All Silver benefits',
        'Priority boarding',
        '2 free checked bags',
        '50% bonus miles', // Updated from 25% to match second version
        'Lounge access', // Simplified from "2 visits/year" to general access
      ]
    },
    {
      name: 'Platinum',
      color: '#8B5CF6',
      miles: '75,001+ miles', // Kept higher threshold from first version
      benefits: [
        'All Gold benefits',
        'Complimentary upgrades',
        '3 free checked bags',
        '100% bonus miles', // Updated from 50% to match second version
        'Unlimited lounge access',
        'Priority customer service', // Added from second version
      ]
    }
  ];

  // Enhanced partners data combining both versions
  const partners = [
    { name: 'Hotels & Resorts', points: '2 miles per $1' },
    { name: 'Car Rentals', points: '3 miles per $1' },
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
        {/* Enhanced hero section combining both approaches */}
        <div className="hero-section page-header" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            Skyways Loyalty Program
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Earn miles with every flight and unlock exclusive benefits
          </p>
        </div>
        
        {/* Program overview section */}
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
        
        {/* Enhanced tiers section with improved styling */}
        <section className="tiers-section section">
          <h2 className="section-title text-center mb-4">Membership Tiers</h2>
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
                  <h3>{tier.name[0]}</h3>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  {tier.name}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '2rem', fontWeight: '500' }}>
                  {tier.miles}
                </p>
                
                <div className="tier-benefits">
                  <h4>Benefits Include:</h4>
                  <ul style={{ listStyle: 'none', textAlign: 'left', lineHeight: '2' }}>
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
        
        {/* Enhanced earning section */}
        <section className="earning-section section" style={{ background: '#f5f7ff' }}>
          <h2 className="section-title text-center mb-4">Ways to Earn Miles</h2>
          <div className="earning-grid grid grid-3">
            {/* Primary earning method */}
            <div className="earning-card primary card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="feature-icon">✈</div>
              <h3 className="feature-title">Flying with Skyways</h3>
              <p className="feature-description">Earn miles based on distance flown and fare class</p>
              <div className="earning-rates">
                <span>Economy: 1 mile per mile flown</span>
                <span>Business: 1.5 miles per mile flown</span>
                <span>First: 2 miles per mile flown</span>
              </div>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="feature-icon">💳</div>
              <h3 className="feature-title">Credit Cards</h3>
              <p className="feature-description">
                Use our co-branded credit cards for everyday purchases
              </p>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="feature-icon">🏨</div>
              <h3 className="feature-title">Partners</h3>
              <p className="feature-description">
                Earn miles with hotels, car rentals, and dining partners
              </p>
            </div>
          </div>
          
          {/* Partners grid */}
          <div className="partners-grid grid grid-2" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {partners.map((partner, index) => (
              <div key={index} className="partner-card card" style={{ padding: '1.5rem' }}>
                <h4>{partner.name}</h4>
                <p>{partner.points}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed partner categories */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center mb-4">Earning Partners</h2>
            
            <div className="grid grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {partnerCategories.map((category, index) => (
                <div key={index} className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
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
          </div>
        </section>
        
        {/* Redemption section */}
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
        
        {/* Enhanced CTA section */}
        <section className="cta-section section" style={{ background: '#2e6bff', color: 'white' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="cta-card">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Ready to Start Earning?
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.9' }}>
                Join millions of travelers who trust Skyways for their journey
              </p>
              <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn btn-primary" style={{ background: 'white', color: '#2e6bff' }}>
                  Sign Up Now
                </button>
                <button className="btn btn-secondary" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>
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