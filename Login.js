// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the Login.css file

const Login = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Simulated login logic
    if (username === storedUsername && password === storedPassword) {
      onLogin();
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={onSignup}>Go to Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
