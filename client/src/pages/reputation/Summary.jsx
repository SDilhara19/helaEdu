import React from 'react'
import { Footer, Header } from '@components/common'
import ActivityBar from '@components/reputation/ActivityBar'
import Summaries from '@components/reputation/Summary'
import ActivityList from '@components/reputation/ActivityList'
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
            <Summaries/>
            <ActivityList/>
          </div>
        </div>
      </div>
      <Footer/>
            
    </>
    
  )
}
