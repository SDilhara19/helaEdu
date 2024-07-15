import React from 'react'
import Question_progress from './Question_progress'


const Question = ({ counter }) => {
    return (
        <div className='my-20 h-80 bg-blue border relative'>
           
            <div className='h-auto mx-12 my-8 flex items-center'>
                <div className='text-white text-header3'>Q3</div>
                <div>
                    <p className='text-header4 text-white ml-4'>What is the main reason for the seasons on Earth?</p>
                </div>
                <div>


                </div>
            </div>
            <div className='-mt-12 mx-auto min-h-32 w-32'>
                {/* <div className='p-2 h-40 w-40 rounded-full border-8 border-solid bg-blue border-yellow absolute -bottom-16 right-12'>

                </div> */}
<div
  className="radial-progress bg-blue text-yellow border-blue border-4  absolute -bottom-16 right-12"
  style={{ "--value": "70", "--size": "10rem", "--thickness": "1.2rem" }}
  role="progressbar">
  1m: 23s
</div>
            </div>

            <div className='absolute bottom-6 left-12'>
                <Question_progress/>
            </div>
        </div>
    )
}

export default Question

