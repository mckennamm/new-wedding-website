

import { db, storage } from "../src/firebaseConfig";
import { getAuth, updatePassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

// Initialize Firebase Auth
const auth = getAuth();

async function migratePasswords() {
  // Retrieve all users from Firestore
  const usersCollection = collection(db, "users");
  const userSnapshot = await getDocs(usersCollection);
  const users = userSnapshot.docs.map(doc => doc.data());

  // Loop through users and update password in Firebase Auth
  for (const user of users) {
    const { email, hashedPassword } = user;
    
    if (email && hashedPassword) {
      try {
        const userAuth = await auth.getUserByEmail(email); // Get user from Firebase Auth

        // Update the password for the user in Firebase Auth
        await updatePassword(userAuth, hashedPassword);
        console.log(`Password updated for ${email}`);
      } catch (error) {
        console.error(`Error updating password for ${email}:`, error);
      }
    } else {
      console.log(`No email or hashed password for ${user.id}`);
    }
  }
}

migratePasswords().catch(error => {
  console.error("Error during migration:", error);
});
