import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { login } from "./auth"; // Import login function  

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
import Login from "./components/Login"; // Import Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage on page load
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsLoggedIn(true); // Set isLoggedIn to true if user is found in localStorage
      console.log("User loaded from localStorage:", parsedUser); // Debugging
    } else {
      console.log("No user found in localStorage");
    }
  }, []); // Empty dependency array to run only once on component mount

  const handleLogin = async (username, password) => {
    console.log("Attempting login with", username, password); // Debugging
    const userData = await login(username, password); // Call Firestore login
    if (userData) {
      setUser(userData);
      setIsLoggedIn(true); // Update isLoggedIn to true when login is successful
      localStorage.setItem("loggedInUser", JSON.stringify(userData)); // Save to localStorage
      console.log("Login successful:", userData); // Debugging
    } else {
      console.log("Login failed"); // Debugging
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false); // Set isLoggedIn to false when logging out
    localStorage.removeItem("loggedInUser"); // Clear session
    console.log("Logged out"); // Debugging
  };

  return (
    <div className="App">
      {/* Navbar: Render only if logged in */}
      {isLoggedIn ? <Navbar /> : null} {/* Render Navbar only if user is logged in */}

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Add login route */}
      </Routes>

      {/* Footer */}
      {isLoggedIn && <Footer />}

      {/* Debugging Info */}
      <div>
        <h2>Debugging Information:</h2>
        <p>User: {JSON.stringify(user)}</p>
        <p>isLoggedIn: {isLoggedIn ? "True" : "False"}</p>
      </div>
    </div>
  );
}

export default App;
