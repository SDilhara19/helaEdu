import React from 'react'

export default function TableRowHeaderReviewed() {
  return (
    <div className='bg-blue text-white rounded-3xl  mx-auto my-4 px-7 py-4'>
        <div className='flex justify-between items-center'>
        
            <div className='w-1/4 text-left'>
                <p className='text-2xl'>Name</p>
            </div>
            
            <div className='w-1/4 text-left'>
                <p className='text-2xl'>Email</p>
            </div>
            <div className='w-1/4   text-left '>
                <p className='text-2xl'>Total Score</p>
            </div>
            
            <div className='flex justify-center w-1/4 text-left'>
                <p className='text-2xl'>Actions</p>
            </div>
        
        </div>
  </div>
 
  )
}
