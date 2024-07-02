import React from "react";
import logo from "@assets/icons/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Profile from "@assets/img/articles/profile.jpg"
import { DarkModeProvider }  from "@components/common/DarkModeContext";
import DarkModeToggle from "@components/common/DarkModeToggle";
function Header() {
  return (
    <header>
     
      <div className="flex-c header-wrapper">
     
        <div className="logo-wrapper">
          <Link to="/">
            <img id="logo" className="mb-6" src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="flex-grow flex-sa z-1">
          <div className="nav-link-wrapper flex-sa">
            <Link to="/" className="nav-text flex-c m-4 cursor-pointer">
              <h4>Home</h4>
            </Link>
            <Link to="/articles" className="nav-text flex-c m-4 cursor-pointer">
              <h4>Articles</h4>
            </Link>
            <Link to="/assignmentList" className="nav-text flex-c m-4 cursor-pointer">
              <h4>Assignments</h4>
            </Link>
            <Link to="/leaderboard" className="nav-text flex-c m-4 cursor-pointer">
              <h4>Categories</h4>
            </Link>
            
          </div>
          <div className="flex items-center">
            <Link to="/notifications" className="icon-wrapper mx-4">
              <FontAwesomeIcon icon={faBell} style={{ color: "#ffffff", cursor: 'pointer' }}  size="lg" />
            </Link>
            <Link to="/t_profile" className="icon-wrapper mx-4">
              <img  src={Profile} className="w-32 h-24 rounded-full "></img>
              {/* <FontAwesomeIcon icon={faUser} size="lg" /> */}
            </Link>

          </div>
          <DarkModeProvider>
                  <DarkModeToggle />
            </DarkModeProvider>
        </nav>
        {/* <DarkModeProvider>
                  <DarkModeToggle />
            </DarkModeProvider> */}
      </div>
      
    </header>

  );
}

export default Header;
