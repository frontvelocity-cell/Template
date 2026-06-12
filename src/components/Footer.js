```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand section with logo and description */}
          <div className="footer-brand">
            <div className="footer-logo">✈ SKYWAYS</div>
            <p className="footer-description">
              Premium global travel, made simple.
            </p>
          </div>
          
          {/* Navigation links organized in columns - merged and deduplicated from both versions */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/investors">Investor Relations</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>TRAVEL INFO</h4>
              <ul>
                <li><Link to="/flight-status">Flight Status</Link></li>
                <li><Link to="/baggage">Baggage Info</Link></li>
                <li><Link to="/requirements">Travel Requirements</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/visa-info">Visa Info</Link></li>
                <li><Link to="/insurance">Insurance</Link></li>
                <li><Link to="/special-assistance">Special Assistance</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>POLICIES</h4>
              <ul>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
                <li><Link to="/cancellation">Cancellation</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>SUPPORT</h4>
              <ul>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/chat">Live Chat</Link></li>
                <li><Link to="/lost-found">Lost & Found</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
              </ul>
            </div>
          </div>

          {/* Social icons section */}
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <div className="instagram-icon"></div>
            </a>
          </div>
        </div>
        
        {/* Footer bottom section with newsletter and copyright - merged and standardized */}
        <div className="footer-bottom">
          <div className="footer-newsletter">
            <h4>Newsletter Signup</h4>
            <p>Stay updated with our latest offers and travel tips</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p className="copyright">© 2026 Skyways. All rights reserved.</p>
            <p className="payment-methods">VISA · MC · AMEX · APPLE PAY</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```