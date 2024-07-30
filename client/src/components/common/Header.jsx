import React, { useEffect, useState } from "react";
import logo from "@assets/icons/hela-edu-white-text.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/fontawesome-free-regular";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { DarkModeProvider } from "@components/common/DarkModeContext";
import DarkModeToggle from "@components/common/DarkModeToggle";
import { userRoles } from "@utils/userRoles";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function Header() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const currentUserRole = useAuthUser()?.role;
  // currentUserRole==userRoles.Admin

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
            {currentUserRole == userRoles.Teacher ? (
              <Link to="/assignmentList">
                <div className="nav-text flex-c m-4 cursor-pointer">
                  <h4>Assignments</h4>
                </div>
              </Link>
            ) : currentUserRole == userRoles.Moderator ? (
              <Link to="/assignmentList">
                <div className="nav-text flex-c m-4 cursor-pointer">
                  <h4>Assignments</h4>
                </div>
              </Link>
            ) : (
              <Link to="/quiz">
                <div className="nav-text flex-c m-4 cursor-pointer">
                  <h4>Quiz</h4>
                </div>
              </Link>
            )}

            <Link to="/articles">
              <div className="nav-text flex-c m-4 cursor-pointer">
                <h4>Articles</h4>
              </div>
            </Link>
            {currentUserRole == userRoles.Student ? (
              <Link to="/leaderboard/1">
                <a className="nav-text flex-c m-4 cursor-pointer">
                  <h4>Leaderboard</h4>
                </a>
              </Link>
            ) : null}
          </div>
          {isAuthenticated ? (
            <div className="logged-in-header">
              <DarkModeProvider>
                <DarkModeToggle />
              </DarkModeProvider>
              <div className="dropdown-wrapper">
                <div className="dropdown dropdown-end">
                  <div className="flex-c">
                    <FontAwesomeIcon
                      tabIndex="0"
                      role="button"
                      icon={faBell}
                      size="2x"
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

              <div className="dropdown-wrapper p-0">
                <div className="dropdown dropdown-end">
                  <div className="profile-icon flex-c">
                    <FontAwesomeIcon
                      tabIndex="0"
                      role="button"
                      icon={faUser}
                      size="2x"
                    />
                  </div>
                  <ul tabIndex="0" className="menu dropdown-content shadow">
                    <li>
                      {currentUserRole == userRoles.Student ? (
                        <Link to="#">
                          <h4> My Profile</h4>
                        </Link>
                      ) : currentUserRole == userRoles.Teacher ? (
                        <Link to="/tProfile">
                          <h4> My Profile</h4>
                        </Link>
                      ) : currentUserRole == userRoles.Moderator ? (
                        <Link to="/tProfile">
                          <h4> My Profile</h4>
                        </Link>
                      ) : null}
                    </li>
                    <li>
                      {currentUserRole == userRoles.Student ? (
                        <Link to="/SubjectCatalog">
                          <h4> Chat</h4>
                        </Link>
                      ) : currentUserRole == userRoles.Teacher ? (
                        <Link to="/SubjectCatalog">
                          <h4> Chat</h4>
                        </Link>
                      ) : currentUserRole == userRoles.Moderator ? (
                        <Link to="/SubjectCatalog">
                          <h4> Chat</h4>
                        </Link>
                      ) : null}
                    </li>

                    <li
                      className={
                        currentUserRole == userRoles.Admin ||
                        currentUserRole == userRoles.Moderator
                          ? ""
                          : "no-display"
                      }
                    >
                      {currentUserRole == userRoles.Admin ? (
                        <Link to="/dashboard">
                          <h4>Dashboard</h4>
                        </Link>
                      ) : currentUserRole == userRoles.Moderator ? (
                        <Link to="/modDashboard">
                          <h4>Dashboard</h4>
                        </Link>
                      ) : null}
                    </li>
                    <li>
                      <h4>Grades</h4>
                    </li>

                    <li>
                      <h4
                        onClick={() => {
                          signOut();
                          window.location = "/auth";
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
