import React, { useState } from 'react';
import './ManageBooking.css';

const ManageBooking = () => {
  const [bookingData, setBookingData] = useState({
    bookingRef: '',
    lastName: '',
    email: ''
  });

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (bookingData.bookingRef && bookingData.lastName) {
        setBooking({
          reference: bookingData.bookingRef.toUpperCase(),
          passenger: 'John Doe',
          flight: 'SW 401',
          route: 'New York (JFK) → London (LHR)',
          date: '2026-03-15',
          departure: '14:30',
          arrival: '02:15',
          seat: '12A',
          class: 'Economy',
          status: 'Confirmed'
        });
      }
      setLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      alert('Booking cancelled successfully. Refund will be processed within 5-7 business days.');
      setBooking(null);
      setBookingData({ bookingRef: '', lastName: '', email: '' });
    }
  };

  const handleModify = () => {
    alert('Redirecting to flight modification page...');
  };

  const handleCheckIn = () => {
    alert('Redirecting to check-in page...');
  };

  const handleAddServices = () => {
    alert('Redirecting to additional services page...');
  };

  const handleSelectSeats = () => {
    alert('Redirecting to seat selection page...');
  };

  return (
    <div className="manage-booking-page">
      <div className="container">
        <div className="page-header">
          <h1>Manage Your Booking</h1>
          <p>View, modify, or cancel your flight reservation</p>
        </div>
        
        {!booking ? (
          <div className="search-section">
            <div className="search-form-container">
              <form className="search-form" onSubmit={handleSearch}>
                <h2>Find Your Booking</h2>
                
                <div className="form-group">
                  <label htmlFor="bookingRef">Booking Reference</label>
                  <input
                    type="text"
                    id="bookingRef"
                    name="bookingRef"
                    value={bookingData.bookingRef}
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
                    value={bookingData.lastName}
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
                    value={bookingData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary search-btn"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Find Booking'}
                </button>
              </form>
            </div>
            
            <div className="help-section">
              <h3>Need Help?</h3>
              <div className="help-options">
                <div className="help-option">
                  <h4>📞 Call Us</h4>
                  <p>Speak to our customer service team</p>
                  <p><strong>+1 (800) 123-4567</strong></p>
                </div>
                
                <div className="help-option">
                  <h4>💬 Live Chat</h4>
                  <p>Chat with our support agents</p>
                  <button className="btn btn-secondary">Start Chat</button>
                </div>
                
                <div className="help-option">
                  <h4>📧 Email Support</h4>
                  <p>Send us your query</p>
                  <p><strong>support@skyways.com</strong></p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="booking-details">
            <div className="booking-header">
              <h2>Booking Details</h2>
              <span className={`status-badge ${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </div>
            
            <div className="booking-info">
              <div className="info-section">
                <h3>Flight Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Booking Reference</span>
                    <span className="value">{booking.reference}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Passenger</span>
                    <span className="value">{booking.passenger}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Flight</span>
                    <span className="value">{booking.flight}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Route</span>
                    <span className="value">{booking.route}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Date</span>
                    <span className="value">{booking.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Departure</span>
                    <span className="value">{booking.departure}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Arrival</span>
                    <span className="value">{booking.arrival}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Seat</span>
                    <span className="value">{booking.seat}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Class</span>
                    <span className="value">{booking.class}</span>
                  </div>
                </div>
              </div>
              
              <div className="booking-actions">
                <h3>Manage Your Booking</h3>
                <div className="action-buttons">
                  <button className="btn btn-primary" onClick={handleCheckIn}>
                    Check In
                  </button>
                  <button className="btn btn-secondary" onClick={handleModify}>
                    Modify Booking
                  </button>
                  <button className="btn btn-secondary" onClick={handleAddServices}>
                    Add Services
                  </button>
                  <button className="btn btn-secondary" onClick={handleSelectSeats}>
                    Select Seats
                  </button>
                  <button className="btn btn-outline" onClick={handleCancel}>
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBooking;