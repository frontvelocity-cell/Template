import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          LOGO
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <Link to="/flights" className="nav-link">Flights</Link>
          <Link to="/destinations" className="nav-link">Destinations</Link>
          <Link to="/deals" className="nav-link">Deals</Link>
          <Link to="/check-in" className="nav-link">Check-in</Link>
          <Link to="/manage-booking" className="nav-link">Manage Booking</Link>
          <Link to="/loyalty" className="nav-link">Loyalty Program</Link>
        </div>
        
        <div className="nav-right">
          <select className="nav-language">
            <option value="en">EN ▾</option>
            <option value="es">ES ▾</option>
            <option value="fr">FR ▾</option>
          </select>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/signin" className="nav-signin">Sign In</Link>
        </div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;