import React, { useState } from 'react';

const ModeratorDetails = ({ moderator }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleViewClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleViewClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Moderator
      </button>

      {isVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{moderator.name}</h2>
            <div className="flex justify-center mb-4">
              <img
                src={moderator.photo}
                alt={`${moderator.name}'s photo`}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p><strong>Email:</strong> {moderator.email}</p>
              <p><strong>Bio:</strong> {moderator.bio}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModeratorDetails;
