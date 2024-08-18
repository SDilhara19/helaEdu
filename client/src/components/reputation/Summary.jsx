import React from 'react'

export default function Summary() {
  return (
    <div>
      <div className='flex justify-start'>
               
               <div className='rounded-xl shadow-2xl p-3 w-128 h-96 mx-14'>
                   <div className='rounded-full p-7 w-7 h-10 bg-blue'></div>
                   <p className='text-center  px-10 text-2xl'><b>Your Total Reputation Points</b></p>
                   <p className='text-center text-blue px-10 py-8 text-6xl'>1200</p>
                   <span className=' text-2xl my-2 '>Reputation is how the community thanks you.</span><br></br>
                   <span className=' text-xl '>When users upvote your helpful posts, you'll earn reputation and unlock new privileges.</span>
               </div>
              
               <div className='rounded-xl shadow-2xl p-3 w-128 h-96 mx-14'>
                   <div className='rounded-full p-7 w-7 h-10 bg-blue'></div>
                   <p className='text-center  px-10 text-2xl py-3 '><b>Badges</b></p>
                   <div className="rounded-xl bg-blue2 h-12 mx-4 my-3 flex items-center relative">
                       <div className="rounded-full p-2 w-3 h-3 bg-orange-500 ml-4"></div>
                       <span className="ml-40 text-2xl">1</span>
                   </div>

                    <div className='rounded-xl bg-blue2 h-12 mx-4 my-3 flex items-center relative'>
                       <div className="rounded-full p-2 w-3 h-3 bg-gray-600 ml-4"></div>
                       <span className="ml-40 text-2xl">4</span>
                    </div>
                    <div className='rounded-xl bg-blue2 h-12 mx-4 my-3 flex items-center relative'>
                       <div className="rounded-full p-2 w-3 h-3 bg-orange-900 ml-4"></div>
                       <span className="ml-40 text-2xl">2</span>
                    </div>
                    <div className='flex justify-end'>
                       <p className='text-2xl'>Next Badge</p>
                       <div className='rounded-xl bg-black px-3 py-2 flex justify-between mx-5'>
                           <div className="rounded-full p-2 w-3 h-3 bg-orange-900 ml-4 mt-2"></div>
                           <span className="ml-5 text-xl text-white ">Top Contributor</span>
                       </div>
                    </div>
                   
               </div>
               <div className='rounded-xl shadow-2xl p-10 w-96 h-96 mx-8'>
                   <p>Measure your impact
                   Your posts and helpful actions here help hundreds or thousands of people searching for help</p>
               </div>
           </div>
    </div>
  )
}
