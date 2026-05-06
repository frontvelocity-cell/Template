import React from 'react';

function Packages() {
  const packages = [
    {
      name: 'Essential VIP',
      price: '$150',
      features: ['Airport Meet & Greet', 'Fast Track Immigration', 'Lounge Access (2 hours)', 'Complimentary Refreshments', 'Priority Check-in']
    },
    {
      name: 'Premium VIP',
      price: '$250',
      features: ['Airport Meet & Greet', 'Fast Track Immigration', 'Lounge Access (4 hours)', 'Premium Dining', 'Business Center Access', 'Shower Facilities', 'Personal Assistant']
    },
    {
      name: 'Luxury VIP',
      price: '$400',
      features: ['Personal Assistant', 'Fast Track Immigration', 'Private Lounge Access', 'Unlimited Dining', 'Spa Services', 'Private Transportation', 'Baggage Handling', 'Concierge Service']
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="main-heading" style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#D7B800', textAlign: 'center' }}>
          OUR VIP PACKAGES
        </h1>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1000px', 
          margin: '0 auto',
          marginTop: '40px'
        }}>
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="faq-card"
              style={{ 
                background: '#111', 
                padding: '2rem', 
                borderRadius: '8px', 
                border: '1px solid #333',
                textAlign: 'center'
              }}
            >
              <h3 style={{ 
                color: '#FFD700', 
                marginBottom: '1rem', 
                fontSize: '1.5rem' 
              }}>
                {pkg.name}
              </h3>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem', 
                color: '#fff' 
              }}>
                {pkg.price}
              </div>
              <ul style={{ 
                listStyle: 'none', 
                marginBottom: '2rem',
                padding: 0 
              }}>
                {pkg.features.map((feature, i) => (
                  <li 
                    key={i} 
                    style={{ 
                      padding: '0.5rem 0', 
                      borderBottom: '1px solid #333',
                      marginBottom: '10px',
                      color: '#cccccc'
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="btn-primary" 
                style={{ 
                  width: '100%',
                  marginTop: '20px' 
                }}
              >
                SELECT PACKAGE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages;