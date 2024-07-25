import React from 'react';

const TableRow = ({ userId, name, email, status }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <div 
        className="border border-blue-500 rounded-2xl w-10/12 h-20 flex justify-between items-center px-4" 
        style={{ marginLeft: '250px', marginRight: '50px' }} // Increased left margin
      >
        <div className="flex-1 px-2"><p className="text-xl">{userId}</p></div>
        <div className="flex-1 px-2"><p className="text-xl">{name}</p></div>
        <div className="flex-1 px-2"><p className="text-xl">{email}</p></div>
        <div className="flex-1 px-2"><p className={`text-xl ${status === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>{status}</p></div>
        <div className="flex space-x-4 px-4">
          <button className="bg-yellow-500 text-white px-4 py-2 text-base rounded hover:bg-yellow-600 transition-colors duration-300">View</button>
          <button className="bg-gray-500 text-white px-4 py-2 text-base rounded hover:bg-gray-600 transition-colors duration-300">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
