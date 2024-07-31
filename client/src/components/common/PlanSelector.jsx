import React from 'react';

export default function PlanSelector({ isYearly, togglePlan }) {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-5xl">Select Your Plan</h1>
      <div className="flex items-center mt-2 space-x-4">
        <span className="text-black text-2xl">Monthly</span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={isYearly} 
            onChange={togglePlan} 
            className="sr-only peer" 
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-black text-2xl">Yearly</span>
      </div>
    </div>
  );
}
