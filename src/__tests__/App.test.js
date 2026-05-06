import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders DXB VIP Lounge Service', () => {
  render(<App />);
  const logoElement = screen.getByText(/DXB VIP Lounge Service/i);
  expect(logoElement).toBeInTheDocument();
});