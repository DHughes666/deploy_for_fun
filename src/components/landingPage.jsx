// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <p>This is the best app for managing your tasks.</p>
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
    </div>
  );
};

export default LandingPage;
