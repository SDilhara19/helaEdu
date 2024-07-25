import React, { useState } from 'react';

const NotificationFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="bg-white border border-blue-500 shadow-lg p-6 rounded-lg mb-6 max-w-md mx-auto"> {/* Adjusted padding */}
      <h2 className="text-3xl font-bold mb-6">Filter Notifications</h2> {/* Increased font size */}
      <div className="flex space-x-4 mb-6"> {/* Increased space between filter choices */}
        <button 
          className={`text-xl px-5 py-3 rounded-md transition ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} // Increased font size
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button 
          className={`text-xl px-5 py-3 rounded-md transition ${activeFilter === 'info' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} // Increased font size
          onClick={() => handleFilterClick('info')}
        >
          Info
        </button>
        <button 
          className={`text-xl px-5 py-3 rounded-md transition ${activeFilter === 'warning' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} // Increased font size
          onClick={() => handleFilterClick('warning')}
        >
          Warning
        </button>
        <button 
          className={`text-xl px-5 py-3 rounded-md transition ${activeFilter === 'error' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} // Increased font size
          onClick={() => handleFilterClick('error')}
        >
          Error
        </button>
      </div>
      <div className="flex flex-col space-y-4"> {/* Increased vertical gap between fields */}
        <input 
          type="date" 
          className="p-3 text-lg bg-white border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-0" // Increased font size and padding
          placeholder="From Date"
        />
        <input 
          type="date" 
          className="p-3 text-lg bg-white border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-0" // Increased font size and padding
          placeholder="To Date"
        />
        <button 
          className="text-xl px-5 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" // Increased font size
          onClick={() => onFilterChange('dateRange')}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default NotificationFilter;
