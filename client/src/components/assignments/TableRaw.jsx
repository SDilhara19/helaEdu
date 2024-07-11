import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/fontawesome-free-regular'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default function TableRaw({assignmentId,title,dueDate,instruction,noOfQuiz,totalTime}) {
  return (
    <div>
      <div className='border border-blue rounded-3xl  w-10/12 h-16 mx-48 my-4 px-7 py-4 flex justify-between '>
            <div><p className='text-2xl'>{assignmentId}</p></div>
            <div><p className='text-2xl'>{title}</p></div>
            <div><p className='text-2xl'>{dueDate}</p></div>
            <div ><p className='text-2xl'>{instruction}</p></div>
            <div><p className='text-2xl'>{noOfQuiz}</p></div>
            <div><p className='text-2xl '>{totalTime}</p></div>
            <div className='flex justify-items-between '>
                <div><FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1'/></div>
                <div><FontAwesomeIcon icon={faEdit} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /></div>
                <div> <FontAwesomeIcon icon={faTrash} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /></div>
            </div>
      </div>
    </div>
  )
}
