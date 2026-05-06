// setupTests.js - Cleaned and merged configuration
// Removed duplicate import of '@testing-library/jest-dom'
// Single import statement for testing library jest-dom extensions
import '@testing-library/jest-dom';

// Additional common test setup configurations
// Configure testing environment globals if needed
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock window.matchMedia for components using media queries
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver for components using intersection observers
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// React Testing Library configuration
// Extend expect matchers with jest-dom custom matchers
// This enables assertions like expect(element).toBeInTheDocument()