import React, { useState } from 'react';

function BookNow() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    flightNumber: '',
    flightDate: '',
    package: 'basic',
    passengers: '1'
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    alert('Thank you for your booking! We will contact you shortly to confirm your reservation.');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#D7B800', textAlign: 'center' }}>
          Book Your VIP Experience
        </h1>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ background: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Full Name</label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Email</label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Flight Number</label>
              <input
                type="text"
                name="flightNumber"
                value={bookingData.flightNumber}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Flight Date</label>
              <input
                type="date"
                name="flightDate"
                value={bookingData.flightDate}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Package</label>
              <select
                name="package"
                value={bookingData.package}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              >
                <option value="basic">Basic VIP - $150</option>
                <option value="premium">Premium VIP - $250</option>
                <option value="luxury">Luxury VIP - $400</option>
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Number of Passengers</label>
              <select
                name="passengers"
                value={bookingData.passengers}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4+ Passengers</option>
              </select>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookNow;