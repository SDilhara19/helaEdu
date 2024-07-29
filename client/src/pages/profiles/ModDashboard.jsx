import React from 'react'
import { Header } from '@components/common'
import Sidebar from '@components/teacher_com/ModeratorSidebar'

export default function ModDashboard() {
  return (
    
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper mx-32">
            <h1 className="mx-10 my-14">Dashboard</h1>
          </div>
        </div>
      </div>
            
    </>
  )
}
