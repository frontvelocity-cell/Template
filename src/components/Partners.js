import React from 'react';

function Partners() {
  const partners = [
    'Emirates Airlines',
    'Dubai Airports',
    'Marhaba Services',
    'Al Majlis Lounge',
    'Premium Terminal Services'
  ];

  return (
    <div className="page-container">
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#D7B800', textAlign: 'center' }}>
          Our Trusted Partners
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
          We work with the best in the industry to provide you with exceptional service.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {partners.map((partner, index) => (
            <div key={index} style={{ 
              background: '#111', 
              padding: '2rem', 
              borderRadius: '8px', 
              border: '1px solid #333',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100px'
            }}>
              <h3 style={{ color: '#D7B800', fontSize: '1.2rem' }}>{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;