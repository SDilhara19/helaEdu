import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/fontawesome-free-regular'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default function TableRaw() {
  return (
    <div>
      <div className='border border-blue rounded-3xl bg-white w-10/12 h-16 mx-48 my-4 px-7 py-4 flex justify-between '>
            <div><p className='text-2xl'>1</p></div>
            <div><p className='text-2xl'>the loreefjev efvefjfnv efef</p></div>
            <div><img></img></div>
            <div className='flex '><FontAwesomeIcon icon={faFile} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /><p className='text-2xl'>my.pdf</p></div>
            <div><p className='text-2xl'>#maths #equations</p></div>
            <div className='rounded-3xl  bg-yellow  hover:translate-x-1'><p className='text-2xl py-2'>Pending</p></div>
            <div className='flex justify-items-between '>
                <div><FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1'/></div>
                <div><FontAwesomeIcon icon={faEdit} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /></div>
                <div> <FontAwesomeIcon icon={faTrash} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /></div>
            </div>
      </div>
    </div>
  )
}
