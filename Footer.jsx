import React from "react";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer">
        <div>
          <h3>Features</h3>
          <ul>
            <a href="#"><li id="active">Cool stuff</li></a>
            <li>Random feature</li>
            <li>Team feature</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>Resource</li>
            <li>Resource name</li>
            <li>Resource name</li>
          </ul>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li>Team</li>
            <li>Locations</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
