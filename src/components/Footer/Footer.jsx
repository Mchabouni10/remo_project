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
          <a href="#" className="icon facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="icon instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="icon twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
            {/* Mobile-Only Call Us */}
            <p className="call-us">Call Us: (224) 817-3264</p>
      </div>
    </div>
  );
}

export default Footer;





