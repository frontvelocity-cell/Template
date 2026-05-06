import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FAQs from '../src/components/FAQs';

test('renders FAQ heading', () => {
  render(
    <BrowserRouter>
      <FAQs />
    </BrowserRouter>
  );
  const heading = screen.getByText(/QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS/i);
  expect(heading).toBeInTheDocument();
});

test('toggles FAQ answer on click', () => {
  render(
    <BrowserRouter>
      <FAQs />
    </BrowserRouter>
  );
  const firstQuestion = screen.getByText(/Does making a booking with Al Majlis guarantee/i);
  fireEvent.click(firstQuestion);
  
  const answer = screen.getByText(/Yes, once you make a confirmed booking/i);
  expect(answer).toBeInTheDocument();
});