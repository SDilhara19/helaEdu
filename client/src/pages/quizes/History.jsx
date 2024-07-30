import React from 'react'
import { Header } from '@components/common'
import background from '@assets/img/quiz-bg.svg';
import SubjectList from '@components/leaderboard/SubjectList';
import HistoryTable from '@components/Quiz/HistoryTable';


const History = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed  h-full" style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <div className='mx-64 mt-12 h-full'>
        <div className='m-10 h-1/5'>
          <div className='s-topic'>Summary of your Quizes</div>
          <div className='n-text'>Keep up with your participation in the quizes. </div>
        </div>
        <div className=' h-4/5 '>
          
          <div className='w-full h-4/5'>
            <HistoryTable subject="Geography"/>
          </div>
          <div className='w-4/5'>
            <SubjectList />
          </div>
        </div>
      </div>
  </div>
  )
}

export default History