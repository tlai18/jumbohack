import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LawyersContextProvider } from './context/LawyersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LawyersContextProvider>
        <App />
      </LawyersContextProvider>
  </React.StrictMode>
);

