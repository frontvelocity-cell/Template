import React, { useState } from 'react';
import './BookingWidget.css';

function BookingWidget() {
  const [tripType, setTripType] = useState('roundtrip');
  const [formData, setFormData] = useState({
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departure: '2026-03-15',
    return: '2026-03-28',
    passengers: '1 Adult',
    class: 'Economy',
    promo: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    console.log('Searching flights...', formData);
  };

  return (
    <div className="booking-widget">
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
      
      <div className="booking-form">
        <div className="form-row">
          <div className="form-field">
            <label>📍 FROM</label>
            <input 
              type="text" 
              name="from"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>📍 TO</label>
            <input 
              type="text" 
              name="to"
              value={formData.to}
              onChange={handleInputChange}
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
        
        <button className="btn btn-primary search-btn" onClick={handleSearch}>
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default BookingWidget;