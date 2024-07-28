import React from 'react'

const ScoreTable = () => {
  return (
    <div className='h-auto p-5 m-10 rounded-xl bg-white-transparent'>
      <div className="overflow-x-auto">
        <div className='s-topic text-blue text-center leading-tight'>GodRexer </div>
        <div className='text-center text-gray1 s-text mt-0'>Grade 10</div>
        <table className="table special-text leading-tight">
          <tbody>
            {/* row 1 */}
            <tr className='border-none'>
              <td className=''>Total Score</td>
              <td className='text-right'>1690</td>
            </tr>
            <tr className='border-none'>
              <td className=''>Current Rank</td>
              <td className='text-right s-topic text-blue'>12</td>
            </tr>
            <tr className='border-none'>
              <td className=''>Current Streak</td>
              <td className='text-right'>5</td>
            </tr>
            <tr className='border-none'>
              <td className=''>Best Time</td>
              <td className='text-right'>12:23 s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScoreTable