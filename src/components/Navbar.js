// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Our Story</Link></li>
        <li><Link to="/event-details">Event Details</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/registry">Registry</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="rsvp-button"><Link to="/rsvp">RSVP</Link></button>
    </nav>
  );
};

export default Navbar;
