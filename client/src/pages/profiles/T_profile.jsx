
import { Footer } from '@components/common'
import Header from '@components/teacher_com/Header'
import ProfileHero from '@components/teacher_com/ProfileHero'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil} from '@fortawesome/free-solid-svg-icons'
export default function T_profile() {
  return (
    <div>
      <Header/>
      <ProfileHero />
    <div className='flex justify-between  mr-32 ml-32 mt-32 '>
        <div className='w-1/2   mr-12 mt-12 shadow-xl p-12'>
            <h2 className='text-3xl text-blue mb-3'>About me:</h2><br></br>
            <p className='text-2xl mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has .</p>
            <div>
                <p className='text-2xl m-4'><span className='text-blue'>Email </span>    :     kevin1000@gmail.com</p>
                <p className='text-2xl m-4'><span className='text-blue'>Contact No</span>    :      +94712323234</p>
                <p className='text-2xl m-4'><span className='text-blue'>Working Institute /School</span> : H/Tangalle B.v</p>
                <p className='text-2xl m-4'><span className='text-blue'>Teaching Subject</span>   :      Science</p>
            </div>
            <div className='flex justify-end'>
            <div className='flex items-center justify-center rounded-full w-20 h-20 bg-yellow'>
                <FontAwesomeIcon icon={faPencil} className='size-8' />
            </div>
            </div>
        </div>
        <div className='w-1/2 grid grid-cols-2 gap-8 mt-12'>
          <div className='shadow-xl  rounded-lg w-full h-56 flex items-center justify-center text-xl font-semibold'>
            20 Articles
          </div>
          <div className='shadow-xl rounded-lg w-full h-56 flex items-center justify-center text-xl font-semibold'>
            20 Articles
          </div>
          <div className='shadow-xl   rounded-lg w-full h-56 flex items-center justify-center text-xl font-semibold'>
            20 Assignments
          </div>
          <div className='shadow-xl rounded-lg w-full h-56 flex items-center justify-center text-xl font-semibold'>
            20 Assignments
          </div>
        </div>
    </div>
    <div className='mx-36 my-5'>
        <button className='bg-yellow w-96 h-20 rounded-xl text-3xl '>Create your group</button>
    </div>
    <Footer />
    </div>
  )
}
