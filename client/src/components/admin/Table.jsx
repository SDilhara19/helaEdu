import React from 'react';

const Table = () => {
  const data = [
    { id: '1', name: 'John Doe', role: 'Admin', recentActivities: 'Logged in' },
    { id: '2', name: 'Jane Smith', role: 'Editor', recentActivities: 'Updated article' },
    { id: '3', name: 'Sam Wilson', role: 'Viewer', recentActivities: 'Viewed dashboard' },
    { id: '4', name: 'Lucy Brown', role: 'Admin', recentActivities: 'Changed settings' },
    { id: '5', name: 'Michael Johnson', role: 'Editor', recentActivities: 'Edited profile' },
    { id: '6', name: 'Emily Davis', role: 'Viewer', recentActivities: 'Commented on post' },
    { id: '7', name: 'Daniel Garcia', role: 'Admin', recentActivities: 'Added new user' },
  ];

  return (
    <div className="mt-10 ml-96">
      <div className="flex items-center">
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>ID</div>
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Name</div>
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Role</div>
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Recent Activities</div>
      </div>
      {data.map((row, index) => (
        <div key={index} className="flex items-center mt-4">
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.id}</div>
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.name}</div>
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.role}</div>
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.recentActivities}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
