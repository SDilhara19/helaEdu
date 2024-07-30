import React from 'react';

const Question_progress = ({ noOfQuestions, currentQuestion }) => {

  return (
    <div className='flex'>
      {Array.from({ length: noOfQuestions }, (_, index) => (
        <div key={index}className={`q_progress_block ${index < currentQuestion ? 'completed' : ''}`}>
        </div>
      ))}
    </div>
  );
}

export default Question_progress;
