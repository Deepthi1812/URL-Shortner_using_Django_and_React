import React from "react";
import "../styles/Features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faThumbsUp, 
  faLink, 
  faShieldAlt, 
  faChartBar, 
  faQrcode, 
  faLaptop  // Use faLaptop instead of faLaptopMobile
} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="features">
      <div className="feature-item">
        <FontAwesomeIcon icon={faThumbsUp} className="feature-icon" />
        <h3>Easy to Use</h3>
        <p>Simple and fast – just enter a long URL and get a shortened link instantly.</p>
      </div>

      <div className="feature-item">
        <FontAwesomeIcon icon={faLink} className="feature-icon" />
        <h3>Shortened URLs</h3>
        <p>Works with any link, regardless of size, making sharing easier.</p>
      </div>

      <div className="feature-item">
        <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
        <h3>Secure</h3>
        <p>Uses HTTPS encryption to ensure safe and private link sharing.</p>
      </div>

      <div className="feature-item">
        <FontAwesomeIcon icon={faChartBar} className="feature-icon" />
        <h3>Click Analytics</h3>
        <p>Track how many clicks your shortened URL receives and where they come from.</p>
      </div>

      <div className="feature-item">
        <FontAwesomeIcon icon={faQrcode} className="feature-icon" />
        <h3>QR Code</h3>
        <p>Generate QR codes for each shortened URL for quick sharing and scanning.</p>
      </div>

      <div className="feature-item">
        <FontAwesomeIcon icon={faLaptop} className="feature-icon" />
        <h3>Devices</h3>
        <p>Compatible with smartphones, tablets, and desktops.</p>
      </div>
    </div>
  );
};

export default Features;
