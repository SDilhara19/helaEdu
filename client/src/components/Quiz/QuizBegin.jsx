import React, { useEffect, useState } from 'react';
import background from '@assets/img/quiz-bg.svg';
import Guidlines from './Guidlines';
import Questions from './Questions';
import Score from './Score';
import QuizHeader from './QuizHeader';
import StartPopup from './StartPopup';

const QuizBegin = ({ subject }) => {
    const questionbank = [
        {
            question: 'What is not a major export crop in Sri Lanka?',
            options: ['Tea', 'Rubber', 'Vegetables', 'Paddy'],
            answer: 'Vegetables',
            id: 1
        },
        {
            question: 'When was a rubber first planted in Sri Lanka?',
            options: ['1890', '1790', '1892', '1895'],
            answer: '1890',
            id: 2
        },
        {
            question: 'What is not a main area where graphite is found in Sri Lanka?',
            options: ['Southern', 'Sabaragamuwa', 'North Western', 'Western'],
            answer: 'Western',
            id: 3
        },
    ];

    const [questions, setQuestions] = useState(questionbank);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [quizStarted, setQuizStarted] = useState(false);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

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
        if (currentQuestion + 1 === questions.length) {
            setIsLastQuestion(true);
        }
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setTimer(10);
    };

    const startQuiz = () => {
        setQuizStarted(true);
        setShowPopup(false);
    };

    const showStartPopup = () => {
        setShowPopup(true);
    };

    return (
        <div className="relative min-h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${background})` }}>
            <div>
                <QuizHeader />
            </div>
            <div>
                
                {!quizStarted && !showPopup ? (
                    <div>
                        <Guidlines subject={subject} />
                        <div className='text-center m-10'>
                            <div
                                className='button-29 animate-wiggle animate-infinite animate-ease-in'
                                onClick={showStartPopup}
                            >
                                Start Quiz!
                            </div>
                        </div>
                    </div>
                ) : showPopup && !quizStarted ? (<StartPopup onComplete={startQuiz} />)

                : quizStarted && currentQuestion < questions.length ? (
                    <Questions
                        questions={questions}
                        handleNextQuestion={handleNextQuestion}
                        currentQuestion={currentQuestion}
                        handleAnswerClick={handleAnswerClick}
                        timer={timer}
                        isLastQuestion={isLastQuestion}
                    />
                ) :  (
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
        </div>
    );
};

export default QuizBegin;
