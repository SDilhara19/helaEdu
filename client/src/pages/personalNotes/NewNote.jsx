import { Header } from '@components/common'
import CreateNote from '@components/notes/CreateNote'
import React from 'react'

const NewNote = () => {
  return (
    <div>
        <Header/>
        <form>
          <input type="text" placeholder='Add your title...' className='mx-64 my-11'></input>
          <CreateNote />
          <div className='flex justify-end mb-24 mx-64'>
              <button className=' bg-blue px-7 py-2 rounded-lg text-lg text-white'>Save</button>

          </div>
         
        </form>
        
    </div>
  )
}

export default NewNote