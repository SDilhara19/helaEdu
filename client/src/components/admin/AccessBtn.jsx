import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function AccessBtn() {
  return (
    <div className="mt-5">
      <div className="flex justify-start ml-80"> {/* Adjusted ml-80 for more right */}
        <button className="px-8 py-2 bg-blue-500 text-white font-bold rounded-full focus:outline-none">
          Recently Accessed <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
