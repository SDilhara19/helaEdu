import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch } from '@fortawesome/free-solid-svg-icons';
import Profile from '@assets/img/articles/profile.jpg';

export default function TableRowStudents({ teacherId, firstName,lastName, email ,profileRef}) {
  return (
    <div className='flex justify-center my-4'>
      <div className='flex-1  border border-blue rounded-3xl w-10/12 h-16 px-7 py-4 flex justify-between items-center'>
          {profileRef ?(
              <img src={profileRef} className='w-12 h-12 rounded-full'/>
          ):(
              <img src={Profile} className='w-12 h-12 rounded-full'/>
          )}
        <div className='flex-1 text-left'><p className='text-xl text-left'>{teacherId}</p></div>
        <div className='flex-1 text-left'><p className='text-xl text-left'>{firstName} {lastName}</p></div>
        <div className='flex-1 text-left'><p className='text-xl text-left'>{email}</p></div>
        <div className='flex items-center'>
        <div className='mx-1'>
          <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
        </div>
          
          
        </div>
      </div>

     
    </div>
  );
}
