import React from 'react'

const Score = ({score}) => {
  return (
    <div>
        <div className='border'>
            <h2 className=''>Quiz Completed!</h2>
            <h4 className=''> Your Score: {score}</h4>
        </div>
    </div>
  )
}

export default Score