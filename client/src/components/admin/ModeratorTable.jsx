import React from 'react';
import ViewBtn from '@/components/admin/ViewBtn';

const Table = () => {
  const data = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', status: 'Approved' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending' },
    { id: '3', name: 'Sam Wilson', email: 'sam.wilson@example.com', status: 'Rejected' },
    { id: '4', name: 'Lucy Brown', email: 'lucy.brown@example.com', status: 'Approved' },
    { id: '5', name: 'Michael Johnson', email: 'michael.johnson@example.com', status: 'Pending' },
    { id: '6', name: 'Emily Davis', email: 'emily.davis@example.com', status: 'Rejected' },
    { id: '7', name: 'Daniel Garcia', email: 'daniel.garcia@example.com', status: 'Approved' },
  ];

  return (
    <div className="mt-8 ml-50">
      <div className="flex items-center">
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Moderator ID</div>
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Name</div>
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Email</div>
        <div className="bg-gray-200 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 font-bold flex justify-center items-center border-2 border-blue-500" style={{ minWidth: '300px' }}>Status</div>
      </div>
      {data.map((row, index) => (
        <div key={index} className="flex items-center mt-8">
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.id}</div>
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.name}</div>
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.email}</div>
          <div className="bg-gray-100 text-gray-800 text-2xl px-4 py-6 rounded-full mx-4 flex justify-center items-center" style={{ minWidth: '300px' }}>{row.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
