```jsx
import React, { useState } from 'react';
import './BookingWidget.css';

const BookingWidget = () => {
  // Unified state management - combining both approaches for better structure
  const [tripType, setTripType] = useState('roundtrip');
  const [formData, setFormData] = useState({
    from: '', // Removed default values for better UX
    to: '',
    departure: '',
    return: '',
    passengers: '1 Adult',
    class: 'Economy',
    promo: ''
  });

  // Unified input handler - more scalable approach from first version
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enhanced search handler - combining both approaches with form validation
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.from || !formData.to || !formData.departure) {
      alert('Please fill in all required fields');
      return;
    }

    if (tripType === 'roundtrip' && !formData.return) {
      alert('Please select a return date');
      return;
    }

    console.log('Searching flights...', { tripType, ...formData });
  };

  return (
    <div className="booking-widget">
      {/* Added title from second version for better UX */}
      <h3>Find Your Flight</h3>
      
      {/* Enhanced trip type selector - keeping button approach for better UX */}
      <div className="trip-type">
        <button 
          className={`trip-btn ${tripType === 'roundtrip' ? 'active' : ''}`}
          onClick={() => setTripType('roundtrip')}
        >
          Round Trip
        </button>
        <button 
          className={`trip-btn ${tripType === 'oneway' ? 'active' : ''}`}
          onClick={() => setTripType('oneway')}
        >
          One Way
        </button>
        <button 
          className={`trip-btn ${tripType === 'multicity' ? 'active' : ''}`}
          onClick={() => setTripType('multicity')}
        >
          Multi-city
        </button>
      </div>
      
      {/* Form wrapper with proper form element for accessibility */}
      <form onSubmit={handleSearch} className="booking-form">
        <div className="form-row">
          <div className="form-field">
            <label>📍 FROM</label>
            <input 
              type="text" 
              name="from"
              placeholder="Departure city"
              value={formData.from}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label>📍 TO</label>
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
          <div className="form-field">
            <label>📅 DEPARTURE</label>
            <input 
              type="date" 
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
              required
            />
          </div>
          {tripType === 'roundtrip' && (
            <div className="form-field">
              <label>📅 RETURN</label>
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
          <div className="form-field">
            <label>👤 PASSENGERS</label>
            <select name="passengers" value={formData.passengers} onChange={handleInputChange}>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>5+ Adults</option>
            </select>
          </div>
          <div className="form-field">
            <label>💼 CLASS</label>
            <select name="class" value={formData.class} onChange={handleInputChange}>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field full-width">
            <label>🎫 PROMO</label>
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