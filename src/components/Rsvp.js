import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Import Firestore config
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions

const Rsvp = ({ userName }) => {
  const [attending, setAttending] = useState(false);
  const [mealChoice, setMealChoice] = useState('');
  const [plusOne, setPlusOne] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the RSVP details to Firestore under the "invitations" collection, using the userName
      const rsvpRef = doc(db, 'invitations', userName);
      await setDoc(rsvpRef, {
        attending,
        mealChoice,
        plusOne,
      });

      alert('RSVP submitted successfully!');
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('An error occurred while submitting your RSVP.');
    }
  };

  return (
    <div>
      <h3>RSVP</h3>
      {error && <p>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <label>
          Will you attend the wedding?
          <select value={attending} onChange={(e) => setAttending(e.target.value === 'true')}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>

        <label>
          Meal Choice:
          <select value={mealChoice} onChange={(e) => setMealChoice(e.target.value)} required>
            <option value="">Select your meal</option>
            <option value="Chicken">Chicken</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </label>

        <label>
          Do you have a plus one?
          <select value={plusOne} onChange={(e) => setPlusOne(e.target.value === 'true')}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>

        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
};

export default Rsvp;
