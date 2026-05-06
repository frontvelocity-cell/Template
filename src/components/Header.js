```jsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ variant = 'westjet' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Unified navigation handlers
  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleBookNow = () => {
    navigate('/book-now');
  };

  // Consolidated brand configurations
  const brandConfigs = {
    westjet: {
      brand: 'WESTJET',
      logoLink: '/',
      containerClass: 'header-container',
      brandClass: 'brand-logo',
      logoClass: 'logo-link',
      navClass: 'nav-links',
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
    },
    dxb: {
      brand: 'DXB VIP LOUNGE SERVICE',
      logoLink: '/',
      containerClass: 'container',
      brandClass: 'header-content',
      logoClass: 'logo',
      navClass: 'nav',
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
    }
  };

  // Get active configuration based on variant
  const config = brandConfigs[variant] || brandConfigs.westjet;

  // Unified helper functions
  const isActiveLink = (path) => location.pathname === path;

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

  // Unified logo rendering function
  const renderLogo = () => {
    if (variant === 'westjet') {
      return (
        <div className="logo-pill">
          <span className="logo-text">{config.brand}</span>
        </div>
      );
    }
    return config.brand;
  };

  return (
    <header className="header">
      <div className={config.containerClass}>
        <div className={config.brandClass}>
          <Link to={config.logoLink} className={config.logoClass}>
            {renderLogo()}
          </Link>
        </div>
        
        <nav className={config.navClass}>
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
```