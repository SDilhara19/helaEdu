import React from 'react'
import profile from "@assets/img/profile.jpg"
import cover from "@assets/img/cover2.jpeg"
export default function ProfileHero() {
  return (
    <div>
       <div className="relative">
            <div>
                <img src={cover} className="w-full h-96 object-cover" alt="Cover" />
            </div>
            <div className="absolute top-3/4 left-32 rounded-full w-60 h-60">
                <img src={profile} className="rounded-full w-full h-full object-cover" alt="Profile" />
            </div>
            <div className='absolute left-96 my-6 mx-10'>
                <h1 className='text-5xl'>M.K.P.Ahinsa</h1>
                <p className='text-3xl'>Teacher</p>
                <div className='  flex justify-start'>
                    <div className='rounded-full w-16 h-16 bg-yellow '>
                        
                    </div>
                    <div className='rounded-full w-16 h-16 bg-yellow mx-6 '>
                        
                        </div>
            </div>
            </div>
           
        </div>
       
      
    </div>
  )
}