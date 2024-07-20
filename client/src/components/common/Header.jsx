import React from "react";
import logo from "@assets/icons/hela-edu-white-text.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import useSignOut from "react-auth-kit/hooks/useSignOut";

function Header() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

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
            <Link to="/">
              <a className="nav-text flex-c m-4 cursor-pointer">
                <h4>Home</h4>
              </a>
            </Link>
            <Link to="/SubjectCatalog">
              <a className="nav-text flex-c m-4 cursor-pointer">
                <h4>Subject</h4>
              </a>
            </Link>
            <Link to="/quiz">
              <a className="nav-text flex-c m-4 cursor-pointer">
                <h4>Quiz</h4>
              </a>
            </Link>
            <Link to="/articles">
              <a className="nav-text flex-c m-4 cursor-pointer">
                <h4>Articles</h4>
              </a>
            </Link>
            <a className="nav-text flex-c m-4 cursor-pointer">
              <h4>Leaderboard</h4>
            </a>
          </div>
          {isAuthenticated ? (
            <div className="logged-in-header">
              <div class="dropdown-wrapper">
                <div class="dropdown dropdown-end">
                  <div className="flex-c">
                    <FontAwesomeIcon
                      tabindex="0"
                      role="button"
                      icon={faBell}
                      size="3x"
                      className="notification-bell"
                    />
                  </div>
                  <ul tabindex="0" class="menu dropdown-content">
                    <li>
                      <h4>Grades</h4>
                    </li>
                    <li>
                      <h4>Grades</h4>
                    </li>
                    <li>
                      <h4>Grades</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dropdown-wrapper">
                <div class="dropdown dropdown-end">
                  <div className="profile-icon flex-c">
                    <FontAwesomeIcon
                      tabindex="0"
                      role="button"
                      icon={faUser}
                      size="3x"
                    />
                  </div>
                  <ul
                    tabindex="0"
                    class="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
                  >
                    <li>
                      <h4>Profile</h4>
                    </li>
                    <li>
                      <h4>Grades</h4>
                    </li>
                    <li>
                      <h4
                        onClick={() => {
                          signOut();
                          window.location.reload();
                        }}
                      >
                        Log out
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="auth-control">
              <Link
                className="btn white-button"
                to="/auth"
                state={{ isLoginAction: true }}
              >
                <h4>Login</h4>
              </Link>
              <Link
                className="btn white-button"
                to="/auth"
                state={{ isLoginAction: false }}
              >
                <h4>Sign Up</h4>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
