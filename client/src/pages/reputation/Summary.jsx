import React from 'react'
import { Footer, Header } from '@components/common'
import ActivityBar from '@components/teacher_com/ActivityBar'
export default function Summary() {
  return (
    
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <ActivityBar />
          </div>
          <div className="content-wrapper mx-36">
            <h1 className='my-10 mx-10'>Summary</h1>
            <div className='flex justify-start'>
               
                <div className='rounded-xl shadow-2xl p-3 w-128 h-96 mx-14'>
                    <div className='rounded-full p-7 w-7 h-10 bg-blue'></div>
                    <p className='text-center  px-10 text-2xl'>Your Total Reputation Points</p>
                    <p className='text-center text-blue px-10 py-8 text-6xl'>1200</p>
                    <span className=' text-2xl my-2 '>Reputation is how the community thanks you.</span><br></br>
                    <span className=' text-xl '>When users upvote your helpful posts, you'll earn reputation and unlock new privileges.</span>
                </div>
               
                <div className='rounded-xl shadow-2xl p-3 w-128 h-96 mx-14'>
                    <div className='rounded-full p-7 w-7 h-10 bg-blue'></div>
                    <p className='text-center  px-10 text-2xl py-3'>Badges</p>
                     <div className='rounded-xl bg-blue2  h-12 mx-4 my-3 relative'>
                        <div className='rounded-full p-4 w-3 h-3 bg-blue left-2 right-2'></div>
                     </div>
                     <div className='rounded-xl bg-blue2  h-12 mx-4 my-3'></div>
                     <div className='rounded-xl bg-blue2  h-12 mx-4 my-3'></div>
                    
                </div>
                <div className='rounded-xl shadow-2xl p-10 w-96 h-96 mx-8'>
                    <p>Measure your impact
                    Your posts and helpful actions here help hundreds or thousands of people searching for help</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
            
    </>
    
  )
}
