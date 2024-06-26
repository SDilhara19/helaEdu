import React from "react";
import logo from "@assets/icons/logo_white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div>
        <nav className="flex-sb-start">
          <div className="flex-c">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="flex-col-start nav-link-wrapper">
            <h2>HelaEdu</h2>
            <ul>
              <li>
                <h4>About Us</h4>
              </li>
              <li>
                <h4>Terms of service</h4>
              </li>
              <li>
                <h4>Privacy policy</h4>
              </li>
            </ul>
          </div>
          <div className="flex-col-start nav-link-wrapper">
            <h2>Get Help</h2>
            <ul>
              <li>
                <h4>FAQ</h4>
              </li>
              <li>
                <h4>Payment options</h4>
              </li>
            </ul>
          </div>
          <div className="flex-col-start nav-link-wrapper">
            <h2>Get Help</h2>

            <ul className="flex-sb w-full">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex-c copyright-text">
        <h4>HelaEdu Team</h4>
      </div>
    </footer>
  );
}

export default Footer;
