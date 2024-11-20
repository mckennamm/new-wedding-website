// src/pages/Home.js
import React from 'react';
import Countdown from '../components/Countdown';
import image15 from '../images/image15.jpg';
import './Home.css';

const targetDate = new Date('2025-05-17T16:00:00');

function Home() {
  return (
    <div className="home">
      <div className="photo-section" style={{ backgroundImage: `url(${image15})` }}>
        <div className="photo-overlay">
          <h1 className="photo-title">Molly & Cameron</h1>
          <button className="photo-button">RSVP</button>
        </div>
      </div>

      <div className="content-section">
        {/* Welcome message */}
        <div className="welcome-message">
          <h2>Thank you for being part of our love story!</h2>
          <p>We're so excited to celebrate our special day with you. <br/> Stay tuned for more details!</p>
          <button className="details-button">Event Details</button>
        </div>
        <div>
          <Countdown targetDate={targetDate} />
        </div>
         {/* <div className="card-grid">
          <div className="card">
            <h3>Home</h3>
          </div>
          <div className="card">
            <h3>Our Story</h3>
          </div>
          <div className="card">
            <h3>RSVP</h3>
          </div>
          <div className="card">
            <h3>Gallery</h3>
          </div>
          <div className="card">
            <h3>Registry</h3>
          </div> */}
        </div> 
      </div>
  );
}

export default Home;
