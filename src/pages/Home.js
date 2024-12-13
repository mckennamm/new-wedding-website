// Code for the Home page, which displays a countdown timer and a login modal for users to log in. The page uses the useState and useEffect hooks to manage the login state and track the authentication status of the user. The handleLoginSuccess function is called when the user successfully logs in, updating the login state and fetching the user data from Firestore. The toggleLoginModal function is used to show or hide the login modal. The Countdown component is conditionally rendered based on the login state, and the Login component is rendered inside a modal when the user clicks the login button. The Home component is exported as the default export. 


//IMPORTS
import React, { useState } from 'react';

//COMPONENTS
import Login from '../components/Login';
import Countdown from '../components/Countdown';
import Rsvp from '../components/Rsvp';

//IMAGES  
import image15 from '../images/image15.jpg';

//STYLES
import './Home.css';

const targetDate = new Date('2025-05-17T16:00:00');

//HOME COMPONENT
function Home({ isLoggedIn, handleLoginSuccess, handleLogout, userName }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRsvpModal, setShowRsvpModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal)
  };

  const toggleRsvpModal = () => {
    console.log("RSVP button clicked")
    setShowRsvpModal(!showRsvpModal);
  }

  return (
    <div className="home">
      <div className="photo-section" style={{ backgroundImage: `url(${image15})` }}>
        <div className="photo-overlay">
          <h1 className="photo-title">Molly & Cameron</h1>

          {!isLoggedIn ? (
            <button onClick={toggleLoginModal} className="login-button">
              Login
            </button>
          ) : (
            <div className="welcome-message">
              <h2>Welcome, {userName ? userName : 'Guest'}!</h2>
              <h3>We're so excited to share our love story with you.</h3>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>

              <button onClick={toggleRsvpModal} className="rsvp-button">
                RSVP Now!
              </button>
            </div>
          )}
        </div>
      </div>

      {isLoggedIn && <Countdown targetDate={targetDate} />}

      {showLoginModal && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-modal" onClick={toggleLoginModal}>
              &times;
            </button>
            <Login 
              onLoginSuccess={(userData) => {
                handleLoginSuccess(userData);
                setShowLoginModal(false); // Close the modal on successful login
              }} 
              setShowLoginModal={setShowLoginModal} // Pass the function to close the modal
            />
          </div>
        </div>
      )}
      {/* RSVP Modal */}
{showRsvpModal && (
  <div className="rsvp-modal">
    <div className="rsvp-modal-content">
      <button className="close-modal" onClick={toggleRsvpModal}>
        &times;
      </button>
      <Rsvp userName={userName} />
    </div>
  </div>
)}

    </div>
  );
}

export default Home;