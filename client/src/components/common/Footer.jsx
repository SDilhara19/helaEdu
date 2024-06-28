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
    <footer className="flex-end">
      <div>
        <nav className="flex-sb-start">
          <div className="flex-c">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="flex-col-start nav-link-wrapper">
            <h3>HelaEdu</h3>
            <ul>
              <li>
                <h5>About Us</h5>
              </li>
              <li>
                <h5>Terms of service</h5>
              </li>
              <li>
                <h5>Privacy policy</h5>
              </li>
            </ul>
          </div>
          <div className="flex-col-start nav-link-wrapper">
            <h3>Get Help</h3>
            <ul>
              <li>
                <h5>FAQ</h5>
              </li>
              <li>
                <h5>Payment options</h5>
              </li>
            </ul>
          </div>
          <div className="flex-col-start nav-link-wrapper">
            <h3>Get Help</h3>

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
        <h5>HelaEdu Team</h5>
      </div>
    </footer>
  );
}

export default Footer;
