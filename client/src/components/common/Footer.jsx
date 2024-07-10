import React from "react";
import logo from "@assets/icons/hela-edu-black-text.svg";
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
    <footer className="flex-col-end">
      <div className="footer-wrapper">
        <div>
          <nav className="flex-sb">
            <div className="flex-start w-full">
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
            </div>
          </nav>
        </div>
        <div className="flex-end nav-link-wrapper-social">
          <ul className="flex-sb">
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
        <div className="flex-c copyright-text">
          <h5>HelaEdu Team</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
