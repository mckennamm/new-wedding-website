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
      </Routes>

      {/* Footer */}
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
