import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { login } from "./auth"; // Import login function  
import { auth, db } from "./firebaseConfig"; // Import Firebase auth and Firestore
import { doc, getDoc } from "firebase/firestore"; // Query Firestore

// Pages and Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import EventDetails from "./pages/EventDetails";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Registry from "./pages/Registry";
import Travel from "./pages/Travel";
import RSVP from "./pages/RSVP";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setIsLoggedIn(true);
      setUserName(userData.name);
    }
  }, [])
;

  const handleLoginSuccess = (userData) => {
    console.log('Login Success:', userData);
    setIsLoggedIn(true);
    setUserName(userData.name);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('user');
  }


  return (
    <div className="App">
      {/* Navbar: Render only if logged in */}
      {isLoggedIn ? <Navbar /> : null} 

      {/* <Home setIsLoggedIn={setIsLoggedIn} /> */}
      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home 
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            userName={userName}
            handleLoginSuccess={handleLoginSuccess}
            handleLogout={handleLogout}
            />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>

      {/* Footer */}
      {isLoggedIn && <Footer />} 
    </div>
  );
}

export default App;
