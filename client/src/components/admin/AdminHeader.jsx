import React from "react";
import logo from "@assets/icons/hela-edu-white-text.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="flex-c header-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img id="logo" src={logo} alt="" srcSet="" />
          </Link>
        </div>
        <nav className="flex-grow flex-sa z-1">
          <div className="nav-link-wrapper flex-sa">
            <li className="nav-text flex-c m-4 cursor-pointer">
              <h4>Home</h4>
            </li>
            <Link to="/articles">
              <li className="nav-text flex-c m-4 cursor-pointer">
                <h4>Categories</h4>
              </li>
            </Link>
            <Link to="/quiz">
              <li className="nav-text flex-c m-4 cursor-pointer">
                <h4>Quiz</h4>
              </li>
            </Link>
            <Link to="/readArticles">
              <li className="nav-text flex-c m-4 cursor-pointer">
                <h4>Articles</h4>
              </li>
            </Link>
            <li className="nav-text flex-c m-4 cursor-pointer">
              <h4>Leaderboard</h4>
            </li>
          </div>
          <div className="auth-control">
            <Link
              className="btn gold-button"
              to="/auth"
              state={{ authType: "login" }}
            >
              <h4>Login</h4>
            </Link>
            <Link
              className="btn gold-button"
              to="/auth"
              state={{ authType: "signup" }}
            >
              <h4>Sign Up</h4>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
