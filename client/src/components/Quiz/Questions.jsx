import React, { useState, useEffect } from 'react'
import Question from './Question';
import Answer from './Answer';
import Primary_Button from '@components/common/Primary_Button';

const Questions = ({ questions,
    handleNextQuestion,
    currentQuestion,
    handleAnswerClick, timer, isLastQuestion }) => {
    const optionIds = ['A', 'B', 'C', 'D'];
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Log the current state and props whenever they change
        console.log('Current Question Index:', currentQuestion);
        console.log('Is Last Question:', isLastQuestion);
        console.log('Selected Option:', selectedOption);
    }, [currentQuestion, isLastQuestion, selectedOption]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleAnswerClick(option);
    };

    return (
        <div>
            <Question question_no={questions[currentQuestion].id} question={questions[currentQuestion].question} timer={timer} />
            <div className='w-full grid grid-flow-row grid-cols-2 mx-32'>
                {questions[currentQuestion].options.map((option, index) => (
                    <Answer key={index} option={option} id={optionIds[index]} onclick={() => handleOptionClick(option)} selectedOption={selectedOption}/>
                    
                ))
                }
            </div>
            
            <div>
            <Primary_Button
                    name={isLastQuestion ? 'Submit' : 'Next'}
                    click={handleNextQuestion}
                />
            </div>
        </div>

    )
}

export default Questions