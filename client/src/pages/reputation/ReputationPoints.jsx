import React from 'react'
import { Footer, Header } from '@components/common'
import ActivityBar from '@components/teacher_com/ActivityBar'
export default function ReputationPoints() {
  return (
    
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <ActivityBar />
          </div>
          <div className="content-wrapper mx-32">
            <h1 className='my-10'>Summary</h1>
            <div className='flex justify-start'>
                <div className='rounded-xl border border-blue p-10 w-128 h-72 mx-8'>
                    <p>Reputation Points</p>
                </div>
                <div className='rounded-xl border border-blue p-10 w-128 h-72 mx-8'>
                    <p>Badges</p>
                </div>
                <div className='rounded-xl border border-blue p-10 w-80 h-72 mx-8'>
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
