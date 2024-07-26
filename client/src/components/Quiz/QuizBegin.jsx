import React, { useEffect, useState } from 'react'
import logo from "@assets/icons/hela-edu-white-text.svg";

import Guidlines from './Guidlines'
import Primary_Button from '@components/common/Primary_Button';
import Questions from './Questions';
import Score from './Score';

const QuizBegin = ({ subject }) => {
    const questionbank = [
        {
            question: 'What is the capital of India?',
            options: ['Mumbai', 'Pune', 'Nagpur', 'Delhi'],
            answer: 'Delhi',
            id: 1
        },
        {
            question: 'Who is the Prime Minister of India?',
            options: ['Rahul Gandhi', 'Nitin Gadkari',
                'Narendra Modi', 'Sharad Pawar'],
            answer: 'Narendra Modi',
            id: 2
        },

        {
            question: 'when India got independence?',
            options: ['1950', '1947', '1930', '1945'],
            answer: '1947',
            id: 3
        },

    ];

    const [questions, setQuestions] = useState(questionbank);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [quizStarted, setQuizStarted] = useState(false);
    const [isLastQuestion, setIsLastQuestion] = useState(false)

    useEffect(() => {
        if (quizStarted) {
            const interval = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        setCurrentQuestion(prevQuestion => prevQuestion + 1);
                        // Reset timer for the next question
                        return 10;
                    }
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [currentQuestion, quizStarted]);

    const handleAnswerClick = (selectedAnswer) => {
        console.log('Answer clicked:', selectedAnswer);
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 2 === questions.length) {
            console.log('Question Length:', questions.length)
            setIsLastQuestion(true)
        }
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setTimer(10);
    }

    const startQuiz = () => {
        setQuizStarted(true);
    };

    return (
        <>
            <div>
                <img src={logo} alt="" />
                <h2 className='s-topic'>Weekly Quiz 1 </h2>
            </div>
            <div>

                {!quizStarted ? (
                <div>
                    <Guidlines subject={subject} />
                    <Primary_Button name="Start" click={startQuiz} />
                </div>
                ) : currentQuestion < questions.length ? (
          <Questions
              questions={questions}
              handleNextQuestion={handleNextQuestion}
              currentQuestion={currentQuestion}
              handleAnswerClick={handleAnswerClick}
              timer={timer}
              isLastQuestion={isLastQuestion}
          />
        ) : (
          <Score
             score={score}
             setScore={setScore}
             setCurrentQuestion={setCurrentQuestion}
             setQuizStarted={setQuizStarted}
             setIsLastQuestion={setIsLastQuestion}
             setTimer={setTimer}            
          />
        )}
            </div>

        </>
    )
}

export default QuizBegin