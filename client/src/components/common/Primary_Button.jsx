import React from 'react'

const Primary_Button = ({name}) => {
  return (
    <div>
        <button className='min-w-44 bg-blue min-h-14 rounded-md px-3 py-1 m-3 text-1 text-white'>{name}</button>
    </div>
  )
}

export default Primary_Button