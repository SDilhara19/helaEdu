import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ imageUrl, topic, subject, grade, link }) => {
  const cardContent = (
    <div className="card w-64 shadow-xl hover:scale-105 transition-transform m-2">
      <figure>
        <img src={"src/assets/img/Quizes/Quiz1.jpg"} alt="Quiz" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl mt-2">{topic}</h2>
        <div className="flex justify-start mt-2">
          <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-2">{subject}</div>
          <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-2">{grade}</div>
        </div>
      </div>
    </div>
  );

  return link ? <Link to={link}>{cardContent}</Link> : cardContent;
};

const QuizList = () => {
  const quizzes = [
    {
      topic: 'Quiz Topic 1',
      subject: 'Science',
      grade: 'Grade 8',
      link: '/reviewQuiz', // Add the link here
    },
    {
      topic: 'Quiz Topic 2',
      subject: 'Science',
      grade: 'Grade 7',
    },
    {
      topic: 'Quiz Topic 3',
      subject: 'Science',
      grade: 'Grade 6',
    },
    {
      topic: 'Quiz Topic 4',
      subject: 'Science',
      grade: 'Grade 9',
    },
    {
      topic: 'Quiz Topic 5',
      subject: 'Science',
      grade: 'Grade 10',
    },
  ];

  return (
    <div className="flex justify-center flex-wrap">
      {quizzes.map((quiz, index) => (
        <QuizCard
          key={index}
          imageUrl={quiz.imageUrl}
          topic={quiz.topic}
          subject={quiz.subject}
          grade={quiz.grade}
          link={quiz.link} // Pass the link prop
        />
      ))}
    </div>
  );
};

export default QuizList;
