// src/pages/EventDetails.js
import React from 'react';
import './EventDetails.css'; 
const weddingWeekendEvents = [
  {
    title: 'Rehearsal Dinner',
    date: 'May 16, 2025',
    time: '6:00 PM',
    location: 'TBD',
    description: 'Bridal party and immediate family share an intimate rehearsal dinner.',
    photo: './images/icons/romantic-dinner.png',
  },
  {
    title: 'Welcome Drinks',
    date: 'May 16, 2025',
    time: '7:30 PM',
    location: 'TBD',
    description: 'Join us for a drink to kick off the wedding festivities!',
    photo: './images/icons/champagne.png'
  },
  {
    title: 'Wedding Ceremony',
    date: 'May 17, 2025',
    time: '4:00 PM',
    location: 'Love\'s Way - 4519 Murphy School Road, Durham, NC',
    description: 'Our wedding ceremony will take place at the home of our dear friend.',
    photo: './images/icons/just-married.png'
  },
  {
    title: 'Reception',
    date: 'May 17, 2025',
    time: '6:00 PM',
    location: 'Ye Grand Backyard Tent',
    description: 'Celebrate with us at our wedding reception with dinner and dancing!',
    photo: './images/icons/disco-ball.png',
  },
  // Add more events as needed
];

function EventDetails() {
  return (
    <div className="event-details">
      <h1>Schedule of Events</h1>
      {weddingWeekendEvents.map((event, index) => (

        <div key={index} className="event-card">
          <h2>{event.title}</h2>
          <img src={event.photo} alt={event.title} />
          <p>{event.date} at {event.time}</p>
          <p>Location: {event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventDetails;