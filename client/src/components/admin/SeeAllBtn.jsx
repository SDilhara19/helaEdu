import React from 'react';

const SeeAllButton = ({ onClick }) => {
  return (
    
    <button
      onClick={onClick}
      className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      See All
    </button>
  );
};

export default SeeAllButton;
