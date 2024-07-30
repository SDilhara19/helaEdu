import { Header } from '@components/common'
import CurrentFriends from '@components/Quiz/CurrentFriends'
import SerachFriends from '@components/Quiz/SerachFriends'
import React from 'react'
import background from '@assets/img/quiz-bg.svg';


const Friends = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed  h-full" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className='mx-64 mt-12 h-full border'>
        <div className='m-10 h-1/5'>
          <div className='s-topic'>Make Friends and Start Competing</div>
          <div className='n-text'>Here's the opportiunity to be ranked among your friends</div>
        </div>
        <div className='flex h-4/5 border'>
          <div className='w-4/5 border border-blue h-full'>
            <SerachFriends />
          </div>
          <div className='w-1/5 border h-full'>
            <CurrentFriends />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends