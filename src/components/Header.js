```jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ variant = 'westjet' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Unified navigation handlers - consolidated from all variants
  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleBookNow = () => {
    navigate('/book-now');
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleHelp = () => {
    navigate('/help');
  };

  // Consolidated brand configurations - merged all variants including mobile menu support
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
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
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
          <select className="language-selector">
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
          <button className="book-now-btn" onClick={handleBookNow}>
            BOOK NOW
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      )
    },
    skyways: {
      brand: '✈ SKYWAYS',
      logoLink: '/',
      containerClass: 'container',
      brandClass: 'header-content',
      logoClass: 'logo',
      navClass: 'nav',
      navLinks: [
        { to: '/flights', label: 'Flights' },
        { to: '/destinations', label: 'Destinations' },
        { to: '/deals', label: 'Deals' },
        { to: '/check-in', label: 'Check-in' },
        { to: '/manage-booking', label: 'Manage Booking' },
        { to: '/loyalty', label: 'Loyalty Program' }
      ],
      actions: (
        <div className="header-actions">
          <select className="language-selector">
            <option value="en">EN ▾</option>
            <option value="es">ES ▾</option>
            <option value="fr">FR ▾</option>
          </select>
          <Link to="/help" className="help-link" onClick={handleHelp}>Help</Link>
          <button className="btn btn-primary sign-in-btn" onClick={handleSignIn}>Sign In</button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      )
    },
    // Added generic variant for LOGO text from second component
    generic: {
      brand: 'LOGO',
      logoLink: '/',
      containerClass: 'container',
      brandClass: 'header-content',
      logoClass: 'logo',
      navClass: 'nav',
      navLinks: [
        { to: '/flights', label: 'Flights' },
        { to: '/destinations', label: 'Destinations' },
        { to: '/deals', label: 'Deals' },
        { to: '/check-in', label: 'Check-in' },
        { to: '/manage-booking', label: 'Manage Booking' },
        { to: '/loyalty', label: 'Loyalty Program' }
      ],
      actions: (
        <div className="header-actions">
          <select className="language-selector">
            <option value="en">EN ▾</option>
            <option value="es">ES ▾</option>
            <option value="fr">FR ▾</option>
          </select>
          <Link to="/help" className="help-link" onClick={handleHelp}>Help</Link>
          <button className="btn btn-primary sign-in-btn" onClick={handleSignIn}>Sign In</button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      )
    }
  };

  // Get active configuration based on variant - fallback to westjet if variant not found
  const config = brandConfigs[variant] || brandConfigs.westjet;

  // Unified helper functions - merged active link detection logic
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

  // Unified logo rendering function - handles all brand variants including special westjet pill style
  const renderLogo = () => {
    if (variant === 'westjet') {
      return (
        <div className="logo-pill">
          <span className="logo-text">{config.brand}</span>
        </div>
      );
    }
    // For all other variants, render brand text with logo-text class for consistency
    return <span className="logo-text">{config.brand}</span>;
  };

  // Unified navigation rendering - handles both structural variants with mobile menu support
  const renderNavigation = () => {
    if (variant === 'skyways' || variant === 'generic') {
      // Skyways/generic structure with nav as flex container
      return (
        <>
          <Link to={config.logoLink} className={config.logoClass}>
            {renderLogo()}
          </Link>
          
          <nav className={`${config.navClass} ${isMenuOpen ? 'nav-open' : ''}`}>
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
    }

    // Standard structure for westjet and dxb with separate brand and nav sections
    return (
      <>
        <div className={config.brandClass}>
          <Link to={config.logoLink} className={config.logoClass}>
            {renderLogo()}
          </Link>
        </div>
        
        <nav className={`${config.navClass} ${isMenuOpen ? 'nav-open' : ''}`}>
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
        <div className={config.brandClass}>
          {renderNavigation()}
        </div>
      </div>
    </header>
  );
};

export default Header;
```