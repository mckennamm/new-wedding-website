import React, { createContext, useContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firebase configuration

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [guestData, setGuestData] = useState(null);

  const fetchGuestData = async (username) => {
    try {
      const guestRef = doc(db, "users", username);
      const guestSnap = await getDoc(guestRef);

      if (guestSnap.exists()) {
        setGuestData(guestSnap.data());
        return guestSnap.data();
      } else {
        console.log("No such document!");
        setGuestData(null);
      }
    } catch (error) {
      console.error("Error fetching guest data:", error);
      throw error;
    }
  };

  return (
    <GuestContext.Provider value={{ guestData, fetchGuestData }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
