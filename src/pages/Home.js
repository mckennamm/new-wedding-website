// Code for the Home page, which displays a countdown timer and a login modal for users to log in. The page uses the useState and useEffect hooks to manage the login state and track the authentication status of the user. The handleLoginSuccess function is called when the user successfully logs in, updating the login state and fetching the user data from Firestore. The toggleLoginModal function is used to show or hide the login modal. The Countdown component is conditionally rendered based on the login state, and the Login component is rendered inside a modal when the user clicks the login button. The Home component is exported as the default export. 


//IMPORTS
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig'; // Import Firebase auth and Firestore
import { onAuthStateChanged } from 'firebase/auth'; // Track auth state
import { doc, getDoc } from 'firebase/firestore'; // Query Firestore
import Navbar from '../components/Navbar'; // Import Navbar component

//COMPONENTS
import Login from '../components/Login';
import Countdown from '../components/Countdown';

//IMAGES  
import image15 from '../images/image15.jpg';

//STYLES
import './Home.css';

const targetDate = new Date('2025-05-17T16:00:00');

//HOME COMPONENT
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false); // State to control modal visibility
  const [loading, setLoading] = useState(true);

  // Handle successful login (from Login.js)
  const handleLoginSuccess = async (uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setShowLoginModal(false); // Close the modal after successful login

    try {
      const userRef = doc(db, 'users', uid); // Reference to the user's Firestore document
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setUserName(userData.name); // Set user name from Firestore
      } else {
        console.log('No user document found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Track auth state (useful for persistent sessions)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is logged in:", user);
        handleLoginSuccess(user.uid); // Auto-login if the user is already signed in
      } else {
        console.log("user is logged out");
        setIsLoggedIn(false);
      }
      setLoading(false); //End loading once auth check is complete
    });

      return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUserName('');
      setUserId('');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('There was an issue logging out. Please try again.')
    }
  };

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal); // Toggle modal visibility

  return (
    <div className="home">
       {/* Render Navbar only when logged in */}
      {isLoggedIn ? <Navbar /> : null}
      <div className="photo-section" style={{ backgroundImage: `url(${image15})` }}>
        <div className="photo-overlay">
          <h1 className="photo-title">Molly & Cameron</h1>

          {/* Conditional rendering based on login state */}
          {!isLoggedIn ? (
            <button onClick={toggleLoginModal} className="login-button">
              Login
            </button>
          ) : (
            <div className="welcome-message">
              <h2>Welcome, {userName ? userName : 'Guest'}!</h2>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {!loading && isLoggedIn && <Countdown targetDate={targetDate} />}

      {/* Modal for Login */}
      {showLoginModal && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-modal" onClick={toggleLoginModal}>
              &times;
            </button>
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
