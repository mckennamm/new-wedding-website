import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../firebaseConfig'; // Assuming you have firebaseConfig.js
import bcrypt from 'bcryptjs'; // Import bcrypt for password comparison
import { collection, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions 

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Query Firestore for the user document by username
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q); // Get the query snapshot

      if (querySnapshot.docs.length > 0) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (bcrypt.compareSync(password, userData.password)) {
          onLoginSuccess(userData); // Pass user data to handleLoginSuccess
        } else {
          setError('Invalid password. Please try again.');
        }
      } else {
        setError('No user found with that username.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.');
    }
  };


  return (
    <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />

        <input 
          type="password" 
          value={password} 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
