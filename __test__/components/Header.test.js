import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header';

function renderWithRouter(component) {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
}

describe('Header Component', () => {
  test('renders logo', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('LOGO')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Flights')).toBeInTheDocument();
    expect(screen.getByText('Destinations')).toBeInTheDocument();
    expect(screen.getByText('Deals')).toBeInTheDocument();
    expect(screen.getByText('Check-in')).toBeInTheDocument();
    expect(screen.getByText('Manage Booking')).toBeInTheDocument();
    expect(screen.getByText('Loyalty Program')).toBeInTheDocument();
  });

  test('renders language selector', () => {
    renderWithRouter(<Header />);
    expect(screen.getByDisplayValue('en')).toBeInTheDocument();
  });

  test('renders help link', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Help')).toBeInTheDocument();
  });

  test('renders sign in button', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  test('mobile menu button toggles navigation', () => {
    renderWithRouter(<Header />);
    const mobileMenuBtn = screen.getByText('☰');
    const nav = screen.getByRole('navigation');
    
    expect(nav).not.toHaveClass('nav-open');
    
    fireEvent.click(mobileMenuBtn);
    expect(nav).toHaveClass('nav-open');
    
    fireEvent.click(mobileMenuBtn);
    expect(nav).not.toHaveClass('nav-open');
  });
});