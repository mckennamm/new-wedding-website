import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { GuestProvider } from './context/GuestContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<GuestProvider>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
</GuestProvider>
);

