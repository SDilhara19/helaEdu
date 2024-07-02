import React from 'react'
import maths from "@assets/img/subjects/maths.png";
import science from "@assets/img/subjects/2.png";
import geography from "@assets/img/subjects/3.png";
import bussiness from "@assets/img/subjects/4.png";
import buddhism from "@assets/img/subjects/5.png";
import islam from "@assets/img/subjects/6.png";
import christian from "@assets/img/subjects/7.png";
import hinduism from "@assets/img/subjects/8.png";


const Subjects = () => {
  return (
    <div className='w-9/12 m-auto my-20'>
      <h1 className='font-medium p-8'>Choose your subject</h1>
      <div className='grid grid-cols-6 gap-12'>
      <div className='subject-cards '>
        <img src={maths} alt="image"/>
        <div className='text-1'>Mathematics</div>
      </div>
      <div className='subject-cards '>
        <img src={science} alt="image"/>
        <div className='text-1'>Science</div>
      </div>
      <div className='subject-cards '>
        <img src={geography} alt="image"/>
        <div className='text-1'>Geograpgy</div>
      </div>
      <div className='subject-cards '>
        <img src={bussiness} alt="image"/>
        <div className='text-1'>B. Studies & Acc.</div>
      </div>
      <div className='subject-cards '>
        <img src={buddhism} alt="image"/>
        <div className='text-1'>Buddhism</div>
      </div>
      <div className='subject-cards '>
        <img src={hinduism} alt="image"/>
        <div className='text-1'>Hinduism</div>
      </div>
      <div className='subject-cards '>
        <img src={christian} alt="image"/>
        <div className='text-1'>Christian</div>
      </div>
      <div className='subject-cards '>
        <img src={islam} alt="image"/>
        <div className='text-1'>Islam</div>
      </div>
      </div>
      <div className='flex justify-center my-12'>
      <button className='bg-black text-white rounded-full font-normal text-1 px-60 py-4 mx-auto'>Enroll in more subjects</button>   
      </div>
    </div>
  )
}

export default Subjects