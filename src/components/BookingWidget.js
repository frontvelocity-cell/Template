```jsx
import React, { useState } from 'react';
import './BookingWidget.css';

const BookingWidget = () => {
  // Unified state management - combining object-based approach with trip type state
  const [tripType, setTripType] = useState('roundtrip');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1 Adult',
    class: 'Economy',
    promo: ''
  });

  // Unified input handler - scalable approach for all form fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enhanced search handler with comprehensive validation
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Basic validation for required fields
    if (!formData.from || !formData.to || !formData.departure) {
      alert('Please fill in all required fields');
      return;
    }

    // Round trip specific validation
    if (tripType === 'roundtrip' && !formData.return) {
      alert('Please select a return date');
      return;
    }

    console.log('Searching flights...', { tripType, ...formData });
  };

  return (
    <div className="booking-widget">
      {/* Merged header section with better UX title */}
      <div className="booking-header">
        <h2>Book Your Flight</h2>
        
        {/* Enhanced trip type selector - combining radio and button approaches for accessibility */}
        <div className="trip-type-selector">
          <label className={tripType === 'roundtrip' ? 'active' : ''}>
            <input 
              type="radio" 
              value="roundtrip" 
              checked={tripType === 'roundtrip'}
              onChange={(e) => setTripType(e.target.value)}
            />
            Round Trip
          </label>
          <label className={tripType === 'oneway' ? 'active' : ''}>
            <input 
              type="radio" 
              value="oneway" 
              checked={tripType === 'oneway'}
              onChange={(e) => setTripType(e.target.value)}
            />
            One Way
          </label>
          <label className={tripType === 'multicity' ? 'active' : ''}>
            <input 
              type="radio" 
              value="multicity" 
              checked={tripType === 'multicity'}
              onChange={(e) => setTripType(e.target.value)}
            />
            Multi-city
          </label>
        </div>
      </div>
      
      {/* Form with proper semantic structure and accessibility */}
      <form onSubmit={handleSearch} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label>📍 From</label>
            <input 
              type="text" 
              name="from"
              placeholder="Departure city"
              value={formData.from}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>📍 To</label>
            <input 
              type="text" 
              name="to"
              placeholder="Destination city"
              value={formData.to}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>📅 Departure</label>
            <input 
              type="date" 
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
              required
            />
          </div>
          {tripType === 'roundtrip' && (
            <div className="form-group">
              <label>📅 Return</label>
              <input 
                type="date" 
                name="return"
                value={formData.return}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>👤 Passengers</label>
            <select name="passengers" value={formData.passengers} onChange={handleInputChange}>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>5+ Adults</option>
            </select>
          </div>
          <div className="form-group">
            <label>💼 Class</label>
            <select name="class" value={formData.class} onChange={handleInputChange}>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
        </div>
        
        {/* Optional promo code field from enhanced version */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>🎫 Promo Code</label>
            <input 
              type="text" 
              name="promo"
              placeholder="Add code (optional)"
              value={formData.promo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary search-btn">
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default BookingWidget;
```