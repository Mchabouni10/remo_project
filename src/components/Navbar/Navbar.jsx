import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current page path

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
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              onClick={toggleMobileMenu}
              className={location.pathname === "/Services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              onClick={toggleMobileMenu}
              className={location.pathname === "/Portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={toggleMobileMenu}
              className={location.pathname === "/About" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              onClick={toggleMobileMenu}
              className={`contact-button ${
                location.pathname === "/Contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
