import React, { useState } from 'react';

function Contact() {
  // Merged state management from first version with enhanced form handling
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
        {/* Merged heading styles - using consistent styling pattern */}
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#D7B800', textAlign: 'center' }}>
          Contact Us
        </h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Enhanced contact information section combining both versions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '3rem' }}>
            <div className="faq-card">
              <h3 style={{ color: '#D7B800', marginBottom: '20px' }}>Contact Information</h3>
              <div className="faq-answer">
                <p><strong>Phone:</strong> +971 4 224 5555</p>
                <p><strong>Email:</strong> info@dxbviplounge.com</p>
                <p><strong>Address:</strong> Dubai International Airport, Terminal 3, Concourse B</p>
                <p><strong>Operating Hours:</strong> 24/7</p>
              </div>
            </div>
            
            <div className="faq-card">
              <h3 style={{ color: '#D7B800', marginBottom: '20px' }}>Emergency Contact</h3>
              <div className="faq-answer">
                <p><strong>24/7 Hotline:</strong> +971 50 123 4567</p>
                <p><strong>WhatsApp:</strong> +971 50 123 4567</p>
                <p><strong>Emergency Email:</strong> emergency@dxbviplounge.com</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced contact form merging both versions with improved functionality */}
          <div className="faq-card">
            <h3 style={{ color: '#D7B800', marginBottom: '20px' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '5px', 
                    border: '1px solid #333', 
                    backgroundColor: '#111', 
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '5px', 
                    border: '1px solid #333', 
                    backgroundColor: '#111', 
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D7B800' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '5px', 
                    border: '1px solid #333', 
                    backgroundColor: '#111', 
                    color: '#fff', 
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;