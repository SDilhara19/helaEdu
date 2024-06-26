import React from "react";
import logo from "@assets/icons/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header>
      <div className="flex-c header-wrapper">
        <div className="logo-wrapper">
          <img id="logo" className="mb-6" src={logo} alt="" srcset="" />
        </div>
        <nav className="flex-grow flex-sa z-1">
          <div className="nav-link-wrapper flex-sa">
            <a className="nav-text flex-c m-4 cursor-pointer">
              <h4>Home</h4>
            </a>
            <a className="nav-text flex-c m-4 cursor-pointer">
              <h4>Assignments</h4>
            </a>
            <a className="nav-text flex-c m-4 cursor-pointer">
              <h4>Articles</h4>
            </a>
            
          </div>
          <div className="auth-control">
            <div className="bg-yellow rounded-badge ">
                <FontAwesomeIcon icon={faUser} className="text-blue-500 text-lg size-10" />
            </div>
           
            <button className="btn gold-button">
              <h4>Sign Up</h4>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
