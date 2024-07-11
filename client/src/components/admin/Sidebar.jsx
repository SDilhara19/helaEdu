import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faChartLine, faBell, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg w-80 fixed top-0 left-0 h-full p-4 flex flex-col justify-between">
      <div>
        <div className="text-center font-extrabold text-5xl mb-8">Profile</div>
        <div className="flex flex-col space-y-16"> {/* Increased space-y from 12 to 16 */}
          <Link to="/" className="text-3xl font-extrabold text-black hover:bg-gray-200 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-4 text-3xl" /> 
            Dashboard
          </Link>
          <Link to="/moderator-management" className="text-3xl font-extrabold text-black hover:bg-gray-200 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-4 text-3xl" /> 
            Moderator Management
          </Link>
          <Link to="/reports" className="text-3xl font-extrabold text-black hover:bg-gray-200 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="mr-4 text-3xl" /> 
            Reports
          </Link>
          <Link to="/notifications" className="text-3xl font-extrabold text-black hover:bg-gray-200 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faBell} className="mr-4 text-3xl" /> 
            Notifications
          </Link>
          <Link to="/settings" className="text-3xl font-extrabold text-black hover:bg-gray-200 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faCog} className="mr-4 text-3xl" /> 
            Settings
          </Link>
        </div>
      </div>
      <div>
        <button className="text-3xl font-extrabold text-black hover:bg-gray-200 p-2 rounded w-full flex items-center justify-center">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4 text-3xl" /> 
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
