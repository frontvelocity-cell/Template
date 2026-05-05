import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../src/components/NotFound';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders 404 error message', () => {
  renderWithRouter(<NotFound />);
  
  const title = screen.getByText('404');
  const subtitle = screen.getByText('Page Not Found');
  const returnLink = screen.getByText('Return to Home');
  
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(returnLink).toBeInTheDocument();
});

test('return to home link has correct href', () => {
  renderWithRouter(<NotFound />);
  
  const returnLink = screen.getByText('Return to Home');
  expect(returnLink).toHaveAttribute('href', '/');
});