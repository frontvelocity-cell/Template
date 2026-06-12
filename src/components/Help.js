```jsx
import React, { useState } from 'react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'booking', name: 'Booking' },
    { id: 'checkin', name: 'Check-in' },
    { id: 'baggage', name: 'Baggage' },
    { id: 'loyalty', name: 'Loyalty Program' },
    { id: 'refunds', name: 'Refunds' },
    { id: 'other', name: 'Other' }
  ];

  // Merged and deduplicated FAQ data with enhanced content
  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How can I book a flight?',
      answer: 'You can book flights through our website, mobile app, or by calling our customer service. Simply enter your departure and destination cities, select your travel dates, and choose from available flights.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking online through "Manage Booking" section. Changes may be subject to fare differences and change fees depending on your ticket type. Flexible fares allow free changes, while other fares may incur fees.'
    },
    {
      id: 3,
      category: 'checkin',
      question: 'How do I check in for my flight?',
      answer: 'You can check in online through our website or mobile app starting 24 hours before your flight. Simply enter your booking reference and last name to access your booking. Online check-in closes 2 hours before international flights and 1 hour before domestic flights.'
    },
    {
      id: 4,
      category: 'baggage',
      question: 'What is the baggage allowance?',
      answer: 'Each passenger is allowed one carry-on bag (max 10kg/22lbs) and one personal item. Checked baggage allowance varies by ticket type and destination. Premium members get additional free checked bags. Additional fees may apply for excess baggage.'
    },
    {
      id: 5,
      category: 'loyalty',
      question: 'How do I join the loyalty program?',
      answer: 'You can join our Skyways loyalty program for free on our website or mobile app. Simply create an account and you\'ll start earning miles immediately on your flights and with our partners.'
    },
    {
      id: 6,
      category: 'refunds',
      question: 'How do I request a refund?',
      answer: 'Refund eligibility depends on your ticket type. Refundable tickets can be cancelled online. Non-refundable tickets may be eligible for credit or refund in certain circumstances. Check your ticket conditions for specific terms.'
    },
    {
      id: 7,
      category: 'other',
      question: 'What happens if my flight is delayed or cancelled?',
      answer: 'We\'ll notify you immediately via SMS or email. You may be entitled to rebooking, refund, or compensation depending on the circumstances. Our customer service team will assist you with alternative arrangements.'
    }
  ];

  // Merged contact methods with enhanced information
  const contactMethods = [
    {
      title: 'Phone Support',
      description: '24/7 customer service',
      contact: '1-800-SKYWAYS',
      details: '24/7 Available',
      icon: '📞'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our agents',
      contact: 'Available 6 AM - 10 PM',
      details: 'Real-time assistance',
      icon: '💬'
    },
    {
      title: 'Email Support',
      description: 'Send us a message',
      contact: 'support@skyways.com',
      details: 'Response within 24 hours',
      icon: '✉️'
    },
    {
      title: 'Social Media',
      description: 'Follow us for updates',
      contact: '@SkyWaysAir',
      details: 'Quick updates and news',
      icon: '📱'
    }
  ];

  // Quick action items merged from both versions
  const quickActions = [
    {
      icon: '✈️',
      title: 'Flight Status',
      description: 'Check real-time flight information'
    },
    {
      icon: '📱',
      title: 'Check In',
      description: 'Check in online or via mobile app'
    },
    {
      icon: '🧳',
      title: 'Baggage Info',
      description: 'Learn about baggage policies'
    },
    {
      icon: '📞',
      title: 'Contact Us',
      description: 'Speak with our support team'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We\'ll get back to you within 24 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="help-page">
      {/* Enhanced hero section with search functionality */}
      <div className="hero-section" style={{ padding: '4rem 0', paddingTop: '60px' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
              How Can We Help You?
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Find answers to common questions or get in touch with our support team
            </p>
            
            <div style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>
          
          {/* Quick Actions Grid */}
          <div className="grid grid-4" style={{ marginTop: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {quickActions.map((action, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{action.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: '600' }}>
                  {action.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced FAQ Section with categories and search */}
      <section className="section" style={{ background: '#f5f7ff' }}>
        <div className="container">
          <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '20px',
                    background: activeCategory === category.id ? '#2e6bff' : '#e5e7eb',
                    color: activeCategory === category.id ? 'white' : '#374151',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ List with accordion functionality */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="card" style={{ marginBottom: '1rem' }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#0f172a',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem'
                  }}
                >
                  {faq.question}
                  <span style={{ fontSize: '1.2rem' }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div style={{ 
                    paddingLeft: '1.5rem', 
                    paddingRight: '1.5rem', 
                    paddingBottom: '1.5rem', 
                    color: '#64748b', 
                    lineHeight: '1.6' 
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
            
            {filteredFaqs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                No results found. Try adjusting your search or category filter.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Still Need Help?</h2>
            <p className="section-subtitle">
              Send us a message and we'll get back to you within 24 hours
            </p>
          </div>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card">
              <form onSubmit={handleContactSubmit}>
                <div className="grid grid-2" style={{ marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                      Name
                    </label>
                    <input 
                      type="text" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
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
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
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
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                    Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.9rem'
                    }}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="booking">Booking Issues</option>
                    <option value="checkin">Check-in Problems</option>
                    <option value="baggage">Baggage Concerns</option>
                    <option value="loyalty">Loyalty Program</option>
                    <option value="refunds">Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-4">Contact Us</h2>
          
          <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {contactMethods.map((method, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{method.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {method.title}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>
                  {method.description}
                </p>
                <p style={{ fontWeight: '600', color: '#2e6bff', marginBottom: '0.5rem' }}>
                  {method.contact}
                </p>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  {method.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
```