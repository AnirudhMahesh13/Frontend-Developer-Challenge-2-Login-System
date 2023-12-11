import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup'; // Import the Signup component
import Success from './Success';
import './App.css';

const App = () => {
  const [view, setView] = useState('login'); // 'login', 'signup', 'success'

  const handleLogin = () => {
    setView('success');
  };

  const handleSignup = () => {
    setView('signup');
  };

  const switchToLogin = () => {
    setView('login');
  };

  return (
    <div>
      {view === 'login' && <Login onLogin={handleLogin} onSignup={handleSignup} />}
      {view === 'signup' && <Signup onSignup={handleSignup} onLogin={switchToLogin} />}
      {view === 'success' && <Success />}
    </div>
  );
};

export default App;
