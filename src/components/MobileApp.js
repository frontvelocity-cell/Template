import React from 'react';
import './MobileApp.css';

const features = [
  '✓ Mobile boarding pass',
  '✓ Instant flight notifications',
  '✓ Offline itinerary access',
  '✓ Loyalty miles tracking'
];

const MobileApp = () => {
  return (
    <section className="mobile-app-section">
      <div className="container">
        <div className="app-content">
          <div className="app-text">
            <div className="app-badge">MOBILE APP</div>
            <h2 className="app-title">Your boarding pass, in your pocket.</h2>
            <p className="app-subtitle">
              Manage bookings, get real-time updates, and check in from anywhere.
            </p>
            
            <div className="app-features">
              {features.map((feature, index) => (
                <div key={index} className="app-feature">
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="app-downloads">
              <div className="qr-section">
                <div className="qr-code"></div>
                <div className="download-buttons">
                  <a href="#" className="download-btn">📱 App Store</a>
                  <a href="#" className="download-btn">▶ Google Play</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="app-mockup">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-header">Skyways</div>
                <div className="flight-info">
                  <strong>NYC → LON</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;