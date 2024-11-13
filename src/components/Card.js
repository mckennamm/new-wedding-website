// src/components/Card.js
import React from 'react';
import './Card.css';

function Card({ title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <button className="card-button">{title}</button>
    </div>
  );
}

export default Card;