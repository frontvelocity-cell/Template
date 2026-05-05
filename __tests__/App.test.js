import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders WestJet logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/WESTJET/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const flightsLink = screen.getByText(/Flights/i);
  const vacationsLink = screen.getByText(/Vacations/i);
  expect(flightsLink).toBeInTheDocument();
  expect(vacationsLink).toBeInTheDocument();
});

test('renders hero title on home page', () => {
  render(<App />);
  const heroTitle = screen.getByText(/Valentine's Day Sale ends soon/i);
  expect(heroTitle).toBeInTheDocument();
});