import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="ableton-section">
          <h2 className="ableton-section-h2">Ableton</h2>
          
        </div>
        <div className="footer-sections-container">
          <div className="footer-section left-section">
          <ul>
            <li><a href="#">Register Live or Push</a></li>
            <li><a href="#">About Ableton</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
            <h2>Community</h2>
            <ul>
              <li><a href="#">Find Ableton User Groups</a></li>
              <li><a href="#">Find Certified Training</a></li>
              <li><a href="#">Become a Certified Trainer</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Education</h2>
            <ul>
              <li><a href="#">Offers for students and teachers</a></li>
              <li><a href="#">Ableton for the Classroom</a></li>
              <li><a href="#">Ableton for Colleges and Universities</a></li>
            </ul>
            <div className="language-location">
              <h2>Language and Location</h2>
              <ul>
                <li>
                  <select>
                    <option>English</option>
                    <option>Duetsch</option>
                    <option>Français</option>
                    <option>Español</option>
                    <option>中国人</option>
                    <option>日本語</option>
                  </select>
                </li>
                <li>
                  <select>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Australia</option>
                    <option>Deutschland</option>
                    <option>La France</option>
                    <option>España</option>
                    <option>中国</option>
                    <option>日本</option>
                    <option>Other</option>


                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <h2>Sign up to our newsletter</h2>
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <a href="#">Contact Us</a>
          <a href="#">Press Resources</a>
          <a href="#">Legal Info</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
          <a href="#">Imprint</a>
        </div>
      </div>
      <div className="footer-made-in">
        <p>Made in React.js by Atlis-Ky :D
          (please hire me I'm nice)
        </p>
      </div>
    </footer>
  );
};

export default Footer;