import React from "react";

const Question = ({
  questionData,
  qIndex,
  handleQuestionChange,
  handleOptionChange,
  handleCorrectAnswerChange,
  handleMarksChange,
  removeQuestion,
}) => {
  return (
    <div className="mb-10">
      <div className="mb-10 flex justify-between">
        <h1 className="text-blue text-4xl">
          Question <span className="text-6xl">{qIndex + 1}</span>
        </h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl text-2xl"
          onClick={() => removeQuestion(qIndex)}
        >
          Remove Question
        </button>
      </div>
      <div className="mx-10">
        <label className="text-3xl">Enter your question</label>
        <br />
        <br />
        <input
          className="border border-blue rounded-lg h-32 w-full"
          value={questionData.question}
          onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
        />
      </div>
      <div className="mx-10 my-10">
        <label className="text-3xl">
          Enter your options
          <br />
          Check mark the right answer for your question
        </label>
        <br />
        <br />
        <div className="flex flex-wrap">
          {questionData.options.map((option, oIndex) => (
            <div
              key={oIndex}
              className="flex items-center space-x-4 w-1/2 mb-4"
            >
              <input
                type="radio"
                name={`correctAnswer-${qIndex}`}
                checked={questionData.correctAnswer === option}
                onChange={() => handleCorrectAnswerChange(qIndex, option)}
                className="radio border-blue h-16 w-16"
              />
              <input
                placeholder={`Option ${oIndex + 1}`}
                className="border border-blue rounded-lg h-16 w-10/12 text-xl px-4"
                value={option}
                onChange={(e) =>
                  handleOptionChange(qIndex, oIndex, e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <div className="my-10">
          <label className="text-3xl">Total Score</label>
          <br />
          <input
            type="number"
            className="border border-blue rounded-lg h-16 text-xl px-4"
            value={questionData.marks || ""}
            onChange={(e) => handleMarksChange(qIndex, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
