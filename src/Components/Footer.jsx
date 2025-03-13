import React from 'react';
import linkedinLogo from '../assets/icons8-linkedin-48.png';
import instagramLogo from '../assets/icons8-instagram-48.png';
import threadsLogo from '../assets/icons8-twitter-48.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Footer Info */}
        <div className="footer-info">
          <h3>TBI@KEC</h3>
          <p>Perundurai, Erode - 638 060</p>
          <p>Email: tbi@kongu.ac.in</p>
          <p>Phone: +91 4294 226600</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#apply">Apply for Incubation</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="footer-social-icons">
            <a href="#linkedin" className="social-icon">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="#instagram" className="social-icon">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="#threads" className="social-icon">
              <img src={threadsLogo} alt="Threads" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TBI@KEC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
