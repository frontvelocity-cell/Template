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

  // Handle input changes for form fields - merged to handle all form inputs
  const handleInputChange = (e) => {
    setCheckInData({
      ...checkInData,
      [e.target.name]: e.target.value
    });
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
      }, 1000);
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

  // Boarding pass success view - merged inline styles with CSS classes for better maintainability
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

  // Main check-in form view - merged both form designs with enhanced features
  return (
    <div className="checkin-page">
      <div className="container">
        {/* Page header with title and description - preserved from first version */}
        <div className="page-header">
          <h1>Online Check-In</h1>
          <p>Check in online and get your boarding pass on your mobile device</p>
        </div>
        
        <div className="checkin-content">
          {/* Check-in form container - enhanced with email field and loading state */}
          <div className="checkin-form-container">
            <form className="checkin-form" onSubmit={handleCheckIn}>
              <h2>Check In to Your Flight</h2>
              
              <div className="form-group">
                <label htmlFor="bookingRef">Booking Reference</label>
                <input
                  type="text"
                  id="bookingRef"
                  name="bookingRef"
                  value={checkInData.bookingRef}
                  onChange={handleInputChange}
                  placeholder="Enter your 6-digit booking reference"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={checkInData.lastName}
                  onChange={handleInputChange}
                  placeholder="As shown on your booking"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={checkInData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary checkin-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Checking In...' : 'Check In Now'}
              </button>
            </form>
          </div>
          
          {/* Information cards section - preserved from first version */}
          <div className="checkin-info">
            <div className="info-card">
              <h3>⏰ Check-In Times</h3>
              <ul>
                <li>Online check-in opens 24 hours before departure</li>
                <li>International flights: 3 hours before departure</li>
                <li>Domestic flights: 2 hours before departure</li>
                <li>Check-in closes 1-2 hours before departure</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>📱 Mobile Boarding Pass</h3>
              <ul>
                <li>Download the Skyways app</li>
                <li>Get your boarding pass instantly</li>
                <li>Skip the airport check-in lines</li>
                <li>Save to your mobile wallet</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>🧳 Baggage Information</h3>
              <ul>
                <li>Check baggage allowance for your fare</li>
                <li>Add extra baggage if needed</li>
                <li>Print baggage tags at the airport</li>
                <li>Have your passport ready for international flights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;