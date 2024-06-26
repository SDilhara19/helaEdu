import React from 'react';

export default function ArticleCards() {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-2xl font-bold text-black'>Articles</h1>
      <hr className='my-4 border-gray-300' />
      <div className='flex justify-end items-center m-20'>
        {/* <div className='flex  space-x-4'>
          <span className='text-gray-600'>Sort By</span>
        </div> */}
        <div className='flex space-x-4 text-sm'>
            <span className='text-gray text-3xl'>Sort By</span>
            <button className='text-3xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              All
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Date
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Grade
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Subject
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Tags
            </button>
        </div>
    </div>
</div>
    
  );
}
