import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <iframe  
        src="https://open.spotify.com/embed/playlist/6p46yauHvtbyNBZvLQ95HH?utm_source=generator&autoplay=1" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title="spotify-mix-tape"
        >
      </iframe>

    </div>
  );
}