import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../src/components/NotFound';

function renderWithRouter(component) {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
}

describe('NotFound Component', () => {
  test('renders 404 error message', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Oops! Page Not Found')).toBeInTheDocument();
  });

  test('renders navigation buttons', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Go Home')).toBeInTheDocument();
    expect(screen.getByText('Search Flights')).toBeInTheDocument();
  });

  test('renders popular pages links', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Popular Pages')).toBeInTheDocument();
    expect(screen.getByText('Destinations')).toBeInTheDocument();
    expect(screen.getByText('Special Deals')).toBeInTheDocument();
    expect(screen.getByText('Check-in')).toBeInTheDocument();
    expect(screen.getByText('Help Center')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Need Assistance?')).toBeInTheDocument();
    expect(screen.getByText('+1 (800) 123-4567')).toBeInTheDocument();
  });
});