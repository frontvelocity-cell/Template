import { render, screen, fireEvent } from '@testing-library/react';
import BookingWidget from '../components/BookingWidget';

test('renders booking form', () => {
  render(<BookingWidget />);
  
  expect(screen.getByText('Find Your Flight')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Departure city')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Destination city')).toBeInTheDocument();
  expect(screen.getByText('Search Flights')).toBeInTheDocument();
});

test('handles trip type change', () => {
  render(<BookingWidget />);
  
  const oneWayRadio = screen.getByLabelText('One Way');
  fireEvent.click(oneWayRadio);
  
  expect(oneWayRadio).toBeChecked();
});