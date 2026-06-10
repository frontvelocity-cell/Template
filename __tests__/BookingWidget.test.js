import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingWidget from '../src/components/BookingWidget';

test('renders booking form', () => {
  render(<BookingWidget />);
  expect(screen.getByText('Round Trip')).toBeInTheDocument();
  expect(screen.getByText('FROM')).toBeInTheDocument();
  expect(screen.getByText('TO')).toBeInTheDocument();
});

test('allows trip type selection', () => {
  render(<BookingWidget />);
  
  const oneWayButton = screen.getByText('One Way');
  fireEvent.click(oneWayButton);
  
  expect(oneWayButton).toHaveClass('active');
});

test('handles form input changes', () => {
  render(<BookingWidget />);
  
  const fromInput = screen.getByDisplayValue('New York (JFK)');
  fireEvent.change(fromInput, { target: { value: 'Los Angeles (LAX)' } });
  
  expect(fromInput.value).toBe('Los Angeles (LAX)');
});