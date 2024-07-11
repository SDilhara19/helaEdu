import React from 'react';

const SeeMoreBtn = () => {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center mt-10">
      <div className="flex justify-end w-2/6">
        {buttons.map((number) => (
          <button
            key={number}
            className="bg-white text-blue-500 text-3xl w-16 h-16 flex items-center justify-center rounded-full mx-2 border border-blue-500 hover:bg-blue-100"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeeMoreBtn;
