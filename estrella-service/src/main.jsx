import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './context/user-context.jsx';
import { HousesProvider } from './context/houses-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HousesProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </HousesProvider>
  </React.StrictMode>
);
