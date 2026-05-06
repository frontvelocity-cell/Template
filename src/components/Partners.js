import React from 'react';

function Partners() {
  const partners = [
    { 
      name: 'Emirates Airlines', 
      description: 'Official airline partner providing premium services' 
    },
    { 
      name: 'Dubai Airports', 
      description: 'Strategic partnership for seamless airport experiences' 
    },
    { 
      name: 'Marhaba Services', 
      description: 'Meet and greet services throughout Dubai Airport' 
    },
    { 
      name: 'Al Majlis Lounge', 
      description: 'Exclusive access to premium lounge facilities' 
    },
    { 
      name: 'Dubai Duty Free', 
      description: 'Exclusive shopping privileges and discounts' 
    },
    { 
      name: 'Luxury Transportation', 
      description: 'Premium ground transportation services' 
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="main-heading" style={{ 
          fontSize: '2.5rem', 
          marginBottom: '3rem', 
          color: '#D7B800', 
          textAlign: 'center' 
        }}>
          OUR TRUSTED PARTNERS
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '3rem', 
          textAlign: 'center', 
          maxWidth: '600px', 
          margin: '0 auto 3rem' 
        }}>
          We work with the best in the industry to provide you with exceptional service.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          {partners.map((partner, index) => (
            <div key={index} className="faq-card" style={{ 
              background: '#111', 
              padding: '2rem', 
              borderRadius: '8px', 
              border: '1px solid #333',
              minHeight: '120px'
            }}>
              <h3 style={{ 
                color: '#D7B800', 
                fontSize: '1.2rem', 
                marginBottom: '10px' 
              }}>
                {partner.name}
              </h3>
              <p className="faq-answer" style={{ 
                color: '#ccc', 
                lineHeight: '1.5' 
              }}>
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;