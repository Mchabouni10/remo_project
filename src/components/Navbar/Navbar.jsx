import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="nav">
      <div className="logo-container">
        <img
          className="CompanyLogo"
          src="/images/RawdahRemodelingtransparent.png"
          alt="Company Logo"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      {/* Regular Links (Hidden on Mobile) */}
      <div className={`links-container ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Services" onClick={toggleMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" onClick={toggleMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <a className="UserIcon" href="/login" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
