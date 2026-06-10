import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Merged test suite combining DXB VIP Lounge Service and navigation/home page tests
describe('App Component Tests', () => {
  // Helper function to render App with Router context when needed
  const renderAppWithRouter = () => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  // Test for main application title/branding
  test('renders DXB VIP Lounge Service', () => {
    render(<App />);
    const logoElement = screen.getByText(/DXB VIP Lounge Service/i);
    expect(logoElement).toBeInTheDocument();
  });

  // Test for navigation logo element
  test('renders navigation logo', () => {
    render(<App />);
    const logoElement = screen.getByText(/LOGO/i);
    expect(logoElement).toBeInTheDocument();
  });

  // Test for home page hero content
  test('renders home page hero content', () => {
    render(<App />);
    const heroText = screen.getByText(/Book Your Next Journey/i);
    expect(heroText).toBeInTheDocument();
  });
});