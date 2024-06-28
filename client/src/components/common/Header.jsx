import React from "react";
import logo from "@assets/icons/logo.svg";
import { secondaryColor } from "@styles/_global.module.scss";
import { Link, redirect, NavLink } from "react-router-dom";

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
              <h4>Categories</h4>
            </a>
            <a className="nav-text flex-c m-4 cursor-pointer">
              <h4>Quiz</h4>
            </a>
            <Link to="/readArticles">
              <a className="nav-text flex-c m-4 cursor-pointer">
                <h4>Articles</h4>
              </a>
            </Link>
            <a className="nav-text flex-c m-4 cursor-pointer">
              <h4>Leaderboard</h4>
            </a>
          </div>
          <div className="auth-control">
            <button className="btn gold-button">
              <h4>Login</h4>
            </button>
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
