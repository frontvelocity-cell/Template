import React, { useState } from 'react';
import './CheckIn.css';

const CheckIn = () => {
  // State management for check-in form data
  const [checkInData, setCheckInData] = useState({
    bookingRef: '',
    lastName: '',
    email: ''
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    setCheckInData({
      ...checkInData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission for check-in process
  const handleCheckIn = (e) => {
    e.preventDefault();
    console.log('Checking in...', checkInData);
  };

  return (
    <div className="checkin-page">
      <div className="container">
        {/* Page header with title and description */}
        <div className="page-header">
          <h1>Online Check-In</h1>
          <p>Check in online and get your boarding pass on your mobile device</p>
        </div>
        
        <div className="checkin-content">
          {/* Check-in form container */}
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
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary checkin-btn">
                Check In Now
              </button>
            </form>
          </div>
          
          {/* Information cards section */}
          <div className="checkin-info">
            <div className="info-card">
              <h3>⏰ Check-In Times</h3>
              <ul>
                <li>Domestic flights: 2 hours before departure</li>
                <li>International flights: 3 hours before departure</li>
                <li>Online check-in opens 24 hours before</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>📱 Mobile Boarding Pass</h3>
              <ul>
                <li>Download the Skyways app</li>
                <li>Get your boarding pass instantly</li>
                <li>Skip the airport check-in lines</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>🧳 Baggage Information</h3>
              <ul>
                <li>Check baggage allowance for your fare</li>
                <li>Add extra baggage if needed</li>
                <li>Print baggage tags at the airport</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;