import { Header, Footer } from "@components/common";
import React, { useState } from "react";

export default function QuizFormat() {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""] },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""] }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <Header />
      <div className="border border-blue rounded-xl mx-64 my-20 p-10">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-10">
            <div className="mb-10 flex justify-between">
              <h1 className="text-blue text-4xl">
                Question <span className="text-6xl">{qIndex + 1}</span>
                <span>/10</span>
              </h1>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-xl text-2xl"
                onClick={() => removeQuestion(qIndex)}
              >
                Remove Question
              </button>
            </div>
            <div className="mx-10">
              <label className="text-3xl">Enter your question </label>
              <br />
              <br />
              <input
                className="border border-blue rounded-xl h-32 w-full"
                value={q.question}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              />
            </div>
            <div className="my-10">
              <label className="text-3xl">
                Enter your options
                <br />
                Check mark the right answer for your question
              </label>
              <br />
              <br />
              <div className="flex justify-between mb-4">
                {[0, 1].map((oIndex) => (
                  <div
                    key={oIndex}
                    className="flex items-center space-x-4 w-1/2 mx-10"
                  >
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox border-blue h-16 w-16 [--chkbg:theme(colors.white)] [--chkfg:blue] checked:border-blue"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        placeholder={`option ${oIndex + 1}`}
                        className="border border-blue rounded-xl h-16 w-full text-xl"
                        value={q.options[oIndex]}
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mb-4">
                {[2, 3].map((oIndex) => (
                  <div
                    key={oIndex}
                    className="flex items-center space-x-4 w-1/2 mx-10"
                  >
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox border-blue h-16 w-16 [--chkbg:theme(colors.white)] [--chkfg:blue] checked:border-blue"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        placeholder={`option ${oIndex + 1}`}
                        className="border border-blue rounded-xl h-16 w-full text-xl"
                        value={q.options[oIndex]}
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between mx-10 mb-10">
          <button
            className="bg-yellow text-white px-10 py-3 rounded-xl text-2xl"
            onClick={addQuestion}
          >
            Add Question
          </button>
          {/* <button className="bg-yellow text-white px-10 py-3 rounded-xl text-2xl">
            Next
          </button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
