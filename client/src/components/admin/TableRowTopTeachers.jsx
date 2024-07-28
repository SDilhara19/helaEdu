import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function TableRowTopTeachers({ teacherId, firstName, email,contactNo,subjects }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='flex justify-center my-4'>
        {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            
            <p className="py-4 text-3xl">Are you sure you want to approve this teacher?</p>
            <div className="modal-action">
              <button className="btn bg-red-400 text-black" onClick={closeModal}>Cancel</button>
              <button className="btn bg-yellow text-black" onClick={() => {
                // Add approve logic here
                closeModal();
              }}>Approve</button>
            </div>
          </div>
        </dialog>
      )}
      <div className='border border-blue rounded-3xl w-10/12 h-16 px-7 py-4 flex justify-between items-center'>
        <div><p className='text-xl'>{teacherId}</p></div>
        <div><p className='text-xl'>{firstName}</p></div>
        <div><p className='text-xl'>{email}</p></div>
        <div><p className='text-xl'>{contactNo}</p></div>
        <div><p className='text-xl'>{subjects}</p></div>
        <div className='flex items-center'>
          <div className='mx-1'>
            <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          </div>
          <div className='mx-1'>
            <div className='rounded-3xl bg-yellow px-2 hover:translate-x-1 cursor-pointer' onClick={openModal}>
              <p className='text-xl py-2'>Upgrade as Moderator</p>
            </div>
          </div>
          <div className='mx-1'>
            <div className='rounded-3xl bg-red-500 px-2 hover:translate-x-1 cursor-pointer'  >
              <p className='text-xl py-2'>Decline</p>
            </div>
          </div>
        </div>
      </div>

      

       
    </div>
  );
}
