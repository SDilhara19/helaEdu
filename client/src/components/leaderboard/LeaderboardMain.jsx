import React from 'react'
import LeaderBoardTable from './LeaderBoardTable'
import LeaderboardSidebar from '../leaderboard/LeaderboardSidebar'
import Top3 from '@components/Quiz/Top3'
import background from '@assets/img/leaderboard-bg.svg'

const LeaderboardMain = () => {
  return (
    <>
      <div className='w-full h-full absolute' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex mx-32 my-8'>
          <div>
            <div>
              <h1 className='xs-topic text-white'>Leaderboard</h1>
            </div>
            <div>

            </div>
          </div>
        </div>

        {/* {/* <LeaderboardSidebar />
      <div className='w-9/12 mx-auto mt-14'>
        <div className='w-52 border-b-4 border-yellow'>
          <h1>Leaderboard</h1>
        </div>
        {/* <Top3/> */}
        {/* <Top3 /> */}
        {/* <LeaderBoardTable />  */}


        {/* </div>  */}
      </div>
    </>
  )
}

export default LeaderboardMain