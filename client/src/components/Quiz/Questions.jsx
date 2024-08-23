import React, { useState, useEffect } from "react";
import Question from "./Question";
import Answer from "./Answer";
import PrimaryButton from "@components/common/PrimaryButton";

const Questions = ({
  questions,
  handleNextQuestion,
  currentQuestion,
  handleAnswerClick,
  timer,
  isLastQuestion,
  questionTime,
}) => {
  const optionIds = ["A", "B", "C", "D"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleAnswerClick(option);
  };

  return (
    <div>
      <Question
        question_no={questions[currentQuestion].id}
        question={questions[currentQuestion].question}
        timer={timer}
        questionTime={questionTime}
        questionLength={questions.length}
      />
      <div className="w-full grid grid-flow-row grid-cols-2 mx-32">
        {questions[currentQuestion].options.map((option, index) => (
          <Answer
            key={index}
            option={option}
            id={optionIds[index]}
            onclick={() => handleOptionClick(option)}
            selectedOption={selectedOption}
        />
        ))}
      </div>

      <div className="flex justify-end mx-32 mt-32">
        <button className="gold-button w-64" onClick={() => handleNextQuestion({timer})}><h4> {isLastQuestion ? "Submit" : "Next"}</h4> </button>
      </div>
    </div>
  );
};
export default Questions;
