import React from 'react'
import ReputationG from '@components/reputation/ReputationG'
import VotesG from '@components/reputation/VotesG'
import BronzeBadge from '@assets/icons/bronzeBadge.svg'
import SilverBadge from '@assets/icons/silverBadge.svg'
import GoldBadge from '@assets/icons/goldBadge.svg'
export default function ActivityList() {
  return (
    <div className='mx-10 mt-10'>
        <div className='flex justify-start '>
        <div  className='w-1/2 mx-10'>
            <div className='flex justify-between'>
                <p className='my-5'>Reputations</p>
                <p className='text-right text-blue  px-10 text-xl py-3 my-5 cursor-pointer'>See more</p>
            </div>
            <div className='rounded-xl shadow-xl  h-96 my-5 px-4 '>
                <ReputationG/>
             
            </div>
        </div>
        <div  className='w-1/2 mx-10'>
            <div className='flex justify-between'>
                <p className='my-5'>Votes</p>
                <p className='text-right text-blue  px-10 text-xl py-3 my-5 cursor-pointer'>See more</p>
            </div>
           
            <div className='rounded-xl shadow-xl  h-96 my-5 px-4  '>
                <VotesG/>
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
               <div className='flex justify-end'> <p className='text-blue text-lg cursor-pointer'>See more </p></div>
            </div>
        </div>
        <div className='w-1/2 mx-10'>
            <p className='my-5'>Replies</p>
            <div className='rounded-xl shadow-xl  h-52 my-5 '>
               <p className='text-center text-xl' >No replies yet</p>
            </div>
        </div>

      </div>
      <div  className='w-full mx-10'>
            <p className='my-5'>Badges</p>
            <div className='flex justify-start '>
                <div className='rounded-xl w-1/3 h-56 shadow-xl  mx-7 '>
                    <div className='flex justify-center items-center my-9 '>
                        <img src={BronzeBadge} className='w-20 h-20 ' /><br></br>
                       
                    </div>
                    <p className='text-center'>You don't have a gold badge yet. </p>
                </div>
                <div className='rounded-xl w-1/3 h-56 shadow-xl  mx-7'>
                    <div className='flex justify-center items-center my-9'>
                        <img src={SilverBadge} className='w-20 h-20 ' />
                    </div>
                    <p className='text-center'>You have 3 silver badges</p>
                </div>
                <div className='rounded-xl w-1/3 h-56 shadow-xl mx-7'>
                    <div className=' flex justify-center items-center my-9 '>
                        <img src={GoldBadge} className='w-20 h-20 ' />
                    </div>
                    <p className='text-center'>You have 2 bronze badges</p>
                </div>
            </div>
      </div>
    </div>
  )
}
