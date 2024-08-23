import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSearch , faTrash } from '@fortawesome/free-solid-svg-icons';
import Profile from '@assets/img/articles/profile.jpg';
import { deleteStudents } from '@services/StudentService';

export default function TableRowStudents({ userId, firstName,lastName, email ,profileRef}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    try {
      await deleteStudents( userId);
      window.location.reload();
      
    } catch (error) {
      console.error("Error deleting students:", error);
    
    }
  };
  return (

    <div className='flex justify-center   my-4'>
      <div className=' border border-blue rounded-3xl w-9/12 h-16 px-7 py-4 flex justify-between items-center'>
          {profileRef ?(
              <img src={profileRef} className='w-12 h-12 rounded-full'/>
          ):(
              <img src={Profile} className='w-12 h-12 rounded-full'/>
          )}
        {/* <div className='flex-1 text-left'><p className='text-xl text-left'>{teacherId}</p></div> */}
        <div className='flex-1 text-left'><p className='text-xl text-left'>{firstName} {lastName}</p></div>
        <div className='flex-1 text-left'><p className='text-xl text-left'>{email}</p></div>
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
                <p className="py-4 text-3xl">Are you sure you want to delete this student?</p>
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
