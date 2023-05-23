import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MealSwipesContextProvider } from './context/MealSwipeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MealSwipesContextProvider>
        <App />
      </MealSwipesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

