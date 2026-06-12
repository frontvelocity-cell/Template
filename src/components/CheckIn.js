```jsx
import React, { useState } from 'react';
import './CheckIn.css';

const CheckIn = () => {
  // State management for check-in form data and process status
  const [checkInData, setCheckInData] = useState({
    bookingRef: '',
    lastName: '',
    email: ''
  });
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [boardingPass, setBoardingPass] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes for form fields - unified handler for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckInData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission for check-in process - enhanced with boarding pass generation
  const handleCheckIn = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (checkInData.bookingRef && checkInData.lastName) {
      setIsLoading(true);
      
      // Simulate check-in process with loading state
      setTimeout(() => {
        setBoardingPass({
          passenger: 'John Doe',
          flight: 'SW 401',
          from: 'NYC',
          to: 'LON',
          date: '2024-03-15',
          departure: '08:30',
          gate: 'A12',
          seat: '14A',
          boarding: 'Zone 2',
          bookingRef: checkInData.bookingRef
        });
        setIsCheckedIn(true);
        setIsLoading(false);
      }, 2000);
    }
  };

  // Reset check-in state to return to form
  const handleNewCheckIn = () => {
    setIsCheckedIn(false);
    setBoardingPass(null);
    setCheckInData({
      bookingRef: '',
      lastName: '',
      email: ''
    });
  };

  // Merged check-in steps data
  const checkInSteps = [
    {
      step: '1',
      title: 'Enter Details',
      description: 'Provide your booking reference and last name'
    },
    {
      step: '2',
      title: 'Select Seats',
      description: 'Choose your preferred seats for the flight'
    },
    {
      step: '3',
      title: 'Confirm Details',
      description: 'Review your information and preferences'
    },
    {
      step: '4',
      title: 'Get Boarding Pass',
      description: 'Download or receive your mobile boarding pass'
    }
  ];

  // Merged check-in tips with enhanced information
  const checkInTips = [
    {
      icon: '⏰',
      title: 'Check-In Times',
      description: 'Online check-in opens 24 hours before departure. Domestic flights close 1 hour before departure, international flights close 2 hours before departure.'
    },
    {
      icon: '📱',
      title: 'Mobile Check-in',
      description: 'Download our mobile app for the fastest check-in experience. Get your boarding pass on your phone and skip the airport queues.'
    },
    {
      icon: '🧳',
      title: 'Baggage Information',
      description: 'Check baggage allowance for your fare. Add extra baggage if needed. Print baggage tags at the airport and have your passport ready for international flights.'
    },
    {
      icon: '🆔',
      title: 'Required Documents',
      description: 'Ensure you have valid ID and any required travel documents for your destination. Review prohibited items before packing.'
    }
  ];

  // Boarding pass success view - merged design with enhanced features
  if (isCheckedIn && boardingPass) {
    return (
      <div className="checkin-page">
        <div className="container">
          <div className="checkin-success">
            <h1 className="success-title">
              ✓ Check-in Successful!
            </h1>
            
            <div className="boarding-pass-container">
              <h2 className="boarding-pass-title">
                Mobile Boarding Pass
              </h2>
              
              <div className="boarding-pass-details">
                <div className="detail-row">
                  <div className="detail-item">
                    <div className="detail-label">Passenger</div>
                    <div className="detail-value">{boardingPass.passenger}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Flight</div>
                    <div className="detail-value">{boardingPass.flight}</div>
                  </div>
                </div>
                
                <div className="detail-row">
                  <div className="detail-item">
                    <div className="detail-label">Route</div>
                    <div className="detail-value">{boardingPass.from} → {boardingPass.to}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Date</div>
                    <div className="detail-value">{boardingPass.date}</div>
                  </div>
                </div>
                
                <div className="detail-row">
                  <div className="detail-item">
                    <div className="detail-label">Seat</div>
                    <div className="detail-value">{boardingPass.seat}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Gate</div>
                    <div className="detail-value">{boardingPass.gate}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Boarding</div>
                    <div className="detail-value">{boardingPass.boarding}</div>
                  </div>
                </div>
              </div>
              
              <div className="qr-code">
                QR Code
              </div>
              
              <div className="boarding-pass-actions">
                <button className="btn btn-primary">
                  Save to Wallet
                </button>
                <button className="btn btn-secondary">
                  Send via Email
                </button>
              </div>
            </div>
            
            <button 
              className="btn btn-outline new-checkin-btn" 
              onClick={handleNewCheckIn}
            >
              New Check-in
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main check-in form view - merged both designs with enhanced features
  return (
    <div className="checkin-page">
      <div className="hero-section">
        <div className="container">
          {/* Page header with merged title and description */}
          <div className="page-header">
            <h1 className="page-title">Online Check-In</h1>
            <p className="page-description">
              Check in online and get your boarding pass on your mobile device. Save time at the airport.
            </p>
          </div>
          
          <div className="checkin-content">
            {/* Check-in form container - enhanced with email field and improved styling */}
            <div className="checkin-form-section">
              <div className="checkin-form-card card">
                <h2>Check In to Your Flight</h2>
                
                <form className="checkin-form" onSubmit={handleCheckIn}>
                  <div className="form-group">
                    <label htmlFor="bookingRef">Booking Reference*</label>
                    <input
                      type="text"
                      id="bookingRef"
                      name="bookingRef"
                      value={checkInData.bookingRef}
                      onChange={handleInputChange}
                      placeholder="Enter your 6-character booking reference"
                      maxLength="6"
                      required
                    />
                    <small className="form-hint">
                      Found in your booking confirmation email
                    </small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={checkInData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter passenger's last name as shown on booking"
                      required
                    />
                    <small className="form-hint">
                      As shown on your booking confirmation
                    </small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={checkInData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address (optional)"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary checkin-submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Checking In...' : 'Check In Now'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Check-in process steps */}
            <div className="checkin-steps">
              <h3>Check-In Process</h3>
              <div className="steps-list">
                {checkInSteps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Information cards section - merged and enhanced content */}
          <div className="checkin-tips">
            <h2 className="section-title">Check-In Information</h2>
            <div className="tips-grid">
              {checkInTips.map((tip, index) => (
                <div key={index} className="tip-card card">
                  <div className="tip-icon">{tip.icon}</div>
                  <h3 className="tip-title">{tip.title}</h3>
                  <p className="tip-description">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Alternative check-in options */}
          <div className="alternative-checkin">
            <div className="alternative-card card">
              <h2>Alternative Check-In Options</h2>
              <div className="alternative-options">
                <div className="option">
                  <div className="option-icon">🏢</div>
                  <div className="option-content">
                    <h3>Airport Check-In</h3>
                    <p>Check in at our counters or self-service kiosks at the airport</p>
                    <span className="option-time">Opens 3 hours before departure</span>
                  </div>
                </div>
                
                <div className="option">
                  <div className="option-icon">📞</div>
                  <div className="option-content">
                    <h3>Phone Check-In</h3>
                    <p>Call our customer service team for assistance with check-in</p>
                    <span className="option-time">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
```