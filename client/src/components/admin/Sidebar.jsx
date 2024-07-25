import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faChartLine,
  faBell,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="text-black shadow-2xl fixed left-0 h-full p-6 flex flex-col justify-between "
      style={{
        backgroundColor: "#F5F5F5",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        width: "15vw",
      }}
    >
      <div className="mt-16">
        <div className="flex flex-col space-y-8">
          <Link
            to="/Dashboard"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/Dashboard")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-4" />
            Dashboard
          </Link>
          <Link
            to="/Usermanagement"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/Usermanagement")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-4" />
            User Management
          </Link>
          <Link
            to="/reports"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/reports")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-4" />
            Reports
          </Link>
          <Link
            to="/notifications"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/notifications")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faBell} className="mr-4" />
            Notifications
          </Link>
          <Link
            to="/settings"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/settings")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faCog} className="mr-4" />
            Account Settings
          </Link>
        </div>
      </div>
      <div>
        <button className="text-xl flex items-center p-4 rounded transition-colors duration-300 bg-white text-black hover:bg-gray-200 w-full justify-center">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
