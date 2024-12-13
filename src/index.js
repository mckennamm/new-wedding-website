import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'; 
import { GuestProvider } from './context/GuestContext.js';
import { AuthProvider } from './context/AuthContext.js';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<AuthProvider>
  <GuestProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GuestProvider>
</AuthProvider>

);

