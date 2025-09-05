import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Auth App</h1>
        <p>Secure authentication with email verification</p>
      </header>
      
      <main className="home-main">
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>
        
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>✅ Secure user registration</li>
            <li>✅ Email verification with OTP</li>
            <li>✅ JWT-based authentication</li>
            <li>✅ Password protection</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;