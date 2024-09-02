import React from 'react'
import { Header , Footer } from '@components/common'
import ActivityBar from '@components/reputation/ActivityBar'
export default function Comments() {
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
          </div>
        </div>
      </div>
      <Footer/>
            
    </>
   
  )
}
