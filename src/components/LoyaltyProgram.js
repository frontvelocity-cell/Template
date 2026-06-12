```jsx
import React from 'react';
import './LoyaltyProgram.css';

const LoyaltyProgram = () => {
  // Merged and standardized tier data with consistent mile ranges and comprehensive benefits
  const tiers = [
    {
      name: 'Silver',
      color: '#94A3B8',
      miles: '0 - 25,000 miles', // Standardized threshold for better progression
      benefits: [
        'Priority check-in',
        '1 free checked bag', // Merged from "Extra baggage allowance"
        '25% bonus miles', // Enhanced from original version
        'Free seat selection', // Enhanced benefit from 24h advance
        'Member-only deals' // Added from second version
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
        'Lounge access (2 visits/year)', // Specific from second version
        'Free upgrades (subject to availability)', // Merged upgrade benefits
      ]
    },
    {
      name: 'Platinum',
      color: '#8B5CF6',
      miles: '75,001 - 100,000 miles', // Added upper bound for Diamond tier
      benefits: [
        'All Gold benefits',
        'Unlimited lounge access', // Enhanced from "Worldwide lounge access"
        'Free companion tickets', // Premium benefit
        'Priority baggage handling', // Added from second version
        'Complimentary upgrades', // Enhanced from "Guaranteed upgrades"
        '100% bonus miles', // Maximum bonus percentage
      ]
    },
    {
      name: 'Diamond', // Added premium tier from second version
      color: '#60a5fa',
      miles: '100,000+ miles',
      benefits: [
        'All Platinum benefits',
        'Dedicated phone line', // Premium customer service
        'First-class upgrades',
        'Global lounge access',
        'Concierge service'
      ]
    }
  ];

  // Enhanced earning opportunities combining both versions with specific rates
  const earningOpportunities = [
    {
      icon: '✈️',
      title: 'Flying with Skyways',
      description: 'Earn miles based on distance flown and fare class, plus bonus miles based on your tier status.',
      details: [
        'Economy: 1 mile per mile flown',
        'Business: 1.5 miles per mile flown',
        'First Class: 2 miles per mile flown'
      ],
      rate: '1x - 3x miles'
    },
    {
      icon: '💳',
      title: 'Credit Cards',
      description: 'Get our co-branded credit card and earn miles on everyday purchases.',
      details: [
        '3x miles on Skyways purchases',
        '2x miles on travel and dining',
        '1x mile on everything else'
      ],
      rate: 'Up to 5 miles per $1'
    },
    {
      icon: '🏨',
      title: 'Hotels & Resorts',
      description: 'Stay at partner hotels and earn miles on your accommodation',
      rate: '2 miles per $1'
    },
    {
      icon: '🚗',
      title: 'Car Rentals',
      description: 'Rent from partner companies and accumulate miles',
      rate: '1-3 miles per $1'
    },
    {
      icon: '🛍️',
      title: 'Shopping Portal',
      description: 'Shop online through our portal at thousands of retailers',
      rate: '1-10 miles per $1'
    },
    {
      icon: '🍽️',
      title: 'Dining Partners',
      description: 'Dine at participating restaurants and earn miles',
      rate: '2 miles per $1'
    },
    {
      icon: '🎯',
      title: 'Promotions',
      description: 'Take advantage of special promotions and bonus mile opportunities.',
      details: [
        'Double mile promotions',
        'Route-specific bonuses',
        'Partner bonus campaigns'
      ],
      rate: 'Bonus miles'
    }
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

  // Merged reward options with comprehensive categories
  const rewardOptions = [
    {
      category: 'Flight Awards',
      items: [
        { name: 'Domestic Round-trip', miles: 'From 12,500 miles' }, // Updated with "from" for clarity
        { name: 'International Round-trip', miles: 'From 30,000 miles' }, // Updated from both versions
        { name: 'Business Class Upgrade', miles: 'From 15,000 miles' },
        { name: 'First Class Upgrade', miles: 'From 25,000 miles' } // Updated from both versions
      ]
    },
    {
      category: 'Experience Rewards',
      items: [
        { name: 'Airport Lounge Day Pass', miles: '2,500 miles' },
        { name: 'Hotel Night Certificate', miles: '10,000 miles' },
        { name: 'Car Rental Upgrade', miles: '5,000 miles' },
        { name: 'Vacation Package Discount', miles: '20,000 miles' }
      ]
    },
    {
      category: 'Lifestyle Rewards', // Merged shopping and lifestyle categories
      items: [
        { name: 'Gift Cards ($25)', miles: '2,500 miles' },
        { name: 'Electronics & Travel Gear', miles: 'Varies' }, // Added from first version
        { name: 'Magazine Subscriptions', miles: '1,500 miles' },
        { name: 'Wine Collection', miles: '7,500 miles' },
        { name: 'Charity Donations', miles: '1,000 miles' }
      ]
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
              Join our loyalty program and unlock exclusive benefits, earn miles, and enjoy premium travel experiences.
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
          
          <div className="tiers-grid grid grid-4"> {/* Updated to grid-4 for Diamond tier */}
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
          
          <div className="earning-grid grid grid-3" style={{ marginBottom: '3rem' }}>
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="earning-card card" style={{ padding: '2rem' }}>
                <div className="earning-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {opportunity.icon}
                </div>
                <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>{opportunity.title}</h3>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>
                  {opportunity.description}
                </p>
                {opportunity.details && (
                  <ul style={{ color: '#64748b', paddingLeft: '20px', marginBottom: '16px' }}>
                    {opportunity.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
                <div className="earning-rate" style={{ color: '#2e6bff', fontWeight: '600' }}>
                  {opportunity.rate}
                </div>
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
        
        {/* Merged redemption section */}
        <section className="redemption-section section bg-light" style={{ background: '#f8fafc', padding: '4rem 0' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Redeem Your Miles</h2>
          </div>
          
          <div className="rewards-grid grid grid-3">
            {rewardOptions.map((category, index) => (
              <div key={index} className="reward-category card" style={{ padding: '2rem' }}>
                <h3 className="category-title" style={{ color: '#0f172a', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                  {category.category}
                </h3>
                <div className="reward-items">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="reward-item" style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid #e2e8f0'
                    }}>
                      <span className="reward-name" style={{ color: '#64748b' }}>{item.name}</span>
                      <span className="reward-miles" style={{ color: '#2e6bff', fontWeight: '600' }}>{item.miles}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Program benefits section */}
        <section className="program-benefits section" style={{ padding: '4rem 0' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Why Join Skyways Rewards?</h2>
          </div>
          
          <div className="benefits-grid grid grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="benefit-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="benefit-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎁</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>Exclusive Perks</h3>
              <p style={{ color: '#64748b' }}>Access member-only deals, priority services, and special promotions designed just for you.</p>
            </div>
            
            <div className="benefit-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="benefit-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>Global Network</h3>
              <p style={{ color: '#64748b' }}>Earn and redeem miles with our extensive network of airline and travel partners worldwide.</p>
            </div>
            
            <div className="benefit-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="benefit-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>Easy Management</h3>
              <p style={{ color: '#64748b' }}>Track your miles, view benefits, and redeem rewards easily through our mobile app.</p>
            </div>
            
            <div className="benefit-card card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="benefit-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem' }}>No Expiration</h3>
              <p style={{ color: '#64748b' }}>Your miles never expire as long as you have qualifying activity every 18 months.</p>
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
                Join Skyways Rewards today and start earning miles on your next flight. Membership is free and benefits start immediately.
              </p>
              <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ background: 'white', color: '#2e6bff', padding: '14px 30px' }}>
                  Join Skyways Rewards
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