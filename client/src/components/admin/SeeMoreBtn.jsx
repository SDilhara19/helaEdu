import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SeeMoreBtn = () => {
  const [selected, setSelected] = useState(null);
  const buttons = [1, 2, 3, 4, 5];

  const handleClick = (number) => {
    setSelected(number);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center">
        {/* Previous Button */}
        <button
          className="bg-blue-500 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full mx-2 border border-blue-500 hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Number Buttons */}
        <div className="flex justify-end">
          {buttons.map((number) => (
            <button
              key={number}
              onClick={() => handleClick(number)}
              className={`text-3xl w-16 h-16 flex items-center justify-center rounded-full mx-2 border ${
                selected === number ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-500 border-blue-500'
              } hover:bg-blue-100`}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="bg-blue-500 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full mx-2 border border-blue-500 hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SeeMoreBtn;
