import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Sort() {
  return (
    <div>
      <div className='flex space-x-4 text-sm'>
            <span className='text-gray text-3xl'>Sort By</span>
            <button className='text-3xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              All
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Date
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Grade  <FontAwesomeIcon icon={faChevronDown} className="text-blue text-lg size-7" />
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Subject  <FontAwesomeIcon icon={faChevronDown} className="text-blue text-lg size-7" />
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Tags  <FontAwesomeIcon icon={faChevronDown} className="text-blue text-lg size-7" />
            </button>
        </div>     
    </div>
  )
}
