// src/components/Timeline.js
import React from 'react';
import './Timeline.css';

function Timeline({ events }) {
  const toggleCard = (index) => {
    const card = document.getElementById(`timeline-card-${index}`);
    if (card.style.display === 'block') {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  };

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item" onClick={() => toggleCard(index)}>
        <div className="timeline-icon">
          <img src='../images/random/mc-logo.svg' alt="leaf and initials" /> 
        </div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <div id={`timeline-card-${index}`} className="timeline-card">
              <div className="timeline-card-content">
                <div className="perspective-card his-perspective">
                  <h3>His Perspective</h3>
                  <p>{event.hisPerspective}</p>
                </div>
                <img src={event.photo} alt={event.title} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;