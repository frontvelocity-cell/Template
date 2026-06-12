import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home';

test('renders hero section', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  // Check if hero title is present
  const heroTitle = screen.getByText(/Book Your Next Journey/i);
  expect(heroTitle).toBeInTheDocument();
});

test('renders popular destinations', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  // Check if destinations section is present
  const destinationsTitle = screen.getByText(/Popular Destinations/i);
  expect(destinationsTitle).toBeInTheDocument();
  
  // Check if some destinations are listed
  expect(screen.getByText(/Tokyo/i)).toBeInTheDocument();
  expect(screen.getByText(/Paris/i)).toBeInTheDocument();
});