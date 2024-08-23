import { Header, Footer } from "@components/common";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addQuizzes } from "@services/AssignmentService";

export default function QuizFormat() {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "", marks: 0 },
  ]);
  const navigate = useNavigate();
  const params = useParams();
  const assignmentId = params.assginmentId; 

  console.log("Assignment ID:", assignmentId); 
  
  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correctAnswer: "", marks: 0 }]);
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

  const handleCorrectAnswerChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = value;
    setQuestions(newQuestions);
  };

  const handleMarksChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].marks = value;
    setQuestions(newQuestions);
  };

  const addQuizzesToBackend = async () => {
    try {
      if (assignmentId) {
        const response = await addQuizzes(questions, assignmentId);
        if (response.status === 200) {
          console.log(response);
          navigate("/assignmentList");
        }
      } else {
        console.error("Assignment ID is not defined.");
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
    }
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
              <br /><br />
              <input
                className="border border-blue rounded-lg h-32 w-full"
                value={q.question}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              />
            </div>
            <div className="mx-10 my-10">
              <label className="text-3xl">
                Enter your options
                <br />
                Check mark the right answer for your question
              </label>
              <br /><br />
              <div className="flex flex-wrap">
                {q.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center space-x-4 w-1/2 mb-4">
                    <input
                      type="radio"
                      name={`correctAnswer-${qIndex}`}
                      checked={q.correctAnswer === option}
                      onChange={() => handleCorrectAnswerChange(qIndex, option)}
                      className="radio border-blue h-16 w-16"
                    />
                    <input
                      placeholder={`Option ${oIndex + 1}`}
                      className="border border-blue rounded-lg h-16 text-xl px-4"
                      value={option}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="my-10">
                <label className="text-3xl">Total Score</label><br />
                <input
                  type="number"
                  className="border border-blue rounded-lg h-16 text-xl px-4"
                  value={q.marks || ""}
                  onChange={(e) => handleMarksChange(qIndex, e.target.value)}
                />
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
          <button
            className="bg-blue text-white px-10 py-3 rounded-xl text-2xl"
            onClick={addQuizzesToBackend}
          >
            Submit Assignment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
