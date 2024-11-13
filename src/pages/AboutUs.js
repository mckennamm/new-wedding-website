// src/pages/AboutUs.js
import React from 'react';
import Timeline from '../components/Timeline';
import './AboutUs.css';

const events = [
  {
    title: 'First Meeting',
    date: 'February 27, 2021',
    description: 'We first met at a mutual friend\'s party...',
    icon: '/images/icons/flower1.png', // Use relative path from public directory
    photo: '/images/events/first-meeting.jpg' // Add photo URL
  },
  {
    title: 'First Date',
    date: 'March 13, 2021',
    description: 'Our first date official date was at a bar called Bittersweet. Cameron, the gentleman that he is, was studying for his motorcycle licensing exam while we had drinks and desserts.',
    icon: '/images/icons/flower1.png', // Use relative path from public directory
    photo: '/images/events/first-date.jpeg' // Add photo URL
  },
  {
    title: 'First Pets',
    date: 'September 10, 2021',
    description: 'We adopted two little kitties and have never been happier.',
    icon: '/images/icons/flower1.png', // Use relative path from public directory
    photo: '/images/events/first-pets1.jpeg' // Add photo URL
  },
  {
    title: 'Engagement',
    date: 'December 10, 2023',
    description: 'We got engaged at the capital building in downtown Raleigh...',
    icon: '/images/icons/flower1.png', // Use relative path from public directory
    photo: '/images/events/engagement.jpeg' // Add photo URL
  },
  {
    title: 'Wedding',
    date: 'May 17, 2025',
    description: 'Surrounded by loved ones, we will tie our lives together.',
    icon: '/images/icons/flower1.png', // Use relative path from public directory
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