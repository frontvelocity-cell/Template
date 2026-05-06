import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

test('renders 404 page', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  
  expect(screen.getByText('404')).toBeInTheDocument();
  expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  expect(screen.getByText('Go Back Home')).toBeInTheDocument();
});