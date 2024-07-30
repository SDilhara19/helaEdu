import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Card( {subject} ) {
  const navigator = useNavigate();
  return (
    <>
     <div
      className="subject-card shadow-xl card"
      onClick={() => {
        navigator(`/subject/${subject}`);
      }}
    >
      <div className="card-icon">
        <FontAwesomeIcon icon={faBook} size="5x" />{" "}
      </div>
      <div className="card-text">
        <h3>{subject}</h3>
      </div>
    </div>
    </>
   
  );
}
export default Card;
