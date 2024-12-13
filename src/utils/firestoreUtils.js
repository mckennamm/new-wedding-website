// This file contains utility functions for interacting with Firestore. The loginUser function authenticates a user by username and password. It retrieves the user's document from the Firestore database and compares the password with the input password. If the user is found and the password matches, the function returns the user's data. Otherwise, it throws an error with an appropriate message. This function can be used in a login form to authenticate users before granting access to the application. 


import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebaseConfig"; // Adjust the path to your Firebase configuration file

/**
 * Function to authenticate a user by username and password.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {object} The user's Firestore document data if authentication is successful.
 * @throws {Error} If the user is not found or the password is incorrect.
 */

// Adjust the function signature and implementation as needed
// For example, you can add additional checks or validations based on your application requirements 
// or customize the error messages to provide more specific feedback to users.

export const loginUser = async (username, password) => {
  try {
    const userRef = doc(db, "users", username);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new Error("User not found");
    }

    const userData = userSnap.data();

    if (userData.password !== password) {
      throw new Error("Incorrect password");
    }

    return userData;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error; // Re-throw the error for the calling component to handle
  }
};
