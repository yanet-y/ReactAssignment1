import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <header>
      <div className="header">
        <h2 className="logo">Company Name</h2>
        <nav>
          <ul className="navs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  );
}

export default Header;
