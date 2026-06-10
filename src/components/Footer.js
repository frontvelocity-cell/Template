import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand section with logo, description and newsletter */}
          <div className="footer-brand">
            <div className="footer-logo">✈ SKYWAYS</div>
            <p className="footer-description">
              Premium global travel, made simple.
            </p>
            
            <div className="newsletter">
              <h4>Stay updated</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
          
          {/* Navigation links organized in columns */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/press">Press</a></li>
                <li><a href="/investors">Investors</a></li>
                <li><a href="/sustainability">Sustainability</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>TRAVEL INFO</h4>
              <ul>
                <li><a href="/flight-status">Flight Status</a></li>
                <li><a href="/baggage">Baggage</a></li>
                <li><a href="/visa-info">Visa Info</a></li>
                <li><a href="/insurance">Insurance</a></li>
                <li><a href="/special-assistance">Special Assistance</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>POLICIES</h4>
              <ul>
                {/* Merged terms and privacy links using React Router Link for consistency */}
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><a href="/cookies">Cookies</a></li>
                <li><a href="/accessibility">Accessibility</a></li>
                <li><a href="/cancellation">Cancellation</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>SUPPORT</h4>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/chat">Live Chat</a></li>
                <li><a href="/lost-found">Lost & Found</a></li>
                <li><a href="/feedback">Feedback</a></li>
              </ul>
            </div>
          </div>

          {/* Social icons section merged from first version */}
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <div className="instagram-icon"></div>
            </a>
          </div>
        </div>
        
        {/* Footer bottom section with copyright and payment methods */}
        <div className="footer-bottom">
          <p className="copyright">© 2026 Skyways. All rights reserved.</p>
          <p className="payment-methods">VISA · MC · AMEX · APPLE PAY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;