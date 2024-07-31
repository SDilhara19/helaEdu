import React from 'react'
import FriendProfileList from './FriendProfileList'

const CurrentFriends = () => {
  const friends = [{"name":"Sanduni Dilhara","score":1700,"grade":"Grade 10","image":"Sanduni"},{"name":"Pathumi Perera","score":1600,"grade":"Grade 9","image":"Pathumi"},{"name":"Nirmal Silva","score":1800,"grade":"Grade 11","image":"Nirmal"},{"name":"Amaya Fernando","score":1500,"grade":"Grade 8","image":"Amaya"},{"name":"Kavindi Wijesinghe","score":1750,"grade":"Grade 10","image":"Kavindi"},{"name":"Lakshan Perera","score":1650,"grade":"Grade 9","image":"Lakshan"},{"name":"Dilanka Jayawardena","score":1550,"grade":"Grade 8","image":"Dilanka"},{"name":"Nadeesha Senanayake","score":1450,"grade":"Grade 7","image":"Nadeesha"},{"name":"Isuru Gunaratne","score":1400,"grade":"Grade 6","image":"Isuru"},{"name":"Harsha Ratnayake","score":1300,"grade":"Grade 5","image":"Harsha"},{"name":"Ravindu de Silva","score":1250,"grade":"Grade 4","image":"Ravindu"}]

  return (
    <div className='shadow-lg overflow-y-scroll'>
    
      <div className='grid grid-cols-4 m-8 p-8 gap-3 overflow-y-auto h-3/4'>
      {friends.map((friend, index)=>
      (
        <FriendProfileList key={index} name={friend.name} grade={friend.grade} score={friend.score}/>
      ))
      }

      </div>
    </div>
  )
}

export default CurrentFriends