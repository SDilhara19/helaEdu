import React from 'react'
import profile from "@assets/img/articles/profile.jpg"
import cover from "@assets/img/articles/bannerP.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
export default function ProfileHero() {
  return (
    <div>
       <div className="relative dark:bg-black ">
            <div className='relative'>
                <img src={cover} className="w-full h-96 object-cover" alt="Cover" />
                <div className='absolute flex items-center justify-center rounded-full w-10 h-10 p-2 bottom-5  top-50 left-50 right-7 bg-yellow' >
                        <FontAwesomeIcon icon={faPencil} className='size-6' />
                    </div>
            </div>
            <div className="absolute top-3/4 left-32 rounded-full w-60 h-60">
                <div className='relative'>
                    <div className='absolute flex items-center justify-center rounded-full w-10 h-10 p-2 bottom-0  top-6 left-50 right-0 bg-yellow' >
                        <FontAwesomeIcon icon={faPencil} className='size-6' />
                    </div>
                    <img src={profile} className="rounded-full w-full h-full object-cover" alt="Profile" />
                </div>
               
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
  );
}
