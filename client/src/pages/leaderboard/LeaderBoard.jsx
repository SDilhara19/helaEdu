import LeaderBoardTable from '@components/leaderboard/LeaderBoardTable'
import LeaderboardMain from '@components/leaderboard/LeaderboardMain'
import Top3 from '@components/Quiz/Top3'
import { Header } from '@components/common'
import React from 'react'

const LeaderBoard = () => {
  return (
   <div>
    <Header/>
    <LeaderboardMain/>
   </div>
  )
}

export default LeaderBoard