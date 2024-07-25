import React from 'react';

const NotificationStats = ({ stats }) => {
  return (
    <div className="bg-white border-2 border-blue-500 shadow-lg p-6 rounded-lg mb-12 w-1/2 mx-auto"> {/* Adjusted padding and width */}
      <h2 className="text-3xl font-bold mb-6">Notification Summary</h2> {/* Increased font size */}
      <ul>
        <li className="flex justify-between items-center mb-3 text-lg"> {/* Increased font size and margin */}
          <span className="font-semibold text-xl">Total Notifications:</span> {/* Increased font size */}
          <span className="text-xl ml-3">{stats.total}</span> {/* Increased font size and margin-left */}
        </li>
        <li className="flex justify-between items-center mb-3 text-lg"> {/* Increased font size and margin */}
          <span className="font-semibold text-xl">Unread Notifications:</span> {/* Increased font size */}
          <span className="text-xl ml-3">{stats.unread}</span> {/* Increased font size and margin-left */}
        </li>
        <li className="flex justify-between items-center mb-3 text-lg"> {/* Increased font size and margin */}
          <span className="font-semibold text-xl">Info:</span> {/* Increased font size */}
          <span className="text-xl ml-3">{stats.info}</span> {/* Increased font size and margin-left */}
        </li>
        <li className="flex justify-between items-center mb-3 text-lg"> {/* Increased font size and margin */}
          <span className="font-semibold text-xl">Warning:</span> {/* Increased font size */}
          <span className="text-xl ml-3">{stats.warning}</span> {/* Increased font size and margin-left */}
        </li>
        <li className="flex justify-between items-center mb-3 text-lg"> {/* Increased font size and margin */}
          <span className="font-semibold text-xl">Error:</span> {/* Increased font size */}
          <span className="text-xl ml-3">{stats.error}</span> {/* Increased font size and margin-left */}
        </li>
      </ul>
    </div>
  );
};

export default NotificationStats;
