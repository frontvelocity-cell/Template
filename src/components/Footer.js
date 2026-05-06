import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/terms" className="footer-link">Terms & Conditions</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <div className="instagram-icon"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;