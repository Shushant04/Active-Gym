import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Create this file even if empty

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


