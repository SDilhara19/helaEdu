import React from 'react';

const NotificationDetails = ({ notification, onClose, onDelete }) => {
  if (!notification) return null;

  return (
    <div className="bg-white border-2 border-blue shadow-lg p-4 rounded-lg">
      <button 
        className="text-blue hover:text-blue-700 mb-4"
        onClick={onClose}
      >
        Close
      </button>
      <h2 className="text-2xl font-bold mb-2">{notification.title}</h2>
      <p className="text-gray-700 mb-4">{notification.details}</p>
      <span className="text-sm text-gray-500 mb-4 block">{notification.timestamp}</span>
      <div className="flex space-x-4">
        <button 
          className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => onDelete(notification.id)}
        >
          Delete
        </button>
        <button 
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default NotificationDetails;
