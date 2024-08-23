import React from 'react'

export default function TableRowHeader() {
  return (
    <div className='bg-blue text-white rounded-3xl w-10/12 mx-auto my-4 px-7 py-4'>
        <div className='flex justify-between items-center'>
        
          <div className='w-2/12 text-left'>
            <p className='text-2xl'>Title</p>
          </div>
         
          <div className='w-4/12 text-left'>
            <p className='text-2xl'>Instruction</p>
          </div>
          <div className='w-2/12 flex justify-start text-left ml-16'>
            <p className='text-2xl'>Published Date</p>
          </div>
          <div className='w-1/12 text-left'>
            <p className='text-2xl'>Total Time</p>
          </div>
          <div className='flex justify-center w-3/12 text-left'>
            <p className='text-2xl'>Actions</p>
          </div>
         
        </div>
      </div>
     
   
  )
}
