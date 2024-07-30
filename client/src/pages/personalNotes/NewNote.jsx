import { Header } from '@components/common'
import CreateNote from '@components/notes/CreateNote'
import React from 'react'

const NewNote = () => {
  return (
    <div>
        <Header/>
        <CreateNote />
    </div>
  )
}

export default NewNote