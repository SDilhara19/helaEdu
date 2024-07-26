import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/fontawesome-free-regular'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TableRaw({assignmentId, title, dueDate, instruction, noOfQuiz, totalTime}) {
  return (
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
        <div className='flex-1 text-left ml-16'>
          <p className='text-2xl'>{noOfQuiz}</p>
        </div>
        <div className='flex-1 text-left'>
          <p className='text-2xl'>{totalTime}</p>
        </div>
        <div className='flex-1 flex justify-end'>
          <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          <FontAwesomeIcon icon={faEdit} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          <FontAwesomeIcon icon={faTrash} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
        </div>
      </div>
    </div>
  )
}
