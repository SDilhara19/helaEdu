import React from 'react'
import LeaderBoardTable from './LeaderBoardTable'
import Top3 from './Top3'


const LeaderboardMain = () => {
  return (
    <div className='w-9/12 mx-auto mt-14'>
    <div className='w-52 border-b-4 border-yellow'>
      <h1>Leaderboard</h1>
    </div>
    <Top3/>
    <LeaderBoardTable/>
  </div>
  )
}

export default LeaderboardMain