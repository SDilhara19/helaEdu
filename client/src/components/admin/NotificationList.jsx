import React from 'react';

const NotificationList = ({ notifications, onMarkAsRead }) => {
  return (
    <div className="bg-white border-2 border-blue-500 shadow-lg p-6 rounded-lg"> {/* Increased padding */}
      <h2 className="text-3xl font-bold mb-6">Notifications</h2> {/* Increased font size */}
      <ul className="space-y-6"> {/* Increased space between items */}
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-center justify-between p-6 border-b"> {/* Increased padding */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">{notification.title}</h3> {/* Increased font size */}
              <p className="text-gray-700 text-lg mb-1">{notification.details}</p> {/* Increased font size */}
              <span className="text-sm text-gray-500">{notification.timestamp}</span> {/* Reduced font size */}
            </div>
            <button 
              className="bg-blue-500 text-lg text-white px-5 py-3 rounded hover:bg-blue-600 transition" 
              onClick={() => onMarkAsRead(notification.id)}
            >
              Mark as Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
