import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch ,faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteTeachers } from '@services/TeacherService';
export default function TableRowTeachers({userId, firstName,lastName, email }) {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    try {
      await deleteTeachers( userId);
      window.location.reload();
      
    } catch (error) {
      console.error("Error deleting students:", error);
    
    }
  };
  return (
    <div className='flex justify-center my-4'>
      <div className='border border-blue rounded-3xl w-10/12 h-16 px-7 py-4 flex justify-between items-center'>
        {/* <div className='text-left'><p className='text-xl text-left'>{teacherId}</p></div> */}
        <div className="bg-yellow rounded-full w-10 h-10 flex items-center justify-center mr-4">
          <span className="text-white text-lg font-bold">{firstName.charAt(0)}</span>
        </div>
        <div className='flex-1'><p className='text-xl '>{firstName} {lastName}</p></div>
        <div className='flex-1'><p className='text-xl '>{email}</p></div>
       
        <div className='flex items-center'>

          <div className='mx-1'>
            <FontAwesomeIcon icon={faTrash} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' onClick={openModal} />
            <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          </div>
          
          
        </div>
      </div>

      {isModalOpen && (
            <dialog open className="modal">
              <div className="modal-box">
                <p className="py-4 text-3xl">Are you sure you want to delete this teacher?</p>
                <div className="modal-action">
                  <button className="btn bg-red-400 text-white" onClick={closeModal}>Cancel</button>
                  <button className="btn bg-blue text-white" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </dialog>
          )}
     
    </div>
  );
}
