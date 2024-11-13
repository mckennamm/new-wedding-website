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
            <img src={event.icon} alt="Leaf Icon" />
          </div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <div id={`timeline-card-${index}`} className="timeline-card">
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;