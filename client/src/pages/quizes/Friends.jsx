import { Header } from '@components/common'
import React from 'react'
import background from '@assets/img/quiz-bg.svg';
import SearchFriends from '@components/Quiz/SearchFriends';
import CurrentFriends from '@components/Quiz/CurrentFriends';


const Friends = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed  h-full" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className='mx-64 mt-12 '>
        <div className='m-10 h-1/5'>
          <div className='s-topic'>Make Friends and Start Competing</div>
          <div className='n-text'>Here's the opportiunity to be ranked among your Friends</div>
        </div>
        <div className='flex h-4/5 '>
          <div className='w-9/12 h-full mr-10'>
            <CurrentFriends/>
          </div>
          <div className='w-3/12 h-full ml-10'>
            <SearchFriends />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends