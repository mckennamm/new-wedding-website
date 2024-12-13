// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <h1>Welcome, {user?.name || "Guest"}</h1>
      <div className="navbar-container">
        <div className="navbar-center">
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-links">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links">Our Story</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event-details" className="nav-links">Event Details</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/travel" className="nav-links">Travel</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-links">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registry" className="nav-links">Registry</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq" className="nav-links">FAQ</NavLink>
            </li>
            <li onClick={onLogout} style={{ cursor: 'pointer' }}>
              logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
