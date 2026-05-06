import React from 'react';

function Packages() {
  const packages = [
    {
      name: 'Basic VIP',
      price: '$150',
      features: ['Lounge Access', 'Priority Check-in', 'Fast Track Security']
    },
    {
      name: 'Premium VIP',
      price: '$250',
      features: ['Lounge Access', 'Priority Check-in', 'Fast Track Security', 'Personal Assistant', 'Meet & Greet']
    },
    {
      name: 'Luxury VIP',
      price: '$400',
      features: ['All Premium Features', 'Private Transfer', 'Baggage Handling', 'Concierge Service']
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#D7B800', textAlign: 'center' }}>
          Our VIP Packages
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {packages.map((pkg, index) => (
            <div key={index} style={{ 
              background: '#111', 
              padding: '2rem', 
              borderRadius: '8px', 
              border: '1px solid #333',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#D7B800', marginBottom: '1rem', fontSize: '1.5rem' }}>{pkg.name}</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff' }}>{pkg.price}</div>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #333' }}>{feature}</li>
                ))}
              </ul>
              <button className="btn-primary" style={{ width: '100%' }}>Select Package</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages;