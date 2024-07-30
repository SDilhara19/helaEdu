import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Sort() {
  const [startDate, setStartDate] = useState(null);
  const grades = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Grade 13'];

  return (
    <div className='flex justify-center items-center mb-10'>
      <div className='flex space-x-4 text-sm'>
        <button className='text-xl px-10 py-3 rounded-sm border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors'>
          All
        </button>
        <div className='relative'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <button className='text-xl px-10 py-3 rounded-sm border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors'>
                Published Date <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2" />
              </button>
            }
          />
        </div>
        <div className='dropdown dropdown-end'>
          <button
            tabIndex={0}
            className='text-xl px-10 py-3 rounded-sm border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors flex items-center'
          >
            Grade <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2" />
          </button>
          <ul tabIndex={0} className='dropdown-content menu p-1 shadow rounded-box w-52 text-sm'>
            {grades.map((grade, index) => (
              <li key={index} className='z-10'>
                <button className='text-xl w-full text-left px-4 py-2 hover:bg-gray-100 z-10'>{grade}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='dropdown dropdown-end'>
          <button
            tabIndex={0}
            className='text-xl px-10 py-3 rounded-sm border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors flex items-center'
          >
            Subject <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2 z-50" />
          </button>
          <ul tabIndex={0} className='dropdown-content menu p-1 shadow rounded-box w-52 text-sm  z-50'>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Mathamatics</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Science</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>History</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>English</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Sinhala</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Biology</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Art</button></li>
          </ul>
        </div>
        <div className='dropdown dropdown-end'>
          <button
            tabIndex={0}
            className='text-xl px-10 py-3 rounded-sm border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors flex items-center'
          >
            Tags <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2" />
          </button>
          <ul tabIndex={0} className='dropdown-content menu p-1 shadow rounded-box w-52 z-10'>
            <li><button className='w-full text-center px-4 py-2 hover:bg-gray-100 text-xl'>Tag 1</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Tag 2</button></li>
            <li><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Tag 3</button></li>
          </ul>
        </div>
        <button className='text-xl bg-black px-10 py-3 rounded-sm border border-gray1 text-white hover:bg-blue hover:text-white transition-colors'>
          Reset
        </button>
      </div>
    </div>
  );
}
