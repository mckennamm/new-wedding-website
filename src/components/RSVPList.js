// src/components/RSVPList.js
import React, { useEffect, useState } from 'react';
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';
import './RSVPList.css';

function RSVPList() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'rsvps'));
      setRsvps(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div className="rsvp-list">
      <h2>RSVP List</h2>
      <ul>
        {rsvps.map((rsvp, index) => (
          <li key={index}>
            <p>Name: {rsvp.name}</p>
            <p>Email: {rsvp.email}</p>
            <p>Attending: {rsvp.attending}</p>
            <p>Message: {rsvp.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RSVPList;