import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-logo">
          <Link to="/" className="logo-link">
            <div className="logo-pill">
              <span className="logo-text">WESTJET</span>
            </div>
          </Link>
        </div>
        
        <nav className="nav-links">
          <Link to="/flights" className="nav-link">Flights</Link>
          <Link to="/vacations" className="nav-link">Vacations</Link>
          <Link to="/offers" className="nav-link">Offers</Link>
          <Link to="/manage-trips" className="nav-link">Manage Trips</Link>
          <Link to="/check-in" className="nav-link">Check In</Link>
          <Link to="/flight-status" className="nav-link">Flight Status</Link>
          <Link to="/westjet-rewards" className="nav-link">WestJet Rewards</Link>
          <Link to="/help" className="nav-link">Help</Link>
        </nav>
        
        <div className="header-actions">
          <Link to="/sign-in" className="sign-in-link">Sign in</Link>
          <button className="create-account-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
          <div className="icon-group">
            <div className="refresh-icon"></div>
            <div className="search-icon"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;