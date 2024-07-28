import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function TableRowTeachers({teacherId, firstName, email }) {
 

  return (
    <div className='flex justify-center my-4'>
      <div className='border border-blue rounded-3xl w-10/12 h-16 px-7 py-4 flex justify-between items-center'>
        <div className='text-left'><p className='text-xl text-left'>{teacherId}</p></div>
        <div className='text-left'><p className='text-xl text-left'>{firstName}</p></div>
        <div className='text-left'><p className='text-xl text-left'>{email}</p></div>
       
        <div className='flex items-center'>
          <div className='mx-1'>
            <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          </div>
          
          
        </div>
      </div>

     
    </div>
  );
}
