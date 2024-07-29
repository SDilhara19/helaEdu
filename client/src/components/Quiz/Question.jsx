import React from 'react'
import Question_progress from './Question_progress'

const formatTime = (time) => {
    const seconds = Math.floor(time/100)
    const miniseconds = time % 100;
    return `${seconds}: ${miniseconds < 10 ? '0': ''}${miniseconds}`
}

const Question = ({ question_no, question, questionTime, timer, questionLength }) => {
    const progress = ((questionTime - timer) / questionTime) * 100;
    return (
        <div className='my-20 h-80 bg-blue border relative'>

            <div className='h-auto mx-12 my-8 flex items-center'>
                <div className='text-white text-header3'> {`${question_no}).`} </div>
                <div>
                    <p className='text-header4 text-white ml-4'>{question}</p>
                </div>
                <div>


                </div>
            </div>
            <div className='-mt-12 mx-auto min-h-32 w-32'>
                {/* <div className='p-2 h-40 w-40 rounded-full border-8 border-solid bg-blue border-yellow absolute -bottom-16 right-12'>

                </div> */}
                <div
                    className="radial-progress bg-blue text-yellow border-blue border-4  absolute -bottom-16 right-12"
                    style={{ "--value": progress, "--size": "10rem", "--thickness": "1.2rem" }}
                    role="progressbar">
                    {/* {timer} */}
                    {formatTime(timer)}
                </div>
            </div>

            <div className='absolute bottom-6 left-12'>
                <Question_progress noOfQuestions={questionLength} currentQuestion={question_no}/>
            </div>
        </div>
    )
}

export default Question

