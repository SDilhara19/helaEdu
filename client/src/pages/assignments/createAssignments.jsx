import { Header } from '@components/common'
import React from 'react'

export default function createAssignments() {
  return (
    <div>
      <Header/>
      <div>
        <div>
            <label>Select a group</label>
            <input></input>
            <h1>Need a new group<span> Create a Group</span></h1>
        </div>
       <div>
        <label>Title</label>
        <input></input>
        <label>Due Date(Optional)</label>
        <input></input>
       </div>
       <div>
        <label>Instructions for student</label>
        <input></input>
       </div>
       <div>
        <div>
            <label>No of questions</label>
            <input></input>
        </div>
        
        <div>
            <label>Total Time</label>
            <input></input>
        </div>
        <div>
           <Button> Create</Button>
        </div>
       </div>
      </div>
    </div>
  )
}
