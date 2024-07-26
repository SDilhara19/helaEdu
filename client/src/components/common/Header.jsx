import React from "react";
import logo from "@assets/icons/hela-edu-white-text.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { DarkModeProvider } from "@components/common/DarkModeContext";
import DarkModeToggle from "@components/common/DarkModeToggle";

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
              <div className="nav-text flex-c m-4 cursor-pointer">
                <h4>Home</h4>
              </div>
            </Link>
            <Link to="/SubjectCatalog">
              <div className="nav-text flex-c m-4 cursor-pointer">
                <h4>Subject</h4>
              </div>
            </Link>
            <Link to="/quiz">
              <div className="nav-text flex-c m-4 cursor-pointer">
                <h4>Quiz</h4>
              </div>
            </Link>
            <Link to="/articles">
              <div className="nav-text flex-c m-4 cursor-pointer">
                <h4>Articles</h4>
              </div>
            </Link>
            <Link to="/leaderboard/1">
              <a className="nav-text flex-c m-4 cursor-pointer">
                <h4>Leaderboard</h4>
              </a>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className="logged-in-header">
              <div className="dropdown-wrapper">
                <div className="dropdown dropdown-end">
                  <div className="flex-c">
                    <FontAwesomeIcon
                      tabIndex="0"
                      role="button"
                      icon={faBell}
                      size="3x"
                      className="notification-bell"
                    />
                  </div>
                  <ul tabIndex="0" className="menu dropdown-content shadow">
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
              <div className="dropdown-wrapper">
                <div className="dropdown dropdown-end">
                  <div className="profile-icon flex-c">
                    <FontAwesomeIcon
                      tabIndex="0"
                      role="button"
                      icon={faUser}
                      size="3x"
                    />
                  </div>
                  <ul tabIndex="0" className="menu dropdown-content shadow">
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
              {/* <DarkModeProvider>
                <DarkModeToggle />
              </DarkModeProvider> */}
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
