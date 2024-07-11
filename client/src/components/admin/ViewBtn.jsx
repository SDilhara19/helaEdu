import React from 'react';

const ViewBtn = () => {
  return (
    <div className="flex justify-end space-x-2">
      <button className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-700">
        View
      </button>
      <button className="bg-gray-500 text-white py-1 px-3 rounded-lg hover:bg-gray-700">
        Delete
      </button>
    </div>
  );
};

export default ViewBtn;
