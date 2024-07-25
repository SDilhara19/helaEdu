import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TableRaw({ assignmentId, title, dueDate, instruction, noOfQuiz, totalTime }) {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="border border-blue-500 rounded-3xl w-10/12 h-16 flex justify-between items-center" style={{ marginLeft: '150px' }}> {/* Adjust the left margin */}
        <div className="px-4"><p className="text-2xl">{assignmentId}</p></div>
        <div className="px-4"><p className="text-2xl">{title}</p></div>
        <div className="px-4"><p className="text-2xl">{dueDate}</p></div>
        <div className="px-4"><p className="text-2xl">{instruction}</p></div>
        <div className="px-4"><p className="text-2xl">{noOfQuiz}</p></div>
        <div className="px-4"><p className="text-2xl">{totalTime}</p></div>
        <div className="flex justify-around w-24">
          <div><FontAwesomeIcon icon={faSearch} className="text-2xl m-2 hover:text-yellow-500 hover:translate-x-1" /></div>
          <div><FontAwesomeIcon icon={faEdit} className="text-2xl m-2 hover:text-yellow-500 hover:translate-x-1" /></div>
          <div><FontAwesomeIcon icon={faTrash} className="text-2xl m-2 hover:text-yellow-500 hover:translate-x-1" /></div>
        </div>
      </div>
      963

    </div>
  );
}






