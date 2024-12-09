// src/pages/Travel.js
import React from 'react';
import './Travel.css';

function Travel() {
  return (
    <div className="travel">
      <h1>Travel </h1>
    <div className="lodging-details">
      <h2>-Lodging-</h2>
      <p>Details about lodging...</p>
    </div>
    <div className="transportation-details">
      <h2>-Transportation-</h2>
      <p>For guests flying in, the closest airport is Raleigh-Durham International Airport (RDU), which is about 20-25 minutes away from the hotel.</p>
      <p>For guests driving in, the hotel offers valet parking for $50/day.</p>
      <p>For guests who prefer to use a rideshare service, both Uber and Lyft are available in the area.</p>
      <p>For guests who prefer to rent a car, there are several car rental companies available at the airport.</p>
    </div>
    

    <div className="parking-details">
      <h2>-Event Parking-</h2>
      <p>Please drive down the long road until you find space to park.</p>
    </div>

    <div className="attractions">
      <h2>-Things to do in the Triangle!-</h2>

      <div className="city-section">
        <h3>Raleigh</h3>
        <div className="attraction">
          <div className="attraction-info">
            <h4>North Carolina Museum of Art</h4>
            <ul>
              <li>Cost: Free, with priced special exhibits.</li>
              <li>Description: A premier destination for art lovers.</li>
            </ul>
            <a href="https://ncartmuseum.org/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/ncma-museum.jpg" alt="North Carolina Museum of Art" className="attraction-photo" />
        </div>
        <div className="attraction">
          <div className="attraction-info">
            <h4>North Carolina Farmers Market</h4>
            <ul>
              <li>Cost: Free to enter</li>
              <li>Description: Check out all that farmer NC has to offer.</li>
            </ul>
            <a href="https://ncartmuseum.org/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/nc-farmers-market.jpg" alt="North Carolina Museum of Art" className="attraction-photo" />
        </div>
        <div className="attraction">
          <div className="attraction-info">
            <h4>North Carolina Museum of History</h4>
            <ul>
              <li>Cost: Free to enter</li>
              <li>Description: A premier destination for art lovers.</li>
            </ul>
            <a href="https://ncartmuseum.org/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/nc-museum-of-history.jpg" alt="North Carolina Museum of Art" className="attraction-photo" />
        </div>
        {/* Add more attractions for Raleigh */}
      </div>

      <div className="city-section">
        <h3>Durham</h3>
        <div className="attraction">
          <div className="attraction-info">
            <h4>Duke Lemur Center</h4>
            <ul>
              <li>Cost: $12</li>
              <li>Description: Home to the largest population of lemurs outside of Madagascar.</li>
            </ul>
            <a href="https://lemur.duke.edu/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/duke-lemur-center.png" alt="Duke Lemur Center" className="attraction-photo" />
        </div>
        <div className="attraction">
          <div className="attraction-info">
            <h4>Duke University Chapel</h4>
            <ul>
              <li>Cost: Free to enter, donations encouraged</li>
              <li>Description: Really cool looking church, if you like that sort of thing.</li>
            </ul>
            <a href="https://lemur.duke.edu/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/duke-chapel.jpg" alt="Duke Lemur Center" className="attraction-photo" />
        </div>
        <div className="attraction">
          <div className="attraction-info">
            <h4>Duke Gardens</h4>
            <ul>
              <li>Cost: Free to enter, pay to park</li>
              <li>Description: Home to the largest population of lemurs outside of Madagascar.</li>
            </ul>
            <a href="https://lemur.duke.edu/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/duke-gardens.jpg" alt="Duke Lemur Center" className="attraction-photo" />
        </div>
        {/* Add more attractions for Durham */}
      </div>

      <div className="city-section">
        <h3>Chapel Hill</h3>
        <div className="attraction">
          <div className="attraction-info">
            <h4>North Carolina Botanical Garden</h4>
            <ul>
              <li>Cost: Free to enter</li>
              <li>Description: A beautiful garden showcasing native plants.</li>
            </ul>
            <a href="https://ncbg.unc.edu/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/nc-botanical-gardens.jpg" alt="North Carolina Botanical Garden" className="attraction-photo" />
        </div>
        <div className="attraction">
          <div className="attraction-info">
            <h4>Morehead Planetarium</h4>
            <ul>
              <li>Cost: Free to enter</li>
              <li>Description: A beautiful garden showcasing native plants.</li>
            </ul>
            <a href="https://ncbg.unc.edu/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/morehead-planetarium.webp" alt="North Carolina Botanical Garden" className="attraction-photo" />
        </div>
        <div className="attraction">
          <div className="attraction-info">
            <h4>Cat Tales Cat Cafe</h4>
            <ul>
              <li>Cost: Free to enter, purchase items in the cafe</li>
              <li>Description: A lovely place to grab a warm drink and snuggle with kitties up for adoption.</li>
            </ul>
            <a href="https://ncbg.unc.edu/" target="_blank" rel="noopener noreferrer" className="attraction-button">Visit Website</a>
          </div>
          <img src="./images/attractions/cat-tales-cat-cafe.jpg" alt="North Carolina Botanical Garden" className="attraction-photo" />
        </div>
        {/* Add more attractions for Chapel Hill */}
      </div>
    </div>
  </div>
  );
}

export default Travel;