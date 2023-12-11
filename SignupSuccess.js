import React, { useState } from 'react';
import Login from './Login'; // Import the Login component
import './SignupSuccess.css';

const SignupSuccess = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Simulated login logic
    if (username === storedUsername && password === storedPassword) {
      // Successful login
      setError('');
      alert('Login Successful!'); // You can replace this with navigation or other actions
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className="SignupSuccess-container">
      <h2>Signup Successful!</h2>
      <p>Your login credentials:</p>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupSuccess;
