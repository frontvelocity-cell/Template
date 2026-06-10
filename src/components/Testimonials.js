import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Frequent Flyer',
    initials: 'SJ',
    rating: 5,
    review: 'Excellent service and smooth booking. The lounge access alone is worth it.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Business Traveler',
    initials: 'MC',
    rating: 5,
    review: 'Always on time and the app makes everything effortless. Highly recommend.'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    title: 'Family Traveler',
    initials: 'EW',
    rating: 5,
    review: 'Travelling with kids was actually relaxing. Staff went above and beyond.'
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title text-center">What our travelers say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              
              <p className="testimonial-review">
                {testimonial.review}
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.initials}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-title">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;