import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faChartLine,
  faBell,
  faCog,
 
} from "@fortawesome/free-solid-svg-icons";

const ActivityBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="text-black shadow-2xl left-0 h-full p-6 flex flex-col justify-between bg-white "
      style={{
        // backgroundColor: "#F5F5F5",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        width: "15vw",
      }}
    >
      <div className="mt-16">
        <div className="flex flex-col space-y-8">
          <Link
            to="/summary"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/summary")
                ? "bg-blue text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-4" />
            Summary
          </Link>
          <Link
            to="/reputationPoints"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/reputationPoints")
                ? "bg-blue text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-4" />
            Reputation
          </Link>
          <Link
            to="/votes"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/votes")
                ? "bg-blue text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-4" />
            Votes
          </Link>
          <Link
            to="/comments"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/comments")
                ? "bg-blue text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faBell} className="mr-4" />
            Comments
          </Link>
          <Link
            to="/badges"
            className={`text-2xl flex items-center p-4 rounded transition-colors duration-300 ${
              isActive("/badges")
                ? "bg-blue text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <FontAwesomeIcon icon={faBell} className="mr-4" />
           Badges
          </Link>
         
        </div>
      </div>
     
    </div>
  );
};

export default ActivityBar;
