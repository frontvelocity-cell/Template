import React, { useState } from 'react';

function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'Does making a booking with Al Majlis guarantee that the service will be provided?',
      answer: 'Yes, once you make a confirmed booking with Al Majlis, we guarantee the provision of all services included in your selected package. Our team ensures all arrangements are in place before your arrival.'
    },
    {
      question: 'How early should I arrive at the airport when using VIP services?',
      answer: 'We recommend arriving 2-3 hours before international flights and 1-2 hours before domestic flights. Our VIP services will expedite your check-in and security processes, but arriving early ensures a relaxed experience.'
    },
    {
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking up to 24 hours before your scheduled service. Cancellations made within 24 hours may incur a fee. Please contact our customer service team for assistance.'
    },
    {
      question: 'Are children included in the VIP service packages?',
      answer: 'Children under 2 years are included free of charge. Children aged 2-12 receive a 50% discount on all package prices. All children must be accompanied by an adult using our services.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and cash payments. Online bookings require credit card payment, while on-site payments can be made in cash or card.'
    },
    {
      question: 'Do you provide services for connecting flights?',
      answer: 'Yes, we offer specialized services for passengers with connecting flights, including assistance with transit procedures, lounge access during layovers, and coordination with airline schedules.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="page-content">
      <h1 className="main-heading">QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS</h1>
      <div style={{ marginTop: '40px' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span style={{ float: 'right', color: '#FFD700' }}>
                {openFAQ === index ? '−' : '+'}
              </span>
            </div>
            {openFAQ === index && (
              <div className="faq-answer" style={{ marginTop: '15px' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;