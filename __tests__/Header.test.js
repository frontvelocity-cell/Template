import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders WestJet logo', () => {
  renderWithRouter(<Header />);
  const logo = screen.getByText('WESTJET');
  expect(logo).toBeInTheDocument();
});

test('renders all navigation links', () => {
  renderWithRouter(<Header />);
  
  const navLinks = [
    'Flights', 'Vacations', 'Offers', 'Manage Trips',
    'Check In', 'Flight Status', 'WestJet Rewards', 'Help'
  ];
  
  navLinks.forEach(linkText => {
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});

test('renders sign in and create account buttons', () => {
  renderWithRouter(<Header />);
  
  const signInLink = screen.getByText('Sign in');
  const createAccountBtn = screen.getByText('Create Account');
  
  expect(signInLink).toBeInTheDocument();
  expect(createAccountBtn).toBeInTheDocument();
});