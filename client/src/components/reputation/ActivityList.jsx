import React from 'react'

export default function ActivityList() {
  return (
    <div className='mx-10 mt-10'>
        <div className='flex justify-start '>
        <div  className='w-1/2 mx-10'>
            <p className='my-5'>Reputations</p>
            <div className='rounded-xl shadow-xl  h-52 my-5  '>
                <p className='text-center'>You have no recent reputation changes.</p>
            </div>
        </div>
        <div  className='w-1/2 mx-10'>
            <p className='my-5'>Votes</p>
            <div className='rounded-xl shadow-xl  h-52 my-5 '>
                <p className='text-center'>You have not cast any votes</p>
            </div>
        </div>

      </div>

      <div className='flex justify-start '>
        <div className='w-1/2 mx-10'>
            <p className='my-5'>Comments</p>
            <div className='rounded-xl  shadow-xl h-52 my-5 px-5 py-3  '>
                <div className='flex justify-start '>
                    <div className='rounded-lg bg-blue w-12 h-8 p-2 text-white '> +10</div>
                    <div className='mx-4 p-2'>This article is amazing</div>
                </div>
                <div className='flex justify-start '>
                    <div className='rounded-lg bg-blue w-12 h-8 p-2 text-white '> +10</div>
                    <div className='mx-4 p-2'>What are the main componennts of this system?describe more</div>
                </div>
                <div className='flex justify-start '>
                    <div className='rounded-lg bg-blue w-12 h-8 p-2 text-white '> +10</div>
                    <div className='mx-4 p-2'>I gain more valuable insights from this</div>
                </div>
                <div className='flex justify-start '>
                    <div className='rounded-lg bg-blue w-12 h-8 p-2 text-white '> +10</div>
                    <div className='mx-4 p-2'>This content has so many valuable things</div>
                </div>
               <div className='flex justify-end'> <p className='text-blue text-lg'>See more </p></div>
            </div>
        </div>
        <div className='w-1/2 mx-10'>
            <p className='my-5'>Replies</p>
            <div className='rounded-xl shadow-xl  h-52 my-5 '></div>
        </div>

      </div>
    </div>
  )
}
