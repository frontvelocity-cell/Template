```javascript
import React from 'react';
import './Deals.css';
import SpecialOffers from './SpecialOffers';

// Merged and comprehensive deals data combining all versions
const deals = [
  {
    id: 1,
    title: 'Summer Escape Special',
    description: 'Save up to 40% on premium destinations across Europe and Asia',
    discount: '40% OFF',
    validUntil: 'Valid until July 31, 2026',
    destinations: ['Paris', 'Tokyo', 'Singapore', 'Europe', 'Asia'],
    code: 'SUMMER40',
    originalPrice: '$1,200',
    salePrice: '$720',
    badge: 'LIMITED TIME',
    className: 'deal-summer'
  },
  {
    id: 2,
    title: 'Business Class Upgrade',
    description: 'Upgrade to Business Class for just $199 on selected routes',
    discount: 'FROM $199',
    validUntil: 'Valid until December 31, 2024',
    destinations: ['New York', 'London', 'Dubai', 'All Routes'],
    code: 'BIZCLASS',
    originalPrice: '$599',
    salePrice: '$199',
    badge: 'EXCLUSIVE',
    className: 'deal-business'
  },
  {
    id: 3,
    title: 'Weekend Getaway Deals',
    description: 'Perfect for short trips and quick escapes',
    discount: '25% OFF',
    validUntil: 'Valid for weekend departures',
    destinations: ['Miami', 'Las Vegas', 'Barcelona', 'Domestic', 'Regional'],
    code: 'WEEKEND25',
    originalPrice: '$400',
    salePrice: '$300',
    badge: 'WEEKEND SPECIAL',
    className: 'deal-weekend'
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
    title: 'Flash Sale: Europe',
    description: 'Save up to 50% on flights to major European cities',
    discount: '50% OFF',
    validUntil: 'Valid until February 15, 2024',
    destinations: ['Paris', 'London', 'Rome', 'Barcelona'],
    code: 'EUROPE50',
    originalPrice: '$800',
    salePrice: '$400'
  }
];

// Consolidated destination deals with specific pricing
const destinationDeals = [
  {
    destination: 'Tokyo',
    country: 'Japan',
    originalPrice: '$1,240',
    dealPrice: '$899',
    savings: '$341',
    validUntil: 'July 15, 2024'
  },
  {
    destination: 'Paris',
    country: 'France',
    originalPrice: '$680',
    dealPrice: '$499',
    savings: '$181',
    validUntil: 'July 20, 2024'
  },
  {
    destination: 'Dubai',
    country: 'UAE',
    originalPrice: '$850',
    dealPrice: '$649',
    savings: '$201',
    validUntil: 'July 25, 2024'
  },
  {
    destination: 'Singapore',
    country: 'Singapore',
    originalPrice: '$920',
    dealPrice: '$699',
    savings: '$221',
    validUntil: 'July 30, 2024'
  }
];

// Consolidated deal categories with specific route pricing
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

// Deal types for informational section
const dealTypes = [
  {
    icon: '🌟',
    title: 'Flash Sales',
    description: 'Limited-time offers with massive savings'
  },
  {
    icon: '✈️',
    title: 'Last Minute Deals',
    description: 'Great prices on flights departing soon'
  },
  {
    icon: '🎯',
    title: 'Group Discounts',
    description: 'Special rates for 10+ passengers'
  },
  {
    icon: '💎',
    title: 'Premium Upgrades',
    description: 'Affordable luxury class experiences'
  }
];

function Deals() {
  return (
    <div className="deals-page">
      {/* Enhanced hero section with consistent styling */}
      <div className="hero-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="page-header text-center">
            <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
              Amazing Flight Deals & Offers
            </h1>
            <p className="page-description" style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Save big on your next adventure with our exclusive travel deals and limited-time offers
            </p>
          </div>
        </div>
      </div>

      {/* Special Offers component */}
      <SpecialOffers />
      
      {/* Featured promotional deals section */}
      <section className="section">
        <div className="container">
          <div className="featured-deals">
            <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Featured Offers
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Limited time offers you don't want to miss
              </p>
            </div>
            
            <div className="deals-grid">
              {deals.map(deal => (
                <div key={deal.id} className={`deal-card card ${deal.className || ''}`}>
                  {deal.badge && <div className="deal-badge">{deal.badge}</div>}
                  <div className="deal-discount">{deal.discount}</div>
                  
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
                    
                    {deal.originalPrice && deal.salePrice && (
                      <div className="deal-pricing">
                        <span className="original-price">{deal.originalPrice}</span>
                        <span className="sale-price">{deal.salePrice}</span>
                      </div>
                    )}
                    
                    {deal.code && (
                      <div className="deal-code">
                        <span>Use code: <strong>{deal.code}</strong></span>
                      </div>
                    )}
                    
                    <div className="deal-validity">
                      {deal.validUntil}
                    </div>
                    
                    <button className="btn btn-primary deal-btn deal-cta">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destination deals section */}
      <section className="section">
        <div className="container">
          <div className="destination-deals">
            <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Destination Deals
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Exclusive offers to your favorite destinations
              </p>
            </div>
            
            <div className="destination-deals-grid grid grid-4">
              {destinationDeals.map((deal, index) => (
                <div key={index} className="destination-deal-card card">
                  <div className="destination-deal-header">
                    <h3 className="destination-name">{deal.destination}</h3>
                    <span className="destination-country">{deal.country}</span>
                  </div>
                  
                  <div className="price-comparison">
                    <div className="original-price">
                      <span className="price-label">Regular Price:</span>
                      <span className="price-value crossed">{deal.originalPrice}</span>
                    </div>
                    <div className="deal-price">
                      <span className="price-label">Deal Price:</span>
                      <span className="price-value highlighted">{deal.dealPrice}</span>
                    </div>
                  </div>
                  
                  <div className="savings-info">
                    <span className="savings-amount">Save {deal.savings}</span>
                    <span className="valid-until">Valid until {deal.validUntil}</span>
                  </div>
                  
                  <button className="btn btn-primary destination-deal-cta">
                    Book This Deal
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Route-specific deal categories section */}
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

      {/* Deal types information section */}
      <section className="section">
        <div className="container">
          <div className="deal-types">
            <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Types of Deals
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Discover different ways to save on your travels
              </p>
            </div>
            
            <div className="deal-types-grid grid grid-4">
              {dealTypes.map((type, index) => (
                <div key={index} className="deal-type-card card">
                  <div className="deal-type-icon">{type.icon}</div>
                  <h3 className="deal-type-title">{type.title}</h3>
                  <p className="deal-type-description">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter signup section */}
      <section className="section">
        <div className="container">
          <div className="newsletter-signup">
            <div className="newsletter-card card text-center" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
                Never Miss a Deal
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem' }}>
                Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.
              </p>
              <div className="newsletter-form" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  style={{ flex: '1', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Deals;
```