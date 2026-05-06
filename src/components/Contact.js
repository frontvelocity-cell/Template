import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#D7B800', textAlign: 'center' }}>
          Contact Us
        </h1>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#D7B800', marginBottom: '1rem' }}>Get in Touch</h3>
            <p style={{ marginBottom: '1rem' }}>Email: info@dxbviplounge.com</p>
            <p style={{ marginBottom: '1rem' }}>Phone: +971 4 123 4567</p>
            <p>Address: Dubai International Airport, Terminal 3</p>
          </div>
          
          <form onSubmit={handleSubmit} style={{ background: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
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
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', borderRadius: '4px', color: '#fff', resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;