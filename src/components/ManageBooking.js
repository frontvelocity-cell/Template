import React, { useState } from 'react';
import './ManageBooking.css';

const ManageBooking = () => {
  // Unified state management combining both versions
  const [bookingData, setBookingData] = useState({
    bookingRef: '',
    lastName: '',
    email: ''
  });

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  // Unified input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enhanced search handler with improved simulation
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (bookingData.bookingRef && bookingData.lastName) {
        setBooking({
          reference: bookingData.bookingRef.toUpperCase(),
          passenger: bookingData.lastName,
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

  // Enhanced action handlers with better user feedback
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

  const handleAddBaggage = () => {
    alert('Redirecting to baggage selection page...');
  };

  // Merged management options from second version
  const managementOptions = [
    {
      icon: '✈️',
      title: 'View Flight Details',
      description: 'Check your flight times, seat assignments, and itinerary',
      action: () => alert('Viewing flight details...')
    },
    {
      icon: '💺',
      title: 'Select Seats',
      description: 'Choose or change your seat preferences',
      action: handleSelectSeats
    },
    {
      icon: '🍽️',
      title: 'Special Meals',
      description: 'Request dietary accommodations and special meals',
      action: () => alert('Redirecting to meal selection...')
    },
    {
      icon: '🎒',
      title: 'Add Baggage',
      description: 'Purchase additional baggage allowance',
      action: handleAddBaggage
    },
    {
      icon: '📅',
      title: 'Change Dates',
      description: 'Modify your travel dates (fees may apply)',
      action: handleModify
    },
    {
      icon: '❌',
      title: 'Cancel Booking',
      description: 'Cancel your reservation and request refund',
      action: handleCancel
    }
  ];

  // Cancellation policies from second version
  const cancellationPolicies = [
    {
      type: 'Flexible Fare',
      description: 'Free cancellation up to 24 hours before departure',
      refund: 'Full refund to original payment method'
    },
    {
      type: 'Standard Fare',
      description: 'Cancellation fee applies after 24 hours',
      refund: 'Partial refund minus cancellation fee'
    },
    {
      type: 'Basic Fare',
      description: 'Non-refundable, changes for fee only',
      refund: 'Credit voucher for future travel'
    }
  ];

  // FAQ section from second version
  const helpTopics = [
    {
      question: 'How do I change my flight dates?',
      answer: 'Log in to your booking, select "Change Dates" and follow the prompts. Fare differences and change fees may apply.'
    },
    {
      question: 'Can I add baggage after booking?',
      answer: 'Yes, you can add baggage online up to 4 hours before departure or at the airport (higher fees apply).'
    },
    {
      question: 'What if I need to cancel my trip?',
      answer: 'Cancellation policies vary by fare type. Check your booking details for specific terms and conditions.'
    },
    {
      question: 'How do I request special assistance?',
      answer: 'Contact our customer service team at least 48 hours before departure to arrange special assistance.'
    }
  ];

  return (
    <div className="manage-booking-page">
      <div className="container">
        {/* Enhanced page header combining both versions */}
        <div className="page-header" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <h1 className="section-title">Manage Your Booking</h1>
          <p className="section-subtitle">
            View, modify, or cancel your flight reservation with ease.
          </p>
        </div>
        
        {!booking ? (
          <>
            <div className="search-section">
              {/* Improved search form with enhanced styling */}
              <div className="search-form-container" style={{maxWidth: '500px', margin: '40px auto'}}>
                <div className="card">
                  <form className="search-form" onSubmit={handleSearch}>
                    <h2>Find Your Booking</h2>
                    
                    <div className="form-group" style={{marginBottom: '20px'}}>
                      <label htmlFor="bookingRef" style={{display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151'}}>
                        Booking Reference*
                      </label>
                      <input
                        type="text"
                        id="bookingRef"
                        name="bookingRef"
                        value={bookingData.bookingRef}
                        onChange={handleInputChange}
                        placeholder="Enter your 6-digit booking reference"
                        maxLength="6"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="form-group" style={{marginBottom: '20px'}}>
                      <label htmlFor="lastName" style={{display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151'}}>
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        placeholder="As shown on your booking"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="form-group" style={{marginBottom: '30px'}}>
                      <label htmlFor="email" style={{display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151'}}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '0.9rem'
                        }}
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary search-btn"
                      style={{width: '100%', padding: '14px'}}
                      disabled={loading}
                    >
                      {loading ? 'Searching...' : 'Find My Booking'}
                    </button>
                  </form>
                  <p className="lookup-help" style={{textAlign: 'center', marginTop: '16px', fontSize: '0.9rem', color: '#64748b'}}>
                    Your booking reference can be found in your confirmation email.
                  </p>
                </div>
              </div>
            </div>

            {/* Management options section from second version */}
            <div className="management-options">
              <h2 className="section-title">What You Can Do</h2>
              <div className="options-grid">
                {managementOptions.map((option, index) => (
                  <div key={index} className="option-card card">
                    <div className="option-icon">{option.icon}</div>
                    <h3 className="option-title">{option.title}</h3>
                    <p className="option-description">{option.description}</p>
                    <button className="btn btn-secondary option-btn" onClick={option.action}>
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation policies section */}
            <div className="cancellation-info">
              <h2 className="section-title">Cancellation Policies</h2>
              <div className="policies-grid">
                {cancellationPolicies.map((policy, index) => (
                  <div key={index} className="policy-card card">
                    <h3 className="policy-type">{policy.type}</h3>
                    <p className="policy-description">{policy.description}</p>
                    <div className="policy-refund">
                      <span className="refund-label">Refund Policy:</span>
                      <span className="refund-details">{policy.refund}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ section */}
            <div className="help-section">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-list">
                {helpTopics.map((topic, index) => (
                  <div key={index} className="faq-item card">
                    <h3 className="faq-question">{topic.question}</h3>
                    <p className="faq-answer">{topic.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced contact support section */}
            <div className="contact-support">
              <div className="support-card card">
                <h2>Need Additional Help?</h2>
                <p>Our customer service team is available 24/7 to assist with your booking.</p>
                <div className="support-options">
                  <div className="support-option">
                    <div className="support-icon">📞</div>
                    <div className="support-details">
                      <h4>Phone Support</h4>
                      <p><strong>+1 (800) 123-4567</strong></p>
                    </div>
                  </div>
                  
                  <div className="support-option">
                    <div className="support-icon">💬</div>
                    <div className="support-details">
                      <h4>Live Chat</h4>
                      <p>Chat with our support agents</p>
                      <button className="btn btn-secondary">Start Chat</button>
                    </div>
                  </div>
                  
                  <div className="support-option">
                    <div className="support-icon">📧</div>
                    <div className="support-details">
                      <h4>Email Support</h4>
                      <p><strong>support@skyways.com</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="booking-details" style={{maxWidth: '800px', margin: '40px auto'}}>
            <div className="card">
              <div className="booking-header">
                <h2 style={{color: '#0f172a', marginBottom: '30px'}}>Booking Details</h2>
                <span className={`status-badge ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="booking-info">
                {/* Enhanced booking reference and passenger display */}
                <div className="grid grid-2" style={{marginBottom: '30px'}}>
                  <div>
                    <h3 style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>BOOKING REFERENCE</h3>
                    <p style={{color: '#0f172a', fontSize: '1.2rem', fontWeight: '600'}}>{booking.reference}</p>
                  </div>
                  <div>
                    <h3 style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>PASSENGER</h3>
                    <p style={{color: '#0f172a', fontSize: '1.2rem', fontWeight: '600'}}>{booking.passenger}</p>
                  </div>
                </div>
                
                <div className="info-section">
                  <div style={{background: '#f8faff', padding: '24px', borderRadius: '12px', marginBottom: '30px'}}>
                    <h3 style={{color: '#0f172a', marginBottom: '16px'}}>Flight Information</h3>
                    <div className="info-grid grid grid-2">
                      <div>
                        <div className="info-item">
                          <span className="label"><strong>Flight:</strong></span>
                          <span className="value">{booking.flight}</span>
                        </div>
                        <div className="info-item">
                          <span className="label"><strong>Route:</strong></span>
                          <span className="value">{booking.route}</span>
                        </div>
                        <div className="info-item">
                          <span className="label"><strong>Date:</strong></span>
                          <span className="value">{booking.date}</span>
                        </div>
                        <div className="info-item">
                          <span className="label"><strong>Departure:</strong></span>
                          <span className="value">{booking.departure}</span>
                        </div>
                      </div>
                      <div>
                        <div className="info-item">
                          <span className="label"><strong>Arrival:</strong></span>
                          <span className="value">{booking.arrival}</span>
                        </div>
                        <div className="info-item">
                          <span className="label"><strong>Seat:</strong></span>
                          <span className="value">{booking.seat}</span>
                        </div>
                        <div className="info-item">
                          <span className="label"><strong>Class:</strong></span>
                          <span className="value">{booking.class}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced action buttons with comprehensive options */}
                <div className="booking-actions">
                  <h3>Manage Your Booking</h3>
                  <div className="action-buttons" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
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
                    <button className="btn btn-secondary" onClick={handleAddBaggage}>
                      Add Baggage
                    </button>
                    <button className="btn btn-outline" onClick={handleCancel}>
                      Cancel Booking
                    </button>
                  </div>
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