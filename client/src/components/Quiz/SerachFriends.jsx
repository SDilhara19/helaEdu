import React from 'react'
import FriendProfileList from './FriendProfileList'

const SerachFriends = () => {
  return (
    <div className=''>
        <div>
            <input type="text" className="w-full rounded-full p-3 bg-gray-transparent text-gray1 h-1/4"  />
        </div>
        <div className='grid grid-cols-4 m-8 p-8 gap-3 overflow-y-auto h-3/4'>
            <FriendProfileList />   
     
            <FriendProfileList />   
            <FriendProfileList />   
          
            <FriendProfileList />   
            <FriendProfileList />   
            <FriendProfileList />   
            <FriendProfileList />     <FriendProfileList />   
          
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />     <FriendProfileList />   
          
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />     <FriendProfileList />   
          
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />     <FriendProfileList />   
          
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />   
          <FriendProfileList />   
            <FriendProfileList />   
        </div>
    </div>
  )
}

export default SerachFriends