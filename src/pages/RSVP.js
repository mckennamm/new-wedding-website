// src/components/RSVPForm.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';
import './RSVP.css';

function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('yes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'rsvps'), {
        name,
        email,
        attending,
        message,
        timestamp: new Date()
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="rsvp-form">
      <h2>RSVP</h2>
      {submitted ? (
        <p>Thank you for your RSVP!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Attending:</label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default RSVPForm;