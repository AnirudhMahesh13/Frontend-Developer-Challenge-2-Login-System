// Signup.js
import React, { useState } from 'react';
import SignupSuccess from './SignupSuccess'; // Import the new component
import './Signup.css';

const Signup = ({ onSignup, onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [language, setLanguage] = useState('');
  const [success, setSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSignup = () => {
    if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword &&
      userType &&
      language &&
      password === confirmPassword
    ) {
      // Store user information in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Simulate a successful signup
      setSuccess(true);
      onSignup();
    } else {
      // Simulate a signup error
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="Signup-container">
      {!success ? (
        <div className="Signup-form">
          <h2>Signup</h2>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? 'Hide Password' : 'Show Password'}
            </button>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              {confirmPasswordVisible ? 'Hide Confirm Password' : 'Show Confirm Password'}
            </button>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>User Type</label>
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="learner">Learner</option>
              <option value="jobSeeker">Job Seeker / Applicant</option>
              <option value="employee">Employee</option>
              <option value="founder">Founder</option>
              <option value="educator">Educator</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          <div className="input-group">
            <label>Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
          </div>
          <button onClick={handleSignup} className="signup-button">
            Register
          </button>
          <button onClick={onLogin} className="login-button">
            Go to Login
          </button>
        </div>
      ) : (
        <SignupSuccess />
      )}
    </div>
  );
};

export default Signup;
