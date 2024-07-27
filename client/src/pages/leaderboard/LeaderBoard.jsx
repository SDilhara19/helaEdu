import LeaderBoardTable from '@components/leaderboard/LeaderBoardTable'
import { Header } from '@components/common'
import React from 'react'
import background from '@assets/img/quiz-bg.svg'
import ScoreTable from '../../components/leaderboard/ScoreTable'
import SubjectList from '@components/leaderboard/SubjectList'
import Top3 from '@components/Quiz/Top3'



const LeaderBoard = () => {
  return (
    <div className=''>
      <Header />
      <div className="relative min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${background})` }}>
        <div className='flex px-32 w-full'>
          <div className='w-full'>
            <div>
              <h1 className='xs-topic'>Leaderboard</h1>
            </div>
            <div className='flex w-full my-10'>
              <div className=' flex-1'>
                <Top3 />
                <ScoreTable />
              </div>
              <div className=' flex-1'>
                <LeaderBoardTable />
              </div>
            </div>
            <SubjectList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard