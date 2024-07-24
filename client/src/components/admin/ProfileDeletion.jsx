import React from 'react';

const DeleteProfileSection = () => {
  const handleDeleteClick = () => {
    // Implement the logic to delete the profile
  };

  return (
    <div
      className="p-8 bg-white rounded-lg shadow-lg"
      style={{marginLeft: '700px', marginTop: '50px', width: '300px' }} // Adjusted margins and reduced width
    >
      <h2 className="text-4xl font-extrabold mb-6 text-red-600">Delete Profile</h2> {/* Increased font size */}
      <p className="mb-4 text-lg text-gray-800">Are you sure you want to delete your profile? This action cannot be undone.</p>
      <button
        onClick={handleDeleteClick}
        className="bg-red-500 text-white text-lg px-6 py-3 rounded-lg" // Adjusted button size and font size
      >
        Delete Profile
      </button>
    </div>
  );
};

export default DeleteProfileSection;
