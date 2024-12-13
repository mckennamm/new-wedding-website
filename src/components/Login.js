import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../firebaseConfig'; // Assuming you have firebaseConfig.js
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Query Firestore for the user document by username
      const userRef = doc(db, 'users', username);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        // Verify password - you should use a hashing library to compare the passwords
        const passwordMatch = await bcrypt.compare(password, userData.password); // Use bcrypt or other hashing comparison

        if (passwordMatch) {
          onLoginSuccess(userData); // Pass user data to handleLoginSuccess
        } else {
          setErrorMessage('Invalid password');
        }
      } else {
        setErrorMessage('No user found with that username');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default Login;
