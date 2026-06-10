import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../src/components/NotFound';

const NotFoundWithRouter = () => (
  <BrowserRouter>
    <NotFound />
  </BrowserRouter>
);

test('renders 404 page', () => {
  render(<NotFoundWithRouter />);
  
  expect(screen.getByText('404')).toBeInTheDocument();
  expect(screen.getByText(/This flight has been cancelled/i)).toBeInTheDocument();
  expect(screen.getByText('Return to Home')).toBeInTheDocument();
  expect(screen.getByText('Search Flights')).toBeInTheDocument();
});