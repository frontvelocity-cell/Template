import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [expandedItem, setExpandedItem] = useState(null);

  const faqData = [
    {
      question: "Does making a booking with Al Majlis guarantee that the service will be provided?",
      answer: "Yes, once your booking is confirmed and payment is processed, we guarantee the provision of the Al Majlis service as per your selected package. However, services may be subject to airport operational requirements and security protocols."
    },
    {
      question: "Why is there a need for the passenger to pre-register for the Al Majlis service?",
      answer: "Pre-registration is required for security clearance, to ensure proper coordination with airport authorities, and to guarantee service availability. This also allows us to prepare personalized assistance and meet your specific requirements."
    },
    {
      question: "Does booking Al Majlis service entitle the passenger to airline benefits such as upgrades and excess baggage allowances?",
      answer: "No, Al Majlis service is a separate airport service and does not include airline-specific benefits. For flight upgrades or baggage allowances, you need to contact your airline directly or check your ticket conditions."
    },
    {
      question: "Why is there a need to submit credit card details when booking?",
      answer: "Credit card details are required for payment processing and to secure your booking. We use industry-standard encryption to protect your payment information and only charge your card upon confirmation of service availability."
    },
    {
      question: "Can passengers that report late for a flight, and refused by the airline, request for a refund?",
      answer: "Refund policies vary depending on the circumstances. If you arrive late due to factors beyond your control, we may consider a partial refund. However, if the delay is due to personal reasons, refunds are generally not provided as per our terms and conditions."
    },
    {
      question: "Can no-show passenger request for a refund?",
      answer: "No-show passengers are generally not eligible for refunds as the service slot was reserved and other resources were allocated. However, in exceptional circumstances with valid documentation, partial refunds may be considered on a case-by-case basis."
    },
    {
      question: "Can passengers that advise cancellation, prior to 24 hours of the flight, opt to hold the payment with us?",
      answer: "Yes, passengers who cancel their booking at least 24 hours before their flight can opt to hold their payment as credit for future bookings within 12 months. This credit can be used for any of our services and is transferable to immediate family members."
    }
  ];

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="container">
        <h1 className="faq-title">
          QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS
        </h1>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleExpand(index)}
              >
                <span>{item.question}</span>
                <div className={`expand-icon ${expandedItem === index ? 'expanded' : ''}`}>
                  {expandedItem === index ? '−' : '+'}
                </div>
              </div>
              {expandedItem === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;