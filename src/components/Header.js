import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ variant = 'westjet' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleBookNow = () => {
    navigate('/book-now');
  };

  // WestJet configuration
  const westjetConfig = {
    brand: 'WESTJET',
    logoLink: '/',
    navLinks: [
      { to: '/flights', label: 'Flights' },
      { to: '/vacations', label: 'Vacations' },
      { to: '/offers', label: 'Offers' },
      { to: '/manage-trips', label: 'Manage Trips' },
      { to: '/check-in', label: 'Check In' },
      { to: '/flight-status', label: 'Flight Status' },
      { to: '/westjet-rewards', label: 'WestJet Rewards' },
      { to: '/help', label: 'Help' }
    ],
    actions: (
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
    )
  };

  // DXB VIP Lounge configuration
  const dxbConfig = {
    brand: 'DXB VIP Lounge Service',
    logoLink: '/',
    navLinks: [
      { to: '/', label: 'HOME' },
      { to: '/packages', label: 'PACKAGES' },
      { to: '/partners', label: 'PARTNERS' },
      { to: '/faq', label: 'FAQS', className: 'text-gold' },
      { to: '/contact', label: 'CONTACT' }
    ],
    actions: (
      <div className="header-actions">
        <span className="nav-link language-toggle">العربية</span>
        <button className="book-now-btn" onClick={handleBookNow}>
          BOOK NOW
        </button>
      </div>
    )
  };

  const config = variant === 'westjet' ? westjetConfig : dxbConfig;

  // Helper function to determine if link is active
  const isActiveLink = (path) => location.pathname === path;

  // Helper function to get nav link className
  const getNavLinkClassName = (link) => {
    let className = 'nav-link';
    if (isActiveLink(link.to)) {
      className += ' active';
    }
    if (link.className) {
      className += ` ${link.className}`;
    }
    return className;
  };

  return (
    <header className="header">
      <div className={variant === 'westjet' ? 'header-container' : 'container'}>
        <div className={variant === 'westjet' ? 'brand-logo' : 'header-content'}>
          <Link to={config.logoLink} className={variant === 'westjet' ? 'logo-link' : 'logo'}>
            {variant === 'westjet' ? (
              <div className="logo-pill">
                <span className="logo-text">{config.brand}</span>
              </div>
            ) : (
              config.brand
            )}
          </Link>
        </div>
        
        <nav className={variant === 'westjet' ? 'nav-links' : 'nav'}>
          {config.navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.to} 
              className={getNavLinkClassName(link)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {config.actions}
      </div>
    </header>
  );
};

export default Header;