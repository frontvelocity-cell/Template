import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

// Helper function to render App with Router context when needed
const renderApp = (withRouter = false) => {
  if (withRouter) {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
  return render(<App />);
};

// Test for WestJet logo presence
test('renders WestJet logo', () => {
  renderApp();
  const logoElement = screen.getByText(/WESTJET/i);
  expect(logoElement).toBeInTheDocument();
});

// Test for navigation links
test('renders navigation links', () => {
  renderApp();
  const flightsLink = screen.getByText(/Flights/i);
  const vacationsLink = screen.getByText(/Vacations/i);
  expect(flightsLink).toBeInTheDocument();
  expect(vacationsLink).toBeInTheDocument();
});

// Test for hero title on home page
test('renders hero title on home page', () => {
  renderApp();
  const heroTitle = screen.getByText(/Valentine's Day Sale ends soon/i);
  expect(heroTitle).toBeInTheDocument();
});

// Test for DXB VIP Lounge Service header
test('renders DXB VIP Lounge Service header', () => {
  renderApp(true); // Using router context for this test as it might be route-specific
  const headerElement = screen.getByText(/DXB VIP LOUNGE SERVICE/i);
  expect(headerElement).toBeInTheDocument();
});