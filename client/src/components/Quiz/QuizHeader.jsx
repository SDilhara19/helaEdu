import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@assets/icons/hela-edu-black-text2.svg";
import { useNavigate } from 'react-router-dom';


const QuizHeader = () => {

  const navigator = useNavigate()

  const handleIconClick = (path) => {
    navigator(`/${path}`)
  }

    return (
        <div className='flex justify-between px-10 shadow-sm bg-white items-center'>
            <img className='hover:cursor-pointer' src={logo} alt="" onClick={() => handleIconClick('quiz')}/>
            <div className="s-topic mx-auto text-center ">
                    Weekly Brain Teaser
                </div>
            <div className="flex">
                <div className="icon-circle text-white bg-black hover:text-black hover:bg-white hover:border" >
                    <FontAwesomeIcon icon={faTrophy} size="3x" onClick={() => handleIconClick('leaderboard/1')} />
                </div>
                <div className="icon-circle text-white bg-black hover:text-black hover:bg-white hover:border">
                    <FontAwesomeIcon icon={faUser} size="3x" onClick={() => handleIconClick('sProfile')} />
                </div>
            </div>
        </div>
    )
}

export default QuizHeader