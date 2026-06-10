```javascript
import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    icon: '✈',
    title: 'Flexible Booking',
    description: 'Change or cancel up to 24h before departure.'
  },
  {
    id: 2,
    icon: '🕐',
    title: 'Real-Time Updates',
    description: 'Live gate, delay, and weather alerts.'
  },
  {
    id: 3,
    icon: '🌍',
    title: '24/7 Global Support',
    description: 'Multilingual support in 40+ countries.'
  },
  {
    id: 4,
    icon: '🌱',
    title: 'Sustainable Flying',
    description: 'Carbon-offset every flight automatically.'
  },
  {
    id: 5,
    icon: '☕',
    title: 'Premium Lounges',
    description: 'Access 1,300+ lounges worldwide.'
  },
  {
    id: 6,
    icon: '⚡',
    title: 'Fast Check-in',
    description: 'Skip the line with mobile boarding.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">WHY CHOOSE US</span>
          <h2 className="section-title">Travel with confidence</h2>
          <p className="section-subtitle">
            Every detail engineered for a calmer, smarter journey.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
```