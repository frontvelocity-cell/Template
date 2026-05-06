import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../components/FAQ';

test('renders FAQ title', () => {
  render(<FAQ />);
  const titleElement = screen.getByText(/QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS/i);
  expect(titleElement).toBeInTheDocument();
});

test('expands FAQ item when clicked', () => {
  render(<FAQ />);
  const firstQuestion = screen.getByText(/Does making a booking with Al Majlis guarantee/i);
  
  fireEvent.click(firstQuestion);
  
  const answer = screen.getByText(/Yes, once your booking is confirmed/i);
  expect(answer).toBeInTheDocument();
});