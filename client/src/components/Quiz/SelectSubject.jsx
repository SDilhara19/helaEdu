import React, { useState } from 'react'
import maths from "@assets/img/subjects/maths.png";
import science from "@assets/img/subjects/2.png";
import geography from "@assets/img/subjects/3.png";
import bussiness from "@assets/img/subjects/4.png";
import buddhism from "@assets/img/subjects/5.png";
import islam from "@assets/img/subjects/6.png";
import christian from "@assets/img/subjects/7.png";
import hinduism from "@assets/img/subjects/8.png";
import { useNavigate } from "react-router-dom";


const StartQuiz = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const navigator = useNavigate()

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    document.getElementById('subjects_modal').close(); // Close the subjects modal
    navigator(`./${subject}`)
  };

  return (
    <>
      <div className='button-29 animate-wiggle animate-infinite animate-ease-in' onClick={() => document.getElementById('subjects_modal').showModal()}>Start Quiz!</div>
      <dialog id="subjects_modal" className="modal">
        <div className="modal-box w-11/12 max-w-7xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="s-topic text-blue text-center">Select your subject</h3>
          <div className='w-full p-2'></div>
          <div className='grid grid-cols-7 gap-12'>
            <button className="lg:tooltip custom-tooltip" data-tip="Mathematics" onClick={() => handleSubjectClick('Mathematics')}>
              <div className='subject-circles'>
                <img src={maths} alt="image" />
              </div>
            </button>
            <div className="lg:tooltip custom-tooltip" data-tip="Science" onClick={() => handleSubjectClick('Science')}>
              <div className='subject-circles'>
                <img src={science} alt="image" />
              </div>
            </div>
            <div className="lg:tooltip custom-tooltip" data-tip="Geography" onClick={() => handleSubjectClick('Geography')}>
              <div className='subject-circles'>
                <img src={geography} alt="image" />
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
      </dialog>
    </>
  )
}

export default StartQuiz