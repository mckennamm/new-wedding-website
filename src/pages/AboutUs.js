// src/pages/AboutUs.js
import React from 'react';
import Timeline from '../components/Timeline';
import './AboutUs.css';


const events = [

  {
    title: 'First Date',
    date: 'March 13, 2021',
    hisPerspective: 'Stuff and stuff.',
    herPerspective: 'We lived and loved.',
    photo: '/images/events/first-date.jpeg' // Add photo URL
  },
  {
    title: 'First Pets',
    date: 'September 10, 2021',
    hisPerspective: 'We adopted two little kitties and have never been happier.',
    herPerspective: 'Cosmo and ducky are the cutest little babies.',
    photo: './images/events/first-pets1.jpeg' // Add photo URL
  },
  {
    title: 'Engagement',
    date: 'December 10, 2023',
    hisPerspective: 'We adopted two little kitties and have never been happier.',
    herPerspective: 'We trucked through the rain and wind to go to brunch. I left with a ring.',
    photo: '/images/events/engagement.jpeg' // Add photo URL
  },
  {
    title: 'Wedding',
    date: 'May 17, 2025',
    hisPerspective: 'We adopted two little kitties and have never been happier.',
    herPerspective: 'We adopted two little kitties and have never been happier.',
    photo: '/images/events/wedding.jpg' // Add photo URL
  },
  // Add more events as needed
];

function AboutUs() {
  return (
    <div className="about-us">
      <h1>Our Story</h1>
      <Timeline events={events} />
    </div>
  );
}

export default AboutUs;