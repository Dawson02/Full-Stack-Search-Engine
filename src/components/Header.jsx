import React from "react";
import { Link } from "react-router-dom";
import scoutLogo from "../media/scoutLogo.png"; // Adjust the path as needed
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>
        Any Animals <img src={scoutLogo} alt="Scout Logo" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
