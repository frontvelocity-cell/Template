import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingWidget from '../../src/components/BookingWidget';

describe('BookingWidget Component', () => {
  test('renders booking form', () => {
    render(<BookingWidget />);
    expect(screen.getByText('Book Your Flight')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Departure city')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Destination city')).toBeInTheDocument();
  });

  test('trip type selector works', () => {
    render(<BookingWidget />);
    const roundTripRadio = screen.getByDisplayValue('roundtrip');
    const oneWayRadio = screen.getByDisplayValue('oneway');
    
    expect(roundTripRadio).toBeChecked();
    expect(oneWayRadio).not.toBeChecked();
    
    fireEvent.click(oneWayRadio);
    expect(oneWayRadio).toBeChecked();
    expect(roundTripRadio).not.toBeChecked();
  });

  test('return date field shows/hides based on trip type', () => {
    render(<BookingWidget />);
    
    // Should show return date for round trip
    expect(screen.getByText('Return')).toBeInTheDocument();
    
    // Switch to one way
    const oneWayRadio = screen.getByDisplayValue('oneway');
    fireEvent.click(oneWayRadio);
    
    // Return date should be hidden
    expect(screen.queryByText('Return')).not.toBeInTheDocument();
  });

  test('form submission works', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<BookingWidget />);
    
    const form = screen.getByRole('form');
    const fromInput = screen.getByPlaceholderText('Departure city');
    const toInput = screen.getByPlaceholderText('Destination city');
    const departureInput = screen.getByDisplayValue('');
    
    fireEvent.change(fromInput, { target: { value: 'New York' } });
    fireEvent.change(toInput, { target: { value: 'London' } });
    fireEvent.change(departureInput, { target: { value: '2024-03-15' } });
    
    fireEvent.submit(form);
    
    expect(consoleSpy).toHaveBeenCalledWith('Searching flights...', expect.any(Object));
    consoleSpy.mockRestore();
  });
});