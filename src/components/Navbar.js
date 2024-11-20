// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="rsvp-button"><Link to="/rsvp">RSVP</Link></button>
        </div>
        <div className="navbar-center">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">Our Story</Link>
            </li>
            <li className="nav-item">
              <Link to="/event-details" className="nav-links">Event Details</Link>
            </li>
            <li className="nav-item">
              <Link to="/travel" className="nav-links">Travel</Link>
            </li> 
            <li className="nav-item">
              <Link to="/gallery" className="nav-links">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/registry" className="nav-links">Registry</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-links">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
