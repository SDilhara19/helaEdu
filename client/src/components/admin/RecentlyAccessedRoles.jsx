import React, { useState } from 'react';

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const getButtonStyle = (button) => ({
    backgroundColor: activeButton === button ? '#eab308' : '#1D4ED8', // Yellow when active, blue otherwise
    color: activeButton === button ? 'black' : 'white', // Black text when active, white otherwise
  });

  return (
    <div className="flex justify-around p-8 space-x-4" style={{ marginLeft: '150px' }}>
      {/* Button 1: Students */}
      <button 
        className="border-2 border-blue-500 shadow-lg p-1 rounded-full text-center flex flex-col justify-center items-center transition duration-300 ease-in-out"
        style={{ 
          width: '150px', 
          height: '60px',
          ...getButtonStyle('students')
        }}
        onClick={() => handleClick('students')}
      >
        <h2 className="text-lg font-black mb-1">Students</h2>
      </button>

      {/* Button 2: Teachers */}
      <button 
        className="border-2 border-blue-500 shadow-lg p-1 rounded-full text-center flex flex-col justify-center items-center transition duration-300 ease-in-out"
        style={{ 
          width: '150px', 
          height: '60px',
          ...getButtonStyle('teachers')
        }}
        onClick={() => handleClick('teachers')}
      >
        <h2 className="text-lg font-black mb-1">Teachers</h2>
      </button>

      {/* Button 3: Moderators */}
      <button 
        className="border-2 border-blue-500 shadow-lg p-1 rounded-full text-center flex flex-col justify-center items-center transition duration-300 ease-in-out"
        style={{ 
          width: '150px', 
          height: '60px',
          ...getButtonStyle('moderators')
        }}
        onClick={() => handleClick('moderators')}
      >
        <h2 className="text-lg font-black mb-1">Moderators</h2>
      </button>
    </div>
  );
};

export default Dashboard;
