import React from 'react'
import SearchFriendItem from './SearchFriendItem'

const SearchFriends = () => {
  return (
  
    <div>
      <div className='mb-10'>
      <input type="text" placeholder='Search for Friends'className="w-full rounded-full p-3 bg-white-transparent text-gray1 n-text" />
      </div>
      <div>
        <SearchFriendItem/>
      </div>

    </div>
  )
}

export default SearchFriends