// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import CSS for styling
// import Timeline from './Timeline';
import couplePhoto from '../images/image11.jpg'; // Example photo import

const events = [
  {
    title: 'First Date',
    date: 'February 21st, 2021',
    description: 'Our first date was magical. We talked for hours and knew this was something special.'
  },
  {
    title: 'Engagement',
    date: 'December 10th, 2023',
    description: 'He proposed at the capitol building. It was the happiest moment of our lives.'
  },
  {
    title: 'Wedding Day',
    date: 'May 17th, 2025',
    description: 'Our big day is finally here! We can\'t wait to celebrate with everyone.'
  }
];


const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Our Love Story</h1>
      <section className="timeline-section">
        {/* <Timeline events={events} /> */}
      </section>
      <div className="about-content">
        <div className="about-photo">
          <img src={couplePhoto} alt="Couple" />
        </div>
        <div className="about-text">
          <h2>The Proposal</h2>
          <p>
          <b>Date:</b> December 10th, 2023. <br /> <br /> The weather was a torrential downpour, an unrelenting monsoon. That week, it was Cameron's turn to plan our date, and he had arranged for brunch at a new restaurant in town. The day began calmly and lovingly as we prepared for the outing. When it was time to leave, we grabbed the clear umbrellas Cameron had bought—he'd fallen in love with them during our trip to Japan.
          </p>
          <p>
          We ran through the rain to the car, laughing as we got soaked. A few minutes into the drive, I turned to Cameron and said, "This rain is insane! We can stay home if you want." He smiled and replied, "I really wanted to go to brunch today. Let's give it a try; we can always turn around if needed." I was up for the adventure, so we continued on.
          </p>
          <p>
          We arrived at the capital building district in Downtown Raleigh and parked along the street. The avenue was a river, and my feet were drenched as I stepped out. I couldn't help but feel a bit grumpy about braving the storm. As we walked up toward the capital building, I wondered aloud, "We've tried almost every restaurant around here. Where could he possibly be taking me?"
          </p>

          <p>
          We approached the brick pathway leading to the steps of the capital building, right near Fayetteville Street. Cameron started looking around, seemingly aimless, which confused me even more. "Uh, Cameron? Where are we going?" I asked. Just then, he tossed his umbrella aside and handed me a letter. As I opened it, my heart raced—the words read, "Will you marry me?"
          </p>
          <p>
          I looked up, stunned, to see Cameron down on one knee, holding a small black box with a beautiful ring inside. He said, <br /><br /> "Molly, you don't just mean the world to me; you are the world to me. Will you marry me?" <br /> <br /> In utter shock, I blurted out, "Is this a joke?" as I glanced around, trying to process the moment. But then, all I wanted was to embrace him and kiss him. We slipped the ring on my finger and shared a kiss, with our friend capturing the whole moment from a hidden spot nearby. It was perfect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
