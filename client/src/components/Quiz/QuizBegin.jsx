import React, { useEffect, useState } from "react";
import background from "@assets/img/quiz-bg.svg";
import Guidlines from "./Guidlines";
import Questions from "./Questions";
import Score from "./Score";
import QuizHeader from "./QuizHeader";
import StartPopup from "./StartPopup";

const QuizBegin = ({ subject }) => {
  const questionbank = [
    {
      question: "What is not a major export crop in Sri Lanka?",
      options: ["Tea", "Rubber", "Vegetables", "Paddy"],
      answer: "Vegetables",
      id: 1,
    },
    {
      question: "When was a rubber first planted in Sri Lanka?",
      options: ["1890", "1790", "1892", "1895"],
      answer: "1890",
      id: 2,
    },
    {
      question: "What is not a main area where graphite is found in Sri Lanka?",
      options: ["Southern", "Sabaragamuwa", "North Western", "Western"],
      answer: "Western",
      id: 3,
    },
    {
      question: "What is not a significant feature of paddy cultivation?",
      options: [
        "It is a staple food of Sri Lankans",
        "It provides raw materials for many industries",
        "It is a Production of organic fertilizer",
        "It is popular among many countries",
      ],
      answer: "It is popular among many countries",
      id: 4,
    },
    {
      question: "What is a vegetable grown in dry zone?",
      options: ["Potatoes", "Drumsticks", "Long beans", "Carrot"],
      answer: "Drumsticks",
      id: 5,
    },
  ];

  const perQuestionTime = 1000;

  const [questions, setQuestions] = useState(questionbank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(perQuestionTime);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (quizStarted && currentQuestion < questions.length) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            setTotalTime((prevTime) => prevTime + perQuestionTime);
            if (currentQuestion + 1 < questions.length) {
              setCurrentQuestion((prevQuestion) => prevQuestion + 1);
              return perQuestionTime;
            } else {
              setIsLastQuestion(true);
              setQuizStarted(false);
              clearInterval(interval);
              return 0;
            }
          }
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [quizStarted, currentQuestion, questions.length]);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    handleNextQuestion(timer);
  };

  const handleNextQuestion = (remainingTime) => {
    setTotalTime((prevTime) => prevTime + (perQuestionTime - remainingTime));
    if (currentQuestion + 1 === questions.length) {
      setIsLastQuestion(true);
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setTimer(perQuestionTime);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setShowPopup(false);
    setScore(0);
    setCurrentQuestion(0);
    setTotalTime(0);
    setTimer(perQuestionTime);
    setIsLastQuestion(false);
  };

  const showStartPopup = () => {
    setShowPopup(true);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <QuizHeader />
      </div>
      <div>
        {!quizStarted && !showPopup ? (
          <div>
            <Guidlines subject={subject} />
            <div className="text-center m-10">
              <div className="button-29 mt-10" onClick={showStartPopup}>
                Start Quiz!
              </div>
            </div>
          </div>
        ) : showPopup && !quizStarted ? (
          <StartPopup onComplete={startQuiz} />
        ) : quizStarted && currentQuestion < questions.length ? (
          <Questions
            questions={questions}
            handleNextQuestion={handleNextQuestion}
            currentQuestion={currentQuestion}
            handleAnswerClick={handleAnswerClick}
            timer={timer}
            isLastQuestion={isLastQuestion}
            questionTime={perQuestionTime}
          />
        ) : (
          <Score
            score={score}
            setScore={setScore}
            setCurrentQuestion={setCurrentQuestion}
            setQuizStarted={setQuizStarted}
            setIsLastQuestion={setIsLastQuestion}
            setTimer={setTimer}
            totalTime={totalTime}
          />
        )}
      </div>
    </div>
  );
};

export default QuizBegin;
