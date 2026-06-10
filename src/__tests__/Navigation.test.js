import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders navigation links', () => {
  renderWithRouter(<Navigation />);
  
  expect(screen.getByText('Flights')).toBeInTheDocument();
  expect(screen.getByText('Destinations')).toBeInTheDocument();
  expect(screen.getByText('Deals')).toBeInTheDocument();
  expect(screen.getByText('Check-in')).toBeInTheDocument();
  expect(screen.getByText('Manage Booking')).toBeInTheDocument();
  expect(screen.getByText('Loyalty Program')).toBeInTheDocument();
  expect(screen.getByText('Help')).toBeInTheDocument();
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});