import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-text">Visit us:</p>

        <div className="social-icons">
          <a
            href="https://facebook.com" // Replace with your actual link
            className="icon-button facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://instagram.com" // Replace with your actual link
            className="icon-button instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com" // Replace with your actual link
            className="icon-button twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        {/* Mobile-Only Call Us with tel: link */}
        <a href="tel:+12248173264" className="call-us">
          Call Us: (224) 817-3264
        </a>
      </div>
    </div>
  );
}

export default Footer;





