import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  
  expect(screen.getByText('HOME')).toBeInTheDocument();
  expect(screen.getByText('PACKAGES')).toBeInTheDocument();
  expect(screen.getByText('PARTNERS')).toBeInTheDocument();
  expect(screen.getByText('FAQS')).toBeInTheDocument();
  expect(screen.getByText('CONTACT')).toBeInTheDocument();
  expect(screen.getByText('BOOK NOW')).toBeInTheDocument();
});