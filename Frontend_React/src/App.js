import React from 'react';
import URLShortenerForm from './components/URLShortenerForm';
import Auth from './components/Auth';
import { useState } from 'react';
import Features from "./components/Features";
import "./styles/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <h1>Fuzzy URL Shortener</h1>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="section">
          <Auth onAuthChange={setLoggedIn} />
        </div>
        {loggedIn && (
          <>
            <div className="section">
              <URLShortenerForm />
            </div>
            <div className="section">
              <Features />
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Fuzzy URL Shortener. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
