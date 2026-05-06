import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create root element for React 18+ concurrent features
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app with StrictMode for development warnings and future React features
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);