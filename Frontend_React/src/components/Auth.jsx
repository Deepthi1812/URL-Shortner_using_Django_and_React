import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ onAuthChange }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (isLogin) {
        // Login
        const res = await axios.post(`${API_BASE}login/`, { username, password });
        setMessage('Login successful!');
        localStorage.setItem('accessToken', res.data.access);
        localStorage.setItem('refreshToken', res.data.refresh);
        localStorage.setItem('username', username);
        setLoggedIn(true);
        if (onAuthChange) onAuthChange(true);
      } else {
        // Signup (response not needed)
        await axios.post(`${API_BASE}signup/`, { username, password, email });
        setMessage('Signup successful! You can now log in.');
        setIsLogin(true);
      }
    } catch (err) {
      setMessage('Error: ' + (err.response?.data?.detail || 'Something went wrong.'));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setLoggedIn(false);
    localStorage.removeItem('username');
    if (onAuthChange) onAuthChange(false);
    setMessage('Logged out successfully.');
  };

  if (loggedIn) {
    const username = localStorage.getItem('username');
    return (
      <div style={{ maxWidth: 350, margin: '40px auto', background: '#f7f7f7', padding: 24, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center' }}>
        <h2 style={{ color: '#1F3D75' }}>Welcome{username ? `, ${username}` : ''}!</h2>
        <button onClick={handleLogout} style={{ marginTop: 18, padding: 10, borderRadius: 6, background: '#1F3D75', color: '#fff', border: 'none', fontWeight: 600 }}>Logout</button>
        {message && <div style={{ marginTop: 14, color: message.startsWith('Error') ? 'crimson' : 'green' }}>{message}</div>}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 350, margin: '40px auto', background: '#f7f7f7', padding: 24, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <h2 style={{ marginBottom: 20, color: '#1F3D75' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 10, padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
          />
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 16, padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 6, background: '#1F3D75', color: '#fff', border: 'none', fontWeight: 600 }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <div style={{ marginTop: 18, textAlign: 'center' }}>
        <button onClick={() => setIsLogin(!isLogin)} style={{ background: 'none', border: 'none', color: '#1F3D75', cursor: 'pointer', fontWeight: 500 }}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
      {message && <div style={{ marginTop: 14, color: message.startsWith('Error') ? 'crimson' : 'green', textAlign: 'center' }}>{message}</div>}
    </div>
  );
};

export default Auth;
