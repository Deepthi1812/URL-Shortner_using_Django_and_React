import React, { useState } from "react";
import axios from "axios";
import QRDisplay from "./QRDisplay";
import "../styles/URLShortenerForm.css"; // Ensure correct path

const URLShortenerForm = () => {
  const [formData, setFormData] = useState({
    original_url: "",
    custom_alias: "",
    expires_at: "",
    password: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  // Prepare payload: only include non-empty fields
  // Convert expires_at to UTC ISO string if set
  let expiresAtValue = formData.expires_at;
  if (expiresAtValue) {
    // If expires_at is not already in ISO format, convert from local datetime-local input
    // It will be like '2025-07-06T18:31', which is local time
    const localDate = new Date(expiresAtValue);
    expiresAtValue = localDate.toISOString(); // UTC ISO string
  }

  const payload = {
    original_url: formData.original_url,
    ...(formData.custom_alias && { custom_alias: formData.custom_alias }),
    ...(expiresAtValue && { expires_at: expiresAtValue }),
    ...(formData.password && { password: formData.password }),
  };

  try {
    const API_BASE = process.env.REACT_APP_API_BASE_URL;
    const res = await axios.post(
      `${API_BASE}shorten/`,
      payload
    );
    setResponse(res.data);
  } catch (err) {
    console.error(err);
    // Try to extract a specific error message from backend
    if (err.response && err.response.data) {
      const data = err.response.data;
      if (typeof data === 'object' && data.error) {
        setError(data.error);
      } else if (data.shortened_url && data.shortened_url[0].includes('already exists')) {
        setError("This alias is already taken. Please choose another one.");
      } else if (data.original_url) {
        setError(data.original_url[0]);
      } else if (typeof data === 'object') {
        // Show the first error message from any field
        const firstField = Object.keys(data)[0];
        setError(data[firstField][0]);
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } else {
      setError("Failed to shorten URL. Please try again.");
    }
  }
};

  return (
    <div className="url-shortener-container">
      <h2>Shorten Your URL For Free</h2>
      <h3>Paste your Link here!!</h3>
      <form onSubmit={handleSubmit} className="url-form">
        {/* Group all inputs inside one container */}
        <div className="input-group">
          <input name="original_url" placeholder="Original URL" onChange={handleChange} required />
          <input name="custom_alias" placeholder="Custom Alias (optional)" onChange={handleChange} />
          <input name="expires_at" type="datetime-local" onChange={handleChange} />
          <input name="password" placeholder="Password (optional)" onChange={handleChange} />
        </div>

        <button type="submit">Shorten</button>
      </form>

      {error && <p className="error">{error}</p>}

      {response && (
        <div className="response-section">
          <p>
            Shortened URL:{" "}
            <a href={response.short_url} target="_blank" rel="noreferrer">
              {response.short_url}
            </a>
          </p>

          <div className="qr-color-options">
            <label>QR Color:</label>
            <input type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} />
            <label>Background Color:</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          </div>

          <QRDisplay url={response.short_url} fgColor={qrColor} bgColor={bgColor} />
        </div>
      )}
    </div>
  );
};

export default URLShortenerForm;
