import React from 'react'
import Question_progress from './Question_progress'


const Question = ({ counter }) => {
    return (
        <div className='my-20 h-80 bg-blue border relative'>
            <div className='-mt-12 mx-auto min-h-32 w-32'>
                <div className='p-2 h-32 w-32 rounded-full border-4 border-solid bg-blue border-yellow'>

                </div>
            </div>

            <div className='h-auto mx-12 my-8 flex items-center'>
                <div className='text-white text-header3'>Q3</div>
                <div>
                    <p className='text-header4 text-white ml-4'>What is the main reason for the seasons on Earth?</p>
                </div>
                <div>


                </div>
            </div>
            <div className='absolute bottom-6 left-12'>
                <Question_progress/>
            </div>
        </div>
    )
}

export default Question

