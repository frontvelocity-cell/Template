```javascript
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';

// Reusable helper function to render components with Router context
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// Test for WestJet-specific branding elements
test('renders WestJet logo', () => {
  renderWithRouter(<Header />);
  const logo = screen.getByText('WESTJET');
  expect(logo).toBeInTheDocument();
});

// Test for WestJet-specific navigation links
test('renders WestJet navigation links', () => {
  renderWithRouter(<Header />);
  
  const westjetNavLinks = [
    'Flights', 'Vacations', 'Offers', 'Manage Trips',
    'Check In', 'Flight Status', 'WestJet Rewards', 'Help'
  ];
  
  westjetNavLinks.forEach(linkText => {
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});

// Test for general/alternative navigation links
test('renders general navigation links', () => {
  renderWithRouter(<Header />);
  
  const generalNavLinks = [
    'HOME', 'PACKAGES', 'PARTNERS', 'FAQS', 'CONTACT', 'BOOK NOW'
  ];
  
  generalNavLinks.forEach(linkText => {
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});

// Test for authentication-related elements
test('renders sign in and create account buttons', () => {
  renderWithRouter(<Header />);
  
  const signInLink = screen.getByText('Sign in');
  const createAccountBtn = screen.getByText('Create Account');
  
  expect(signInLink).toBeInTheDocument();
  expect(createAccountBtn).toBeInTheDocument();
});
```