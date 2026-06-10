```jsx
import React, { useState } from 'react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'booking', name: 'Booking' },
    { id: 'checkin', name: 'Check-in' },
    { id: 'baggage', name: 'Baggage' },
    { id: 'loyalty', name: 'Loyalty Program' },
    { id: 'refunds', name: 'Refunds' }
  ];

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
      answer: 'Yes, you can modify your booking online through "Manage Booking" section. Changes may be subject to fare differences and change fees depending on your ticket type.'
    },
    {
      id: 3,
      category: 'checkin',
      question: 'When can I check in online?',
      answer: 'Online check-in opens 24 hours before departure and closes 2 hours before international flights and 1 hour before domestic flights.'
    },
    {
      id: 4,
      category: 'baggage',
      question: 'What is the baggage allowance?',
      answer: 'Carry-on: 1 bag up to 22lbs (10kg). Checked baggage allowance varies by destination and fare type. Premium members get additional free checked bags.'
    },
    {
      id: 5,
      category: 'loyalty',
      question: 'How do I join the loyalty program?',
      answer: 'You can join SkyMiles for free on our website or mobile app. Start earning miles immediately on your flights and with our partners.'
    },
    {
      id: 6,
      category: 'refunds',
      question: 'How do I request a refund?',
      answer: 'Refund eligibility depends on your ticket type. Refundable tickets can be cancelled online. Non-refundable tickets may be eligible for credit or refund in certain circumstances.'
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      description: '24/7 customer service',
      contact: '1-800-SKYWAYS',
      icon: '📞'
    },
    {
      title: 'Live Chat',
      description: 'Chat with an agent',
      contact: 'Available 24/7',
      icon: '💬'
    },
    {
      title: 'Email Support',
      description: 'Send us a message',
      contact: 'support@skyways.com',
      icon: '✉️'
    },
    {
      title: 'Social Media',
      description: 'Follow us for updates',
      contact: '@SkyWaysAir',
      icon: '📱'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="help-page">
      <div className="hero-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
              How can we help you?
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Find answers to common questions or contact our support team
            </p>
            
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
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
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-4">Contact Us</h2>
          
          <div className="grid grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {contactMethods.map((method, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{method.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {method.title}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>
                  {method.description}
                </p>
                <p style={{ fontWeight: '600', color: '#2e6bff' }}>
                  {method.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f7ff' }}>
        <div className="container">
          <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
          
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
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {filteredFaqs.map(faq => (
              <div key={faq.id} className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  {faq.answer}
                </p>
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
    </div>
  );
};

export default Help;
```