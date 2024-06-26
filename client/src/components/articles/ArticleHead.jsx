import React from 'react';
import ArticleCard from '@components/articles/ArticleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
export default function ArticleCards() {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl font-bold text-black'>Articles</h1>
      <hr className='my-4 border-yellow leading-8' />
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
    
    {/* article cards */}
    <div className='flex justify-evenly m-20'>
        <ArticleCard />
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
    </div>
    
    <div className='items-center flex justify-center'>
        <button className="px-7 py-2 bg-white border-blue hover:bg-yellow hover:border-yellow-500 rounded-xl">
            Add your articles <FontAwesomeIcon icon={faArrowDown} className="text-blue-500 text-lg" />
        </button>
</div>


</div>
    
  );
}
