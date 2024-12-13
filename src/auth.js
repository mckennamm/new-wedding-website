// This file contains the login function that authenticates the user based on the provided username and password. It queries the Firestore database to find a user with the specified username and then compares the hashed password using the bcrypt library. If the username and password match, the function returns the user data; otherwise, it returns null. This function can be used in a login form component to handle user authentication in a React application. 

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import bcrypt from "bcryptjs";

export const login = async (username, password) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      // Compare hashed password
      const passwordMatch = await bcrypt.compare(password, userData.password);

      if (passwordMatch) {
        console.log("Login successful:", userData);
        return userData; // Return the user data
      } else {
        console.error("Incorrect password");
        return null; // Invalid password
      }
    } else {
      console.error("User not found");
      return null; // User does not exist
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    return null;
  }
};