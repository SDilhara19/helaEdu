import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function ArticleHead() {
  const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];

  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl font-bold '>Review Quizes</h1>
      <hr className='my-4 border-yellow leading-8' />
      <div className='flex justify-end items-center m-20'>
        <div className='flex space-x-4 text-sm'>
          <span className='text-gray text-3xl'>Sort By</span>
          <button className='text-xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
            All
          </button>
          <button className='text-xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
            Date
          </button>
          <div className='dropdown dropdown-end'>
            <button tabIndex={0} className='text-xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors flex items-center'>
              Grade <FontAwesomeIcon icon={faChevronDown} className="text-blue text-sm ml-2" />
            </button>
            <ul tabIndex={0} className='dropdown-content menu p-1 shadow bg-white rounded-box w-52 text-sm'>
              {grades.map((grade, index) => (
                <li  key={index} className='z-10'>
                  <button className='text-xl w-full text-left px-4 py-2 hover:bg-gray-100 z-10'>{grade}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className='dropdown dropdown-end'>
            <button tabIndex={0} className='text-xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors flex items-center'>
              Subject <FontAwesomeIcon icon={faChevronDown} className="text-blue text-sm ml-2" />
            </button>
            <ul tabIndex={0} className='dropdown-content menu p-1 shadow bg-white rounded-box w-52 text-sm z-10'>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Math</button></li>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Science</button></li>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>History</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
