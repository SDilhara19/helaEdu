import React from 'react'
import maths from "@assets/img/subjects/maths.png";
import science from "@assets/img/subjects/2.png";
import geography from "@assets/img/subjects/3.png";
import bussiness from "@assets/img/subjects/4.png";
import buddhism from "@assets/img/subjects/5.png";
import islam from "@assets/img/subjects/6.png";
import christian from "@assets/img/subjects/7.png";
import hinduism from "@assets/img/subjects/8.png";


const SubjectList = () => {
  return (
    <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-10'>
      <div className='flex justify-center overflow-x-auto rounded-xl p-5 px-20 bg-white-transparent shadow-lg max-w-screen-xl'>
      <div className="lg:tooltip custom-tooltip"  data-tip="Mathematics" onClick={() => handleSubjectClick('Mathematics')}>
          <div className='subject-circles' >
            <img src={maths} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Science" onClick={() => handleSubjectClick('Science')}>
          <div className='subject-circles'>
            <img src={science} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Buddhism" onClick={() => handleSubjectClick('Buddhism')}>
          <div className='subject-circles'>
            <img src={buddhism} alt="image" />
          </div>
        </div>
         <div className="lg:tooltip custom-tooltip" data-tip="B. Studies & Acc." onClick={() => handleSubjectClick('B. Studies & Acc.')}>
          <div className='subject-circles'>
            <img src={bussiness} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip"  data-tip="Mathematics" onClick={() => handleSubjectClick('Mathematics')}>
          <div className='subject-circles' >
            <img src={maths} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Science" onClick={() => handleSubjectClick('Science')}>
          <div className='subject-circles'>
            <img src={science} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Buddhism" onClick={() => handleSubjectClick('Buddhism')}>
          <div className='subject-circles'>
            <img src={buddhism} alt="image" />
          </div>
        </div> 
        <div className="lg:tooltip custom-tooltip" data-tip="B. Studies & Acc." onClick={() => handleSubjectClick('B. Studies & Acc.')}>
          <div className='subject-circles'>
            <img src={bussiness} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Buddhism" onClick={() => handleSubjectClick('Buddhism')}>
          <div className='subject-circles'>
            <img src={buddhism} alt="image" />
          </div>
        </div>
         <div className="lg:tooltip custom-tooltip" data-tip="B. Studies & Acc." onClick={() => handleSubjectClick('B. Studies & Acc.')}>
          <div className='subject-circles'>
            <img src={bussiness} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Buddhism" onClick={() => handleSubjectClick('Buddhism')}>
          <div className='subject-circles'>
            <img src={buddhism} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Hinduism" onClick={() => handleSubjectClick('Hinduism')}>
          <div className='subject-circles'>
            <img src={hinduism} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Christian" onClick={() => handleSubjectClick('Christian')}>
          <div className='subject-circles'>
            <img src={christian} alt="image" />
          </div>
        </div>
        <div className="lg:tooltip custom-tooltip" data-tip="Islam" onClick={() => handleSubjectClick('Islam')}>
          <div className='subject-circles'>
            <img src={islam} alt="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectList