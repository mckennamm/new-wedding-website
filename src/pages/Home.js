import React from 'react';
import Countdown from '../components/Countdown';
import Card from '../components/Card';

//styles
import './Home.css';

//photos
import imageOne from '../images/image15.jpg';

function Home() {
  const targetDate = new Date('2025-05-17T00:04:00');

  const handleNavigation = (path) => {
    // Implement navigation logic here, e.g., using useNavigate from react-router-dom
    console.log(`Navigate to ${path}`);
  };

  return (
    <div className="home">
      <div className="main-photo">{/* Main photo */}
        <img src={imageOne} alt="Wedding Main" />
        <div className="photo-overlay">
          <h1 className="photo-title">Molly & Cameron</h1>
        </div>
      </div>

      {/* Welcome message */}
      <div className="welcome-message">
        <h2>We're tying the knot!</h2>
        <p>We're so excited to celebrate our special day with you. <br/> Stay tuned for more details!</p>
        <button className="details-button">Event Details</button>
      </div>
      <div>
        <Countdown targetDate={targetDate} />
      </div>
      <div className="card-grid">
        <Card title="Our Story" onClick={() => handleNavigation('/home')} />
        <Card title="RSVP " onClick={() => handleNavigation('/rsvp')} />
        <Card title="Gallery" onClick={() => handleNavigation('/gallery')} />
        <Card title="Registry" onClick={() => handleNavigation('/registry')} />
        <Card title="Travel" onClick={() => handleNavigation('/travel')} />
        <Card title="Event Details" onClick={() => handleNavigation('/event-details')} />
      </div>
    </div>
  );
}

export default Home;