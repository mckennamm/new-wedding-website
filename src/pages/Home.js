// src/pages/Home.js
import React from 'react';
import Login from '../components/Login';  
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
          <button className="photo-button">Login</button>
        </div>
      </div>
      <div className="pink-bar"></div>
      <div>
        {/* Welcome message */}
        <div className="welcome-message">
          <h2>Thank you for being part of our love story!</h2>
          <p>We're so excited to celebrate our special day with you. <br/> Stay tuned for more details!</p>
          <button className="details-button">Event Details</button>
          
        </div>
      </div>
      <Countdown targetDate={targetDate} /> 
      <div className="pink-bar"></div>

    </div>
  );
}

export default Home;