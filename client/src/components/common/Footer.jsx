import React from "react";
import logo from "@assets/icons/logo_white.svg";

function Footer() {
  return (
    <footer>
      <div>
        <nav className="flex-sb">
          <div className="flex-c">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="flex-col-start">
            <h2>HelaEdu</h2>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex-col-start">
            <h2>HelaEdu</h2>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex-col-start">
            <h2>HelaEdu</h2>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex-c w-full">
        <h4>HelaEdu Team</h4>
      </div>
    </footer>
  );
}

export default Footer;
