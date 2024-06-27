import React from 'react';
import ArticleCard from '@components/articles/ArticleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function ArticleCards() {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl font-bold text-black'>Articles</h1>
      <hr className='my-4 border-yellow leading-8' />
      <div className='flex justify-end items-center m-20'>
      
        <div className='flex space-x-4 text-sm'>
            <span className='text-gray text-3xl'>Sort By</span>
            <button className='text-3xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              All
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Date
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Grade  <FontAwesomeIcon icon={faChevronDown} className="text-blue text-lg size-7" />
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Subject  <FontAwesomeIcon icon={faChevronDown} className="text-blue text-lg size-7" />
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Tags  <FontAwesomeIcon icon={faChevronDown} className="text-blue text-lg size-7" />
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
    
    
  
 

</div>
    
  );
}
