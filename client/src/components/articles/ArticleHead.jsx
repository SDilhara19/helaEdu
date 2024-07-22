import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AddArticleBtn from './AddArticleBtn';
import { Link } from "react-router-dom";
export default function ArticleHead() {
  const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];

  return (
    <div className='mx-44 my-14'>
      <div className='flex justify-between'>
        <div>
        <h1 className='text-center text-5xl font-bold '>Articles</h1>
        </div>
        <div>
          <Link to="/addArticleForm">
            <AddArticleBtn/>
          </Link>
        </div>
      </div>
      <div className='flex justify-end items-center mt-12'>
        <div className='flex space-x-4 text-sm'>
          <span className='text-gray1 text-xl'>Sort By</span>
          <button className='text-xl px-6 py-2 rounded-lg border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors'>
            All
          </button>
          <button className='text-xl px-6 py-2 rounded-lg border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors'>
            Date
          </button>
          <div className='dropdown dropdown-end'>
            <button tabIndex={0} className='text-xl px-6 py-2 rounded-lg border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors flex items-center'>
              Grade <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2" />
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
            <button tabIndex={0} className='text-xl px-6 py-2 rounded-lg border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors flex items-center'>
              Subject <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2" />
            </button>
            <ul tabIndex={0} className='dropdown-content menu p-1 shadow bg-white rounded-box w-52 text-sm z-10'>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray text-xl'>Math</button></li>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-graytext-xl'>Science</button></li>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>History</button></li>
            </ul>
          </div>
          <div className='dropdown dropdown-end'>
            <button tabIndex={0} className='text-xl px-6 py-2 rounded-lg border border-gray1 text-gray1 hover:bg-blue hover:text-white transition-colors flex items-center'>
              Tags <FontAwesomeIcon icon={faChevronDown} className="text-gray1 text-sm ml-2" />
            </button>
            <ul tabIndex={0} className='dropdown-content menu p-1 shadow bg-white rounded-box w-52 z-10'>
              <li ><button className='w-full text-center px-4 py-2 hover:bg-gray-100 text-xl'>Tag 1</button></li>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Tag 2</button></li>
              <li ><button className='w-full text-left px-4 py-2 hover:bg-gray-100 text-xl'>Tag 3</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
