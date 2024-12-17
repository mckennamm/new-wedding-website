import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig' // Adjust the path to your Firebase config file
import { doc, getDoc } from 'firebase/firestore';

const RSVP = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateGuest = (index, updates) => {
    setUserData((prev) => {
      const updatedGuests = [...prev.guests];
      updatedGuests[index] = { ...updatedGuests[index], ...updates };
      return { ...prev, guests: updatedGuests };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'users', userId), userData);
      alert('RSVP updated successfully!');
    } catch (error) {
      console.error('Error updating RSVP:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    }
  };
  
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.error('No such user!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>User not found.</div>;
  }

  return (
    <div>
  <h1>RSVP for {userData.username || 'Guest'}</h1>
  <form onSubmit={handleSubmit}>
    {userData.guests.map((guest, index) => (
      <div key={index}>
        <h3>{guest.name}</h3>
        <label>
          Attending:
          <input
            type="checkbox"
            defaultChecked={guest.attending}
            onChange={(e) =>
              updateGuest(index, { attending: e.target.checked })
            }
          />
        </label>
        <label>
          Meal Choice:
          <select
            defaultValue={guest.mealChoice}
            onChange={(e) =>
              updateGuest(index, { mealChoice: e.target.value })
            }
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </label>
      </div>
    ))}
    <button type="submit">Submit RSVP</button>
  </form>
</div>

  );
};

export default RSVP;
