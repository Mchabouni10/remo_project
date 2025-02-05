import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="logo-container">
        <img
          className="CompanyLogo"
          src="/images/RawdahRemodelingtransparent.png"
          alt="Company Logo"
        />
      </div>
      <div className="links-container">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <a className="UserIcon" href="/login">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
