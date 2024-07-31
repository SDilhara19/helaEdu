import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch } from '@fortawesome/free-solid-svg-icons';
import { approveTeachers } from '@services/TeacherService';

export default function TableRowForPending({ teacherId, firstName, lastName, email, proofPdf }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeclineModal = () => setIsDeclineModalOpen(true);
  const closeDeclineModal = () => setIsDeclineModalOpen(false);

  const handleApprove = async () => {
    try {
      await approveTeachers({ email });
      window.location.reload();
      
    } catch (error) {
      console.error("Error approving teacher:", error);
    
    }
  };

  return (
    <div className='flex justify-center my-4'>
      <div className='border border-blue rounded-3xl w-10/12 h-16 px-7 py-4 flex justify-between items-center'>
        <div className="bg-yellow rounded-full w-10 h-10 flex items-center justify-center mr-4">
          <span className="text-white text-lg font-bold">{firstName.charAt(0)}</span>
        </div>
        <div className='flex-1 text-left'>
          <p className='text-xl text-left'>{firstName} {lastName}</p>
        </div>
        <div className='flex-1 text-left'>
          <p className='text-xl text-left'>{email}</p>
        </div>
        <div className="flex-1 px-2">
            <p className="text-xl">
              <a href={proofPdf } download className="text-gray1 text-sm hover:text-yellow cursor-pointer ">
                {proofPdf  ? 'Download File' : 'No File Available'}
              </a>
              </p>
          </div>

        <div className='flex items-center'>
          <div className='mx-1'>
            <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          </div>
          <div className='mx-1'>
            <div className='rounded-3xl bg-yellow px-2 hover:translate-x-1 cursor-pointer' onClick={openModal}>
              <p className='text-xl py-2'>Approve</p>
            </div>
          </div>
          <div className='mx-1'>
            <div className='rounded-3xl bg-red-500 px-2 hover:translate-x-1 cursor-pointer' onClick={openDeclineModal}>
              <p className='text-xl py-2'>Decline</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <p className="py-4 text-3xl">Are you sure you want to approve this teacher?</p>
            <div className="modal-action">
              <button className="btn bg-red-400 text-white" onClick={closeModal}>Cancel</button>
              <button className="btn bg-blue text-white" onClick={handleApprove}>Approve</button>
            </div>
          </div>
        </dialog>
      )}

      {isDeclineModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <p className="py-4 text-3xl">Are you sure you want to decline this teacher?</p>
            <br />
            <input type="text" placeholder='Add your feedback' className='border border-blue w-full rounded-2xl p-5'></input>
            <div className="modal-action">
              <button className="btn bg-red-400 text-white" onClick={closeDeclineModal}>Cancel</button>
              <button className="btn bg-yellow text-white" onClick={closeDeclineModal}>Decline</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
