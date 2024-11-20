//imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import EventDetails from './pages/EventDetails';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import Navbar from './components/Navbar';
import Travel from './pages/Travel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/rsvp" element={<RSVP />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;