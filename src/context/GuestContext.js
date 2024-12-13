import React, { createContext, useContext, useState, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

const GuestContext = createContext({ guestData: null, fetchGuestData: async () => {} });

export const GuestProvider = ({ children }) => {
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGuestData = async (username) => {
    setLoading(true);
    try {
      const guestRef = doc(db, "users", username);
      const guestSnap = await getDoc(guestRef);

      if (guestSnap.exists()) {
        const data = guestSnap.data();
        setGuestData(data);
        return { success: true, data };
      } else {
        console.log("No such document!");
        setGuestData(null);
        return { success: false, error: "No document found" };
      }
    } catch (error) {
      console.error(`Error fetching guest data for username: ${username}`, error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const clearGuestData = () => setGuestData(null);

  const value = useMemo(() => ({ guestData, fetchGuestData, clearGuestData, loading }), [guestData, loading]);

  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>;
};

export const useGuest = () => useContext(GuestContext);
