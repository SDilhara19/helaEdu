import React from 'react';

const RegenerateButton = () => {
  return (
    <div className='relative'>
      <div className='flex justify-end mx-32 mt-32'>
        <button className="min-w-44 bg-yellow min-h-14 rounded-md px-3 py-1 m-3 text-1 text-white">
          Edit
        </button>
        <button className="min-w-44 bg-red-500 min-h-14 rounded-md px-3 py-1 m-3 text-1 text-white">
          Regenerate
        </button>
      </div>
      <div className='absolute bottom-0 left-0 m-3'>
        <button className="min-w-44 bg-blue min-h-14 rounded-md px-3 py-1 m-3 text-1 text-white">
          Previous
        </button>
        <button className="min-w-44 bg-blue min-h-14 rounded-md px-3 py-1 m-3 text-1 text-white">
          Next
        </button>
      </div>
    </div>
  );
}

export default RegenerateButton;
