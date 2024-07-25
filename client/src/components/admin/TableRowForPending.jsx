import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function TableRowForPending({ teacherId, firstName, email, proofPdf }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

  const openDeclineModal = () => setIsDeclineModalOpen(true);
  const closeDeclineModal = () => setIsDeclineModalOpen(false);

  return (
    <div className='flex justify-center my-4'>
      <div className='border border-blue rounded-3xl w-10/12 h-16 px-7 py-4 flex justify-between items-center'>
        <div><p className='text-2xl'>{teacherId}</p></div>
        <div><p className='text-2xl'>{firstName}</p></div>
        <div><p className='text-2xl'>{email}</p></div>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faFile} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          <p className='text-2xl'>{proofPdf}</p>
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
            <div className='rounded-3xl bg-red-500 px-2 hover:translate-x-1 cursor-pointer' onClick={openDeclineModal} >
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
              <button className="btn bg-red-400 text-black" onClick={closeModal}>Cancel</button>
              <button className="btn bg-yellow text-black" onClick={() => {
                // Add approve logic here
                closeModal();
              }}>Approve</button>
            </div>
          </div>
        </dialog>
      )}

        {isDeclineModalOpen && (
                <dialog open className="modal">
                <div className="modal-box">
                    
                    <p className="py-4 text-3xl">Are you sure you want to decline this teacher?</p>
                    <br></br>
                    <input type="text" placeholder='Add your feedback' className='border border-blue w-full rounded-2xl p-5'></input>
                    <div className="modal-action">
                    <button className="btn bg-red-400 text-black" onClick={closeDeclineModal}>Cancel</button>
                    <button className="btn bg-yellow text-black" onClick={() => {
                        // Add approve logic here
                        closeDeclineModal();
                    }}>Approve</button>
                    </div>
                </div>
                </dialog>
            )}
    </div>
  );
}
