```jsx
import React, { useState } from 'react';
import './Help.css';

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

  // Merged and deduplicated categories with enhanced naming
  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'booking', name: 'Booking & Reservations' },
    { id: 'checkin', name: 'Check-in & Boarding' },
    { id: 'baggage', name: 'Baggage & Travel' },
    { id: 'loyalty', name: 'Loyalty Program' },
    { id: 'refunds', name: 'Refunds & Policies' },
    { id: 'other', name: 'Other' }
  ];

  // Comprehensive merged FAQ data combining both versions
  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How can I book a flight?',
      answer: 'You can book flights through our website, mobile app, or by calling our customer service. Simply enter your departure and destination cities, select your travel dates, choose your preferred flight, and complete the booking process with payment.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify your booking online through "Manage Booking" section. Changes may be subject to fare differences and change fees depending on your ticket type. Flexible fares allow free changes, while other fares may incur fees. Basic fares are non-refundable but may be used as credit for future travel.'
    },
    {
      id: 3,
      category: 'checkin',
      question: 'How do I check in for my flight?',
      answer: 'You can check in online through our website or mobile app starting 24 hours before your flight. Simply enter your booking reference and last name to access your booking. Online check-in closes 2 hours before international flights and 1 hour before domestic flights.'
    },
    {
      id: 4,
      category: 'checkin',
      question: 'Do I need to print my boarding pass?',
      answer: 'No, you can use a mobile boarding pass on your smartphone. However, some airports may require a printed boarding pass, so we recommend having both options available for convenience.'
    },
    {
      id: 5,
      category: 'baggage',
      question: 'What is the baggage allowance?',
      answer: 'Each passenger is allowed one carry-on bag (max 10kg/22lbs) and one personal item. Checked baggage allowance varies by ticket type and destination. Premium members get additional free checked bags. Additional fees may apply for excess baggage.'
    },
    {
      id: 6,
      category: 'baggage',
      question: 'What items are prohibited in carry-on bags?',
      answer: 'Prohibited items include liquids over 3.4oz (100ml), sharp objects, firearms, and certain electronics. Check our detailed prohibited items list or TSA guidelines for complete information before packing.'
    },
    {
      id: 7,
      category: 'loyalty',
      question: 'How do I join the loyalty program?',
      answer: 'You can join our Skyways Rewards loyalty program for free on our website or mobile app. Simply create an account and you\'ll start earning miles immediately on your flights and with our partners.'
    },
    {
      id: 8,
      category: 'loyalty',
      question: 'Do my miles expire?',
      answer: 'Miles do not expire as long as you have qualifying activity (earning or redeeming miles) at least once every 18 months. Keep your account active to maintain your miles balance.'
    },
    {
      id: 9,
      category: 'refunds',
      question: 'How do I request a refund?',
      answer: 'Refund eligibility depends on your ticket type. Refundable tickets can be cancelled online. Non-refundable tickets may be eligible for credit or refund in certain circumstances. Flexible fares are fully refundable, standard fares have cancellation fees.'
    },
    {
      id: 10,
      category: 'other',
      question: 'What happens if my flight is delayed or cancelled?',
      answer: 'We\'ll notify you immediately via SMS or email. If your flight is delayed or cancelled due to circumstances within our control, we will rebook you on the next available flight at no charge and provide compensation as per our policy.'
    }
  ];

  // Enhanced contact methods combining both versions
  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our customer service team',
      contact: '+1-800-SKYWAYS',
      details: '24/7 Available',
      icon: '📞',
      action: 'Call Now'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our live chat service',
      contact: 'Average response: 2 minutes',
      details: 'Available 24/7',
      icon: '💬',
      action: 'Start Chat'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message about your inquiry',
      contact: 'support@skyways.com',
      details: 'Response within 24 hours',
      icon: '✉️',
      action: 'Send Email'
    },
    {
      title: 'Airport Assistance',
      description: 'Find help at our airport service counters',
      contact: 'Available at all airports we serve',
      details: 'Check airport hours',
      icon: '📍',
      action: 'Find Locations'
    }
  ];

  // Quick action items for immediate help
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
      <div className="container">
        {/* Enhanced hero section with search functionality */}
        <div className="page-header" style={{ padding: '4rem 0', paddingTop: '60px' }}>
          <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
            How Can We Help You?
          </h1>
          <p className="page-description" style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Find answers to common questions or get in touch with our support team
          </p>
          
          <div className="help-search" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>
          
          {/* Quick Actions Grid */}
          <div className="grid grid-4" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
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

        <div className="help-content" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', marginBottom: '3rem' }}>
          {/* Enhanced sidebar with category filters */}
          <div className="help-sidebar">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    margin: '0.5rem 0',
                    border: 'none',
                    borderRadius: '8px',
                    background: activeCategory === category.id ? '#2e6bff' : '#f8fafc',
                    color: activeCategory === category.id ? 'white' : '#374151',
                    cursor: 'pointer',
                    fontWeight: '500',
                    textAlign: 'left'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Enhanced FAQ Section with accordion functionality */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            
            {filteredFaqs.length === 0 ? (
              <div className="no-results" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                <p>No questions found matching your search. Try different keywords or browse all topics.</p>
              </div>
            ) : (
              <div className="faq-list">
                {filteredFaqs.map((faq, index) => (
                  <div key={faq.id} className="faq-item card" style={{ marginBottom: '1rem' }}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="faq-question"
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
                      <div className="faq-answer" style={{ 
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
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Contact Form Section */}
        <section className="section bg-light" style={{ background: '#f5f7ff', padding: '3rem 0', marginBottom: '3rem', borderRadius: '12px' }}>
          <div className="section-header text-center">
            <h2 className="section-title">Still Need Help?</h2>
            <p className="section-subtitle">
              Send us a message and we'll get back to you within 24 hours
            </p>
          </div>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card">
              <form onSubmit={handleContactSubmit}>
                <div className="grid grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '20px' }}>
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
        </section>

        {/* Enhanced Contact Information Section */}
        <div className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-intro">
            Our customer service team is here to help you 24/7. Choose the option that works best for you.
          </p>
          
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div className="contact-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{method.icon}</div>
                <h3 className="contact-title" style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {method.title}
                </h3>
                <p className="contact-description" style={{ color: '#64748b', marginBottom: '1rem' }}>
                  {method.description}
                </p>
                <div className="contact-details">
                  <div className="contact-detail" style={{ fontWeight: '600', color: '#2e6bff', marginBottom: '0.5rem' }}>
                    {method.contact}
                  </div>
                  <div className="contact-availability" style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    {method.details}
                  </div>
                </div>
                <button className="btn btn-primary contact-btn">{method.action}</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Emergency Information Section */}
        <div className="emergency-info" style={{ marginTop: '3rem' }}>
          <div className="emergency-card card" style={{ padding: '2rem', textAlign: 'center', background: '#fef2f2', border: '1px solid #fecaca' }}>
            <h2 style={{ color: '#dc2626', marginBottom: '1rem' }}>Emergency Support</h2>
            <p style={{ marginBottom: '1.5rem', color: '#374151' }}>
              If you're experiencing a travel emergency or need immediate assistance while traveling, 
              our 24/7 emergency hotline is available to help.
            </p>
            <div className="emergency-contacts" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div className="emergency-contact" style={{ fontWeight: '600' }}>
                <strong>US/Canada:</strong> +1-800-SKYWAYS
              </div>
              <div className="emergency-contact" style={{ fontWeight: '600' }}>
                <strong>International:</strong> +1-555-SKYWAYS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
```