import LeaderBoardTable from '@components/Quiz/LeaderBoardTable'
import LeaderboardMain from '@components/Quiz/LeaderboardMain'
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