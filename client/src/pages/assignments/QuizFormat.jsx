import { Header, Footer } from "@components/common";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addQuizzes } from "@services/AssignmentService";
import Question from "@components/assignments/Question";

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
      <div className=" shadow-xl rounded-xl mx-96 my-20 p-10">
        {questions.map((q, qIndex) => (
          <Question
            key={qIndex}
            qIndex={qIndex}
            questionData={q}
            handleQuestionChange={handleQuestionChange}
            handleOptionChange={handleOptionChange}
            handleCorrectAnswerChange={handleCorrectAnswerChange}
            handleMarksChange={handleMarksChange}
            removeQuestion={removeQuestion}
          />
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
