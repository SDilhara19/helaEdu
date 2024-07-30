// TableRaw.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/fontawesome-free-regular';
import SharePopup from '@components/assignments/SharePopup';
import StartPopup from '@components/assignments/StartPopup';

export default function TableRaw({ assignmentId, title, dueDate, instruction, noOfQuiz, totalTime }) {
  const [showPopup, setShowPopup] = useState(false);
  const [startPopup, setStartPopup] =useState(false);
  const handleShareClick = () => {
    setShowPopup(true);
  };
  const openStartClick=()=>{
    setStartPopup(true);
  }
  const closeStartPopup = () => {
    setStartPopup(false);
  };


  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className='border border-blue rounded-3xl w-10/12 mx-auto my-4 px-7 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex-1 text-left'>
            <p className='text-2xl'>{assignmentId}</p>
          </div>
          <div className='flex-1 text-left'>
            <p className='text-2xl'>{title}</p>
          </div>
          <div className='flex-1 text-left'>
            <p className='text-2xl'>{dueDate}</p>
          </div>
          <div className='flex-1 text-left'>
            <p className='text-2xl'>{instruction}</p>
          </div>
          <div className='text-left ml-16'>
            <p className='text-2xl'>{noOfQuiz}</p>
          </div>
          <div className='flex-1 text-left'>
            <p className='text-2xl'>{totalTime}</p>
          </div>
          <div className='flex-1 text-left'>
            <button className='bg-blue rounded-xl p-2 text-lg mx-2' onClick={openStartClick}>Start Quiz</button>
            <button className='bg-yellow rounded-xl p-2 text-lg' onClick={handleShareClick}>Share</button>
          </div>
          <div className='flex justify-end'>
            <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
            <FontAwesomeIcon icon={faEdit} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
            <FontAwesomeIcon icon={faTrash} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          </div>
        </div>
      </div>
      {showPopup && <SharePopup closePopup={closePopup} />}
      {startPopup && <StartPopup closePopup={closeStartPopup} />}
    </div>
  );
}
