// In index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();