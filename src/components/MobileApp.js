import React from 'react';
import './MobileApp.css';

// Merged features array with consistent formatting
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
            {/* Merged badge section with consistent styling */}
            <div className="app-badge">MOBILE APP</div>
            <h2 className="app-title">Your boarding pass, in your pocket.</h2>
            <p className="app-subtitle">
              Manage bookings, get real-time updates, and check in from anywhere.
            </p>
            
            {/* Merged features section using map instead of static list */}
            <div className="app-features">
              {features.map((feature, index) => (
                <div key={index} className="app-feature">
                  {feature}
                </div>
              ))}
            </div>
            
            {/* Merged download section with QR code and buttons */}
            <div className="app-downloads">
              <div className="qr-section">
                <div className="qr-code"></div>
                <div className="download-buttons">
                  <a href="#" className="download-btn app-store">📱 App Store</a>
                  <a href="#" className="download-btn google-play">▶ Google Play</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Merged phone mockup with enhanced content from both versions */}
          <div className="app-mockup">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-header">Skyways</div>
                <div className="flight-card">
                  <div className="flight-info">
                    <strong>NYC → LON</strong>
                    <p className="flight-number">Flight SK 1234</p>
                  </div>
                  <div className="boarding-pass-qr">
                    <div className="qr-placeholder">QR Code</div>
                    <p className="boarding-pass-label">Mobile Boarding Pass</p>
                  </div>
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