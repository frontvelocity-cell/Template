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

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  // Consolidated brand configurations - merged all three variants
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
    },
    // Added new skyways variant from the second component
    skyways: {
      brand: '✈ SKYWAYS',
      logoLink: '/',
      containerClass: 'container',
      brandClass: 'nav',
      logoClass: 'logo',
      navClass: 'nav-links',
      navLinks: [
        { to: '/flights', label: 'Flights' },
        { to: '/destinations', label: 'Destinations' },
        { to: '/deals', label: 'Deals' },
        { to: '/check-in', label: 'Check-in' },
        { to: '/manage-booking', label: 'Manage Booking' },
        { to: '/loyalty-program', label: 'Loyalty Program' }
      ],
      actions: (
        <div className="nav-actions">
          <span className="nav-link secondary">EN ▾</span>
          <span className="nav-link secondary">Help</span>
          <button className="btn btn-primary btn-sm" onClick={handleSignIn}>Sign In</button>
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

  // Unified logo rendering function - handles all brand variants
  const renderLogo = () => {
    if (variant === 'westjet') {
      return (
        <div className="logo-pill">
          <span className="logo-text">{config.brand}</span>
        </div>
      );
    }
    // For skyways and dxb variants, render brand directly
    return config.brand;
  };

  // Unified structure that works for all variants
  const renderNavigation = () => {
    if (variant === 'skyways') {
      // Skyways uses a different structure with nav as container
      return (
        <nav className={config.brandClass}>
          <Link to={config.logoLink} className={config.logoClass}>
            {renderLogo()}
          </Link>
          
          <div className={config.navClass}>
            {config.navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.to} 
                className={getNavLinkClassName(link)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {config.actions}
        </nav>
      );
    }

    // Standard structure for westjet and dxb
    return (
      <>
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
      </>
    );
  };

  return (
    <header className="header">
      <div className={config.containerClass}>
        {renderNavigation()}
      </div>
    </header>
  );
};

export default Header;
```