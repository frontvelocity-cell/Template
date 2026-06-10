import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header';

const HeaderWithRouter = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

test('renders header with navigation', () => {
  render(<HeaderWithRouter />);
  
  expect(screen.getByText('✈ SKYWAYS')).toBeInTheDocument();
  expect(screen.getByText('Flights')).toBeInTheDocument();
  expect(screen.getByText('Destinations')).toBeInTheDocument();
  expect(screen.getByText('Deals')).toBeInTheDocument();
  expect(screen.getByText('Check-in')).toBeInTheDocument();
  expect(screen.getByText('Manage Booking')).toBeInTheDocument();
  expect(screen.getByText('Loyalty Program')).toBeInTheDocument();
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});