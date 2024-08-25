import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
export default function ReviewedTableRow({ name,email,score }) {
  return (
    <div>
      <div>
     
     <div className='border border-blue rounded-3xl  mx-auto my-4 px-7 py-4'>
       <div className='flex justify-between items-center'>
        
         <div className='w-1/4 text-left '>
           <p className='text-2xl'>{name}</p>
         </div>        
         <div className='w-1/4 text-left  '>
           <p className='text-2xl'>{email}</p>
         </div>
         <div className='w-1/4 text-left '>
           <p className='text-2xl'>{score}</p>
         </div>
        
         <div className=' w-1/4 flex justify-center'>
           
          <button className='bg-blue text-white text-xl rounded-xl px-4 py-1'>Reviewed</button>
           <FontAwesomeIcon icon={faSearch} className='text-2xl m-2 hover:text-yellow hover:translate-x-1' />
          
         </div>
       </div>
     </div>
  
   </div>
    </div>
  )
}
