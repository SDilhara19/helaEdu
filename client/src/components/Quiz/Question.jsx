import React from 'react'

const Question = ({ counter }) => {
    return (
        <div className='my-20 h-80 bg-blue border'>
            <div className='-mt-12 mx-auto h-32 w-32'>
                <div className='p-2 h-32 w-32 rounded-full border-4 border-solid bg-blue border-yellow'>
                    <span className="countdown font-mono text-2xl">
                        <span style={{ "--value": 10 }}>3</span>:
                        <span style={{ "--value": 24 }}>5</span>:
                        <span style={{ "--value": counter }}>9</span>
                    </span>
                </div>
            </div>
            <div className='h-auto'>
                <div>
                    <p>What is the main reason for the seasons on Earth?</p>
                </div>
                <div>progress</div>
            </div>
        </div>
    )
}

export default Question