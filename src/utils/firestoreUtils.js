import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firebase configuration

export const fetchGuestData = async (username) => {
  try {
    const guestRef = doc(db, "users", username); // Reference the guest document
    const guestSnap = await getDoc(guestRef);

    if (guestSnap.exists()) {
      console.log("Guest Data:", guestSnap.data());
      return guestSnap.data(); // Returns the document data
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching guest data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};
