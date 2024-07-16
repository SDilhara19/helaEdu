import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/fontawesome-free-regular'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default function TableRaw({articleId,title,imgUrl,pdfName,tags,status}) {
  return (
    <div>
      <div className='border border-blue rounded-3xl  w-10/12 h-16 mx-48 my-4 px-7 py-4 flex justify-between '>
            <div><p className='text-2xl'>{articleId}</p></div>
            <div><p className='text-2xl'>{title}</p></div>
            <div><img src="{imgUrl} "></img></div>
            <div className='flex '><FontAwesomeIcon icon={faFile} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /><p className='text-2xl'>{pdfName}</p></div>
            <div><p className='text-2xl'>{tags}</p></div>
            <div className='rounded-3xl  bg-yellow  hover:translate-x-1'><p className='text-2xl py-2'>{status}</p></div>
            <div className='flex justify-items-between '>
                <div><FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1'/></div>
                <div><FontAwesomeIcon icon={faEdit} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /></div>
                <div> <FontAwesomeIcon icon={faTrash} className='text-2xl m-2 hover:text-yellow  hover:translate-x-1' /></div>
            </div>
      </div>
    </div>
  )
}
