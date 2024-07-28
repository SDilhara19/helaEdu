import React from 'react';

const CountBox = ({ title, value, change, changeType, icon, bgColor }) => {
  return (
    <div className={`bg-white shadow-xl p-4 rounded-lg text-center flex flex-col justify-center w-1/4 ${bgColor}`}>
      <div className={`flex justify-center items-center w-12 h-12 mb-4 rounded-full ${bgColor}`}>
        {icon}
      </div>
      <h2 className="text-2xl mb-2 text-gray-700">{title}</h2>
      <div className="text-4xl font-bold text-gray-900">{value}</div>
      <div className={`text-lg mt-2 ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
        {change} {changeType === 'increase' ? '▲' : '▼'}
      </div>
    </div>
  );
};

export default CountBox;
